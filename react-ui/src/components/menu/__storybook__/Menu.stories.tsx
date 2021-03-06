import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Stories,
  Props,
} from '@storybook/addon-docs/blocks';
import Menu, { MenuProps } from '../Menu';
import MenuItem from '../MenuItem';
import MenuSubMenuItem from '../MenuSubMenuItem';
import '../../../styles/index.scss';

export default {
  title: 'ReactUI/Menu',
  component: Menu,
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Stories />
          <Props />
        </>
      ),
    },
  },
} as Meta;

// ==============================================================================================================================================================================================================================================
export const Horizontal: Story<MenuProps> = (args) => (
  <Menu
    {...args}
    onSelect={(index) => {
      console.log(index);
    }}>
    <MenuItem>link1</MenuItem>
    <MenuItem>link2</MenuItem>
    <MenuSubMenuItem title="dropdown">
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </MenuSubMenuItem>
    <MenuItem disabled>link4</MenuItem>
  </Menu>
);

// ==============================================================================================================================================================================================================================================
export const Vertical: Story<MenuProps> = (args) => (
  <Menu
    mode="vertical"
    defaultOpenSubMenus={['2']}
    onSelect={(index) => {
      console.log(index);
    }}>
    <MenuItem>link1</MenuItem>
    <MenuItem>link2</MenuItem>
    <MenuSubMenuItem title="dropdown">
      <MenuItem>dropdown1</MenuItem>
      <MenuItem>dropdown2</MenuItem>
    </MenuSubMenuItem>
    <MenuItem disabled>link4</MenuItem>
  </Menu>
);
