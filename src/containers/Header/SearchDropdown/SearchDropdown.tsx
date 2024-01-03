import React from 'react';

import Button, { EButtonStyleType } from '@/components/Button';

import { TSearchDropdownProps } from './SearchDropdown.types';
import './SearchDropdown.scss';
import Tags from '@/components/Tags';
import { EIconColor, EIconName } from '@/components/Icon';

const SearchDropdown: React.FC<TSearchDropdownProps> = () => {
  return (
    <div className="SearchDropdown">
      <div className="SearchDropdown-wrapper">
        <div className="SearchDropdown-title flex items-center justify-between">
          Tìm kiếm gần đây
          <Button title="Xóa lịch sử" size="small" styleType={EButtonStyleType.PRIMARY_TEXT} />
        </div>
        <div className="SearchDropdown-tags">
          <Tags
            options={[
              {
                value: '1',
                label: 'Spa',
                data: { reverse: true, iconName: EIconName.X, iconColor: EIconColor.MINE_SHAFT },
              },
              {
                value: '2',
                label: 'Massage',
                data: { reverse: true, iconName: EIconName.X, iconColor: EIconColor.MINE_SHAFT },
              },
              {
                value: '3',
                label: 'Trị mụn',
                data: { reverse: true, iconName: EIconName.X, iconColor: EIconColor.MINE_SHAFT },
              },
              {
                value: '4',
                label: 'Wax lông',
                data: { reverse: true, iconName: EIconName.X, iconColor: EIconColor.MINE_SHAFT },
              },
              {
                value: '5',
                label: 'Chân mày',
                data: { reverse: true, iconName: EIconName.X, iconColor: EIconColor.MINE_SHAFT },
              },
              {
                value: '6',
                label: 'Làm tóc',
                data: { reverse: true, iconName: EIconName.X, iconColor: EIconColor.MINE_SHAFT },
              },
            ]}
          />
        </div>

        <div className="SearchDropdown-title flex items-center justify-between" style={{ color: EIconColor.TAN_HIDE }}>
          Xu Hướng
        </div>
        <div className="SearchDropdown-tags popular">
          <Tags
            options={[
              {
                value: '1',
                label: 'Spa',
              },
              {
                value: '2',
                label: 'Massage',
              },
              {
                value: '3',
                label: 'Trị mụn',
              },
              {
                value: '4',
                label: 'Wax lông',
              },
              {
                value: '5',
                label: 'Chân mày',
              },
              {
                value: '6',
                label: 'Làm tóc',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
