import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import Button, { EButtonStyleType } from '@/components/Button';
import Radio from '@/components/Radio';

import { TAddressCardProps } from './AddressCard.types.d';
import './AddressCard.scss';

const AddressCard: React.FC<TAddressCardProps> = ({ active, name, description, disabled, onEdit, onDelete }) => {
  return (
    <div className="AddressCard flex items-center justify-between flex-wrap">
      <div className="AddressCard-icon">
        {active ? (
          <Icon name={EIconName.LocationFill} color={EIconColor.PRIMARY} />
        ) : (
          <Icon name={EIconName.Location} color={EIconColor.REGENT_GRAY} />
        )}
      </div>
      <div className="AddressCard-info">
        <div className="AddressCard-info-title">{name}</div>
        <div className="AddressCard-info-description">{description}</div>
      </div>
      <div className="AddressCard-action flex items-center">
        {active ? (
          <Radio label="Mặc định" value />
        ) : (
          <>
            {/* <Button shape="rectangle" size="small" title="Đặt làm Mặc định" styleType={EButtonStyleType.GRAY_OUTLINE} /> */}
          </>
        )}

        <Button
          className="AddressCard-action-edit"
          size="small"
          iconName={EIconName.PencilEdit}
          iconColor={EIconColor.GRAY_CHATEAU}
          styleType={EButtonStyleType.TRANSPARENT}
          onClick={onEdit}
          disabled={disabled}
        />

        {!active && (
          <Button
            size="small"
            iconName={EIconName.Trash}
            iconColor={EIconColor.GRAY_CHATEAU}
            styleType={EButtonStyleType.TRANSPARENT}
            onClick={onDelete}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

export default AddressCard;
