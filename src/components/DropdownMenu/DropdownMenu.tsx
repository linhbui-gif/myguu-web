import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';

import { TDropdownMenuProps } from './DropdownMenu.types';
import './DropdownMenu.scss';

const DropdownMenu: React.FC<TDropdownMenuProps> = ({
  children,
  trigger,
  placement,
  overlayClassName,
  options = [],
  disabled,
  className,
  onClickMenuItem,
  onVisibleChange,
}) => {
  const handleVisibleChange = (currentVisible: boolean): void => {
    onVisibleChange?.(currentVisible);
  };

  const antdDropdownProps = {
    placement,
    disabled,
    overlayClassName: classNames('DropdownMenu-overlay', overlayClassName),
    trigger: trigger || ['click'],
    onVisibleChange: handleVisibleChange,
  };

  const renderDropdownMenuOverlay = (): React.ReactElement => {
    return (
      <div className="DropdownMenu-list">
        {options.map((item) => (
          <div
            key={item.value}
            className="DropdownMenu-list-item"
            onClick={(): void => {
              item.onClick?.(item);
              onClickMenuItem?.(item);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={classNames('DropdownMenu', className)}>
      <AntdDropdown {...antdDropdownProps} overlay={renderDropdownMenuOverlay()}>
        <div className="DropdownMenu-wrapper">{children}</div>
      </AntdDropdown>
    </div>
  );
};

export default DropdownMenu;
