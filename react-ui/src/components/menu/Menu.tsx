import React from 'react';
import classNames from 'classnames';

type MenuModel = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex: number) => void;

type MenuContextType = {
  index: number;
  onSelect?: SelectCallback;
};

export type MenuProps = {
  className?: string;
  style?: React.CSSProperties;
  defaultIndex?: number;
  mode?: MenuModel;
  onSelect?: SelectCallback;
};

export const MenuContext = React.createContext<MenuContextType>({
  index: 0,
});

const Menu: React.FC<MenuProps> = (props) => {
  const { children, className, style, defaultIndex, mode, onSelect } = props;

  const [index, setIndex] = React.useState(defaultIndex);

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  // 处理菜单项点击
  const handleSelect = (index: number) => {
    setIndex(index);
    onSelect && onSelect(index);
  };

  // 每个菜单独立的上下文
  const transferContext: MenuContextType = {
    index: index ?? 0,
    onSelect: handleSelect,
  };

  return (
    <MenuContext.Provider value={transferContext}>
      <ul className={classes} style={style} data-testid="menu">
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
