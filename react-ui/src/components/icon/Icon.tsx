import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import './Icon.scss';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export type IconProps = FontAwesomeIconProps & {
  theme?: ThemeProps;
};

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;

  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

Icon.defaultProps = {
  theme: 'dark',
};

export default Icon;
