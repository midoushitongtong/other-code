import React from 'react';
import Menu from '../components/menu/Menu';
import MenuItem from '../components/menu/MenuItem';
import MenuSubMenuItem from '../components/menu/MenuSubMenuItem';

const PreviewMenu: React.FC = () => {
  return (
    <>
      <Menu
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

      <br />
      <br />
      <hr />
      <br />
      <br />

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
    </>
  );
};

export default PreviewMenu;
