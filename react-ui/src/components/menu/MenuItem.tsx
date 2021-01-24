import React from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';

export type MenuItemProps = {
  className?: string;
  style?: React.CSSProperties;
  index: number;
  disabled?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, className, style, index, disabled } = props;

  const menu = React.useContext(MenuContext);

  const classes = classNames('menu-item', className, {
    'is-active': menu.index === index,
    'is-disabled': disabled,
  });

  const handleClick = () => {
    if (menu.onSelect && !disabled) {
      menu.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
