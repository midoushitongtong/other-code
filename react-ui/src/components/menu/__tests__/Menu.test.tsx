import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Menu, { MenuProps } from '../Menu';
import MenuItem from '../MenuItem';

describe('test Menu and MenuItem Component', () => {
  beforeEach(() => {
    // 预处理工作, 这里先不弄
    // 每次完成后会自动 cleanup()
  });

  // 默认菜单
  it('should render correct Menu and MenuItem based on default props', () => {
    const props: MenuProps = {
      defaultIndex: 0,
      className: 'test',
    };

    const result = render(
      <Menu {...props}>
        <MenuItem index={0}>one</MenuItem>
        <MenuItem index={1}>two</MenuItem>
        <MenuItem index={2} disabled>
          three
        </MenuItem>
      </Menu>
    );

    const menuElement = result.getByTestId('menu');
    const oneElement = result.getByText('one');
    const threeElement = result.getByText('three');

    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu test');
    expect(menuElement.getElementsByTagName('li').length).toEqual(3);
    expect(oneElement).toBeInTheDocument();
    // 第 1 个菜单项应该被激活
    expect(oneElement).toHaveClass('menu-item is-active');
    expect(threeElement).toBeInTheDocument();
    // 第 3 个菜单项应该被禁用
    expect(threeElement).toHaveClass('menu-item is-disabled');
  });

  // 菜单项能否正常点击, disabled 的菜单不能被点击
  it('click item shoud change active and call the right callback', () => {
    const onSelect = jest.fn();

    const props: MenuProps = {
      defaultIndex: 0,
      onSelect,
    };

    const result = render(
      <Menu {...props}>
        <MenuItem index={0}>one</MenuItem>
        <MenuItem index={1}>two</MenuItem>
        <MenuItem index={2} disabled>
          three
        </MenuItem>
      </Menu>
    );

    const oneElement = result.getByText('one');
    const twoElement = result.getByText('two');
    const threeElement = result.getByText('three');

    fireEvent.click(twoElement);
    // 点击后, 第 2 个菜单项应该被激活
    expect(twoElement).toHaveClass('is-active');
    // 点击后, 第 1 个菜单项应该移除激活
    expect(oneElement).not.toHaveClass('is-active');
    // 点击后, onSelect 方法应该被调用过一次
    expect(onSelect.mock.calls.length).toBe(1);

    fireEvent.click(threeElement);
    // 点击后,第 3 个菜单项点击了不会添加激活 class (因为添加了 disabled props)
    expect(threeElement).not.toHaveClass('is-active');
    // 点击后,第 3 个菜单项点击了不会触发 onSelect (因为添加了 disabled props)
    expect(onSelect.mock.calls.length).toBe(1);
  });

  // 布局类型(垂直布局)
  it('shoud render vertical mode when mode is set to vertial', () => {
    const props: MenuProps = {
      mode: 'vertical',
    };

    const result = render(
      <Menu {...props}>
        <MenuItem index={0}>one</MenuItem>
        <MenuItem index={1}>two</MenuItem>
        <MenuItem index={2} disabled>
          three
        </MenuItem>
      </Menu>
    );

    const menuElement = result.getByTestId('menu');

    expect(menuElement).toHaveClass('menu-vertical');
  });
});
