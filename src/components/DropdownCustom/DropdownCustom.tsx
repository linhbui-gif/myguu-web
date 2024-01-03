import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import { TDropdownCustomProps } from './DropdownCustom.types';
import './DropdownCustom.scss';

const DropdownCustom: React.FC<TDropdownCustomProps> = ({
  visible,
  overlay,
  children,
  trigger,
  overlayStyle,
  placement,
  className,
  noUseVisible,
  overlayClassName,
  getPopupContainer,
  onVisibleChange,
}) => {
  const handleVisibleChange = (currentVisible: boolean): void => {
    onVisibleChange?.(currentVisible);
  };

  const props = {
    overlay,
    placement,
    overlayStyle,
    overlayClassName: classNames('DropdownCustom-overlay', overlayClassName),
    trigger: trigger || ['click'],
    getPopupContainer,
    onVisibleChange: handleVisibleChange,
  };

  const antdDropdownProps = noUseVisible
    ? props
    : {
        visible,
        ...props,
      };

  return (
    <div className={classNames('DropdownCustom', className)}>
      <AntdDropdown {...antdDropdownProps}>
        <div className="DropdownCustom-wrapper">{children}</div>
      </AntdDropdown>
    </div>
  );
};

export default DropdownCustom;
