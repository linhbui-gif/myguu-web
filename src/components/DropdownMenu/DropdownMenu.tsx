import React from 'react';
import { Dropdown as AntdDropdown } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

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
            className={classNames('DropdownMenu-list-item', { disabled: item?.disabled, danger: item.danger })}
            onClick={(): void => {
              if (!item?.disabled) {
                if (item?.link) {
                  navigate(item.link);
                } else {
                  item.onClick?.(item);
                }
              }
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
