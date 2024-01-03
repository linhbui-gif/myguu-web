import React from 'react';

import ImageShop from '@/assets/images/image-content-3.png';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import { TShopAddressCardProps } from './ShopAddressCard.types.d';
import './ShopAddressCard.scss';

const ShopAddressCard: React.FC<TShopAddressCardProps> = ({ favorited }) => {
  return (
    <div className="ShopAddressCard flex items-center">
      <div className="ShopAddressCard-image">
        <img src={ImageShop} alt="" />
      </div>
      <div className="ShopAddressCard-info">
        <div className="ShopAddressCard-info-title">Minh Vân Make up</div>
        <div className="ShopAddressCard-info-description flex items-center">
          <Icon name={EIconName.House} color={EIconColor.REGENT_GRAY} />
          97-99 Láng Hạ - Đống Đa- Hà Nội
        </div>
        <div className="ShopAddressCard-info-detail flex items-center">
          <div className="ShopAddressCard-info-detail-item flex items-center">
            <Icon name={EIconName.Location} color={EIconColor.REGENT_GRAY} />
            150m
          </div>
          <div className="ShopAddressCard-info-detail-item flex items-center">
            <Icon name={EIconName.Chat} color={EIconColor.REGENT_GRAY} />
            15
          </div>
          <div className="ShopAddressCard-info-detail-item flex items-center">
            <Icon name={EIconName.StarFill} />
            5.0
          </div>
        </div>
        {favorited ? (
          <div className="ShopAddressCard-info-heart">
            <Icon name={EIconName.Heart} color={EIconColor.POMEGRANATE} />
          </div>
        ) : (
          <div className="ShopAddressCard-info-btn flex">
            <Button title="Xem chi tiết cửa hàng" size="small" styleType={EButtonStyleType.PRIMARY_TRANSPARENT} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopAddressCard;
