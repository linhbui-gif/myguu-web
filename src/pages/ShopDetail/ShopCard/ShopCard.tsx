import React from 'react';

import BgShopDetail from '@/assets/images/bg-shop-detail.png';
import ImageAvatarShopDetail from '@/assets/images/image-avatar-shop-detail.png';

import { TShopCardProps } from './ShopCard.types';
import './ShopCard.scss';
import Avatar from '@/components/Avatar';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

const ShopCard: React.FC<TShopCardProps> = () => {
  return (
    <div className="ShopCard">
      <div className="container">
        <div className="ShopCard-wrapper">
          <div className="ShopCard-background">
            <img src={BgShopDetail} alt="" />
          </div>
          <div className="ShopCard-info flex items-end">
            <div className="ShopCard-info-avatar">
              <Avatar image={ImageAvatarShopDetail} />
            </div>
            <div className="ShopCard-info-main flex items-center justify-between">
              <div className="ShopCard-info-main-item">
                <h2 className="ShopCard-info-title">Skin & Beauty Spa</h2>
                <div className="ShopCard-info-detail flex items-center">
                  <div className="ShopCard-info-detail-item flex items-center">
                    <Icon name={EIconName.Chat} color={EIconColor.REGENT_GRAY} />
                    15
                  </div>
                  <div className="ShopCard-info-detail-item flex items-center">
                    <Icon name={EIconName.Heart} color={EIconColor.POMEGRANATE} />7
                  </div>
                  <div className="ShopCard-info-detail-item flex items-center">
                    <Icon name={EIconName.StarFill} />
                    5.0
                  </div>
                </div>
              </div>

              <div className="ShopCard-info-main-item">
                <div className="ShopCard-info-btn flex items-center">
                  <Button
                    iconName={EIconName.Chat}
                    iconColor={EIconColor.TAN_HIDE}
                    styleType={EButtonStyleType.PRIMARY_TRANSPARENT}
                  />
                  <Button
                    className="expand-padding"
                    iconName={EIconName.Calendar}
                    iconColor={EIconColor.WHITE}
                    styleType={EButtonStyleType.PRIMARY}
                    title="ĐẶT LỊCH"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
