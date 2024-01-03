import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Avatar from '@/components/Avatar';

import { TStaffSelectProps } from './StaffSelect.types';
import './StaffSelect.scss';

const StaffSelect: React.FC<TStaffSelectProps> = ({ value, onChange, options = [] }) => {
  return (
    <div className="StaffSelect flex flex-wrap">
      {options.map((item) => (
        <div
          key={item.value}
          className={classNames('StaffSelect-item', {
            active: value?.value === item?.value,
          })}
          onClick={(): void => onChange?.(item)}
        >
          <div className="StaffSelect-item-checked flex items-center justify-center">
            <Icon name={EIconName.Check} color={EIconColor.WHITE} />
          </div>
          <div className="StaffSelect-item-avatar flex justify-center">
            <Avatar
              image={item?.data?.avatar}
              iconNameDefault={item?.data?.iconNameDefault}
              iconColorDefault={EIconColor.WHITE}
            />
          </div>
          <div className="StaffSelect-item-name">{item?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StaffSelect;
