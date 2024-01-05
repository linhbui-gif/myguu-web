import React from 'react';
import { navigate } from '@reach/router';

import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import { TShopAddressCardProps } from './ShopAddressCard.types.d';
import './ShopAddressCard.scss';

const ShopAddressCard: React.FC<TShopAddressCardProps> = ({
  image,
  title,
  address,
  distance,
  vote,
  favorited,
  link,
}) => {
  const handleNavigateLink = (): void => {
    if (link) navigate(link);
  };

  return (
    <div className="ShopAddressCard flex items-center">
      <div className="ShopAddressCard-image">{image && <img src={image} alt="" />}</div>
      <div className="ShopAddressCard-info">
        <div className="ShopAddressCard-info-title capitalize" onClick={handleNavigateLink}>
          {title}
        </div>
        <div className="ShopAddressCard-info-description flex items-center capitalize">
          <Icon name={EIconName.House} color={EIconColor.REGENT_GRAY} />
          {address}
        </div>
        <div className="ShopAddressCard-info-detail flex items-center">
          {distance && (
            <div className="ShopAddressCard-info-detail-item flex items-center">
              <Icon name={EIconName.Location} color={EIconColor.REGENT_GRAY} />
              {distance} km
            </div>
          )}

          <div className="ShopAddressCard-info-detail-item flex items-center">
            <Icon name={EIconName.Chat} color={EIconColor.REGENT_GRAY} /> 0
          </div>

          {vote && (
            <div className="ShopAddressCard-info-detail-item flex items-center">
              <Icon name={EIconName.StarFill} />
              {vote}
            </div>
          )}
        </div>
        {favorited ? (
          <div className="ShopAddressCard-info-heart">
            <Icon name={EIconName.Heart} color={EIconColor.POMEGRANATE} />
          </div>
        ) : (
          <div className="ShopAddressCard-info-btn flex">
            <Button
              title="Xem chi tiết cửa hàng"
              size="small"
              styleType={EButtonStyleType.PRIMARY_TRANSPARENT}
              onClick={handleNavigateLink}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopAddressCard;
