import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import { TButtonProps } from '@/components/Button/Button.types';
import Icon from '@/components/Icon';

import './Button.scss';

const Button: React.FC<TButtonProps> = ({
  className,
  size,
  iconName,
  iconColor,
  iconStrokeWidth,
  shadow = true,
  type,
  shape,
  htmlType,
  title,
  danger,
  reverse,
  link,
  disabled,
  loading,
  styleType,
  countNumber,
  onClick,
}) => {
  const handleClickButton = (): void => {
    if (link) navigate(link);
    else onClick?.();
  };
  return (
    <div
      className={classNames('Button', styleType, className, shape, {
        shadow,
        'only-icon': !title && iconName,
        reverse,
      })}
    >
      <AntdButton
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled}
        loading={loading}
      >
        {iconName && (
          <div className="Button-icon">
            <Icon name={iconName} color={iconColor} strokeWidth={iconStrokeWidth} />
          </div>
        )}
        {title && <span className="Button-title">{title}</span>}
        {!!countNumber && <div className="Button-count flex items-center justify-center">{countNumber}</div>}
      </AntdButton>
    </div>
  );
};

export default Button;
