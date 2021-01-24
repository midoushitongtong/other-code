import React from 'react';
import Menu from '../components/menu/Menu';
import MenuItem from '../components/menu/MenuItem';

const PreviewMenu: React.FC = () => {
  return (
    <>
      <Menu
        onSelect={(index) => {
          console.log(index);
        }}>
        <MenuItem index={0}>link1</MenuItem>
        <MenuItem index={1}>link2</MenuItem>
        <MenuItem index={2} disabled>
          link3
        </MenuItem>
      </Menu>

      <Menu
        mode="vertical"
        onSelect={(index) => {
          console.log(index);
        }}>
        <MenuItem index={0}>link1</MenuItem>
        <MenuItem index={1}>link2</MenuItem>
        <MenuItem index={2} disabled>
          link3
        </MenuItem>
      </Menu>
    </>
  );
};

export default PreviewMenu;
