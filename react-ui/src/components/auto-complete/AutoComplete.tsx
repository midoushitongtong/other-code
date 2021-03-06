import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useDebounce from '../../hooks/useDebounce';
import Icon from '../icon/Icon';
import Input, { InputProps } from '../input/Input';

type DataSourceItemObject = {
  value: string;
  text: string;
};

export type DataSourceItem = DataSourceItemObject;

type OwnProps = {
  // 获取自动补全下拉列表(返回的是联合类型)
  fetchSugestions: (keyword: string) => DataSourceItem[] | Promise<DataSourceItem[]>;
  // 选择了某个下拉
  onSelect?: (value: string, item: DataSourceItem & any) => void;
  // 自定义渲染下拉
  renderSelectOption?: (string: string, item: DataSourceItem & any) => JSX.Element;
};

// 移除 "onSelect" 属性, 防止和 OwnProps 冲突
export type AutoCompleteProps = OwnProps & Omit<InputProps, 'onSelect'>;

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { fetchSugestions, onSelect, renderSelectOption, ...resetProps } = props;

  const [value, setValue] = React.useState(props.value);

  const [fetchLoading, setFetchLoading] = React.useState(false);

  const [sugestions, setSugestions] = React.useState<DataSourceItem[]>([]);

  const debounceValue = useDebounce(value);

  // 监听 debounceValue 值, 刷新下拉数据
  React.useEffect(() => {
    if (debounceValue && typeof debounceValue === 'string') {
      console.log('trigger');

      // input 有值, 更新下拉列表
      const results = fetchSugestions(debounceValue);

      if (results instanceof Promise) {
        setFetchLoading(true);
        results
          .then((data) => {
            setSugestions(data);
          })
          .finally(() => {
            setFetchLoading(false);
          });
      } else {
        setSugestions(results);
      }
    } else {
      // input 无值, 清空下拉列表
      setSugestions([]);
    }
  }, [debounceValue, fetchSugestions]);

  // 更新 input 值
  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value);
  }, []);

  // 下拉菜单点击
  const handleSelect = React.useCallback(
    (item: DataSourceItem) => {
      setValue(item.text);
      setSugestions([]);
      if (onSelect) {
        onSelect(item.value, item);
      }
    },
    [setValue, setSugestions, onSelect]
  );

  // 生成下拉菜单项
  const generateSelectOption = React.useCallback(
    (item: DataSourceItem) => {
      // props 有传就用 props 的方法, 没有就默认
      return renderSelectOption ? renderSelectOption(item.text, item) : item.text;
    },
    [renderSelectOption]
  );

  // 生成下拉菜单
  const generateDropdown = React.useCallback(() => {
    return (
      <ul>
        {sugestions.map((item, index) => (
          <li key={index} onClick={() => handleSelect(item)}>
            {generateSelectOption(item)}
          </li>
        ))}
      </ul>
    );
  }, [sugestions, handleSelect, generateSelectOption]);

  return (
    <div className="auto-complete">
      <Input
        {...resetProps}
        value={value}
        onChange={handleChange}
        icon={fetchLoading ? <Icon icon={faSpinner} spin /> : null}
      />
      {sugestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
