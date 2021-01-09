import React, { ReactNode } from 'react';
import classNames from 'classnames';

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export enum ButtonSise {
  Large = 'lg',
  Small = 'sm',
}

type OwnProps = {
  className?: string;
  type?: ButtonType;
  size?: ButtonSise;
  disabled?: boolean;
  href?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

// 移除 "type" 以及 "onClick" 属性, 防止和 OwnProps 冲突
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type' | 'onClick'>;

// 移除 "onClick" 属性, 防止和 OwnProps 冲突
type NativeAnchorProps = Omit<React.AnchorHTMLAttributes<HTMLElement>, 'onClick'>;

type Props = OwnProps & Partial<NativeButtonProps & NativeAnchorProps>;

const Button: React.FC<Props> = (props) => {
  const { type, size, disabled, href, className, children, ...resetProps } = props;

  const buttonClass = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    // 超链接类型的按钮, 需要将 disabed 添加到 class 中
    disabled: type === ButtonType.Link && disabled,
  });

  if (type === ButtonType.Link && href) {
    return (
      <a href={href} className={buttonClass} {...resetProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} disabled={disabled} {...resetProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default,
};

export default Button;
