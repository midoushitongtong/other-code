import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button, { Props, ButtonSise, ButtonType } from '../Button';

// 分类
describe('Test Button Component', () => {
  // 渲染默认按钮
  it('should render the correct default button', () => {
    const props: Props = {
      onClick: jest.fn(),
    };

    const result = render(<Button {...props}>aaa</Button>);

    const element = result.queryByText('aaa');

    // 断言文档中是否存在 aaa
    expect(element).toBeInTheDocument();
    // 默认 tagName 应该是 button
    expect(element?.tagName).toEqual('BUTTON');
    // 默认应该包含的 class
    expect(element).toHaveClass('btn btn-default');
    // 默认应该不是 disabled
    expect(element).not.toHaveClass('disabled');
    expect(element).not.toHaveAttribute('disabled');
    // click 事件能否正常调用
    if (element) {
      fireEvent.click(element);
    }
    expect(props.onClick).toHaveBeenCalled();

    expect(result).toMatchSnapshot();
  });

  // 渲染不同 props 情况下的按钮
  it('should render the correct based on different props', () => {
    const props: Props = {
      type: ButtonType.Default,
      size: ButtonSise.Small,
      className: 'ccc',
    };

    const result = render(<Button {...props}>aaa</Button>);

    const element = result.queryByText('aaa');

    // 是否包含 props 中的 type
    expect(element).toHaveClass('btn-default');
    // 是否包含 props 中的 size
    expect(element).toHaveClass('btn-sm');
    // 是否包含 props 中的 ccc
    expect(element).toHaveClass('ccc');

    expect(result).toMatchSnapshot();
  });

  // 当类型是 link 并且提供了 href 属性, 应该渲染 <a/> 链接而不是 <button/>
  it('should render a link when btnType equals link and href is provided', () => {
    const props: Props = {
      type: ButtonType.Link,
      href: 'http://127.0.0.1',
    };

    const result = render(<Button {...props}>aaa</Button>);

    const element = result.queryByText('aaa');

    // 应该渲染 a 标签
    expect(element?.tagName).toEqual('A');
    // 应该包含 href 属性
    expect(element).toHaveAttribute('href');
    // 使用与 props 中的 href 相同
    expect(element?.getAttribute('href')).toEqual(props.href);

    expect(result).toMatchSnapshot();
  });

  // 渲染 disabled 按钮
  it('should render disabled button when disabled set to true', () => {
    const props: Props = {
      disabled: true,
      onClick: jest.fn(),
    };

    const result = render(<Button {...props}>aaa</Button>);

    const element = result.queryByText('aaa') as HTMLButtonElement;

    // 应该包含 disabled 属性
    expect(element.disabled).toBeTruthy();
    // click 事件应该不能被调用
    fireEvent.click(element);
    expect(props.onClick).not.toHaveBeenCalled();

    expect(result).toMatchSnapshot();
  });
});
