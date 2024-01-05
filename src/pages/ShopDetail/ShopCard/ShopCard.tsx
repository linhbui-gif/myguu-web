import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '@/components/Avatar';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import { TRootState } from '@/redux/reducers';

import { TShopCardProps } from './ShopCard.types';
import './ShopCard.scss';

const ShopCard: React.FC<TShopCardProps> = () => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;

  return (
    <div className="ShopCard">
      <div className="container">
        <div className="ShopCard-wrapper">
          <div className="ShopCard-background">{storeState?.banner && <img src={storeState?.banner} alt="" />}</div>
          <div className="ShopCard-info flex items-end">
            <div className="ShopCard-info-avatar">
              <Avatar image={storeState?.avatar} />
            </div>
            <div className="ShopCard-info-main flex items-center justify-between">
              <div className="ShopCard-info-main-item">
                <h2 className="ShopCard-info-title">{storeState?.name}</h2>
                <div className="ShopCard-info-detail flex items-center">
                  <div className="ShopCard-info-detail-item flex items-center">
                    <Icon name={EIconName.Chat} color={EIconColor.REGENT_GRAY} /> {storeState?.vote_number || 0}
                  </div>

                  <div className="ShopCard-info-detail-item flex items-center">
                    <Icon name={EIconName.Heart} color={EIconColor.POMEGRANATE} /> {storeState?.like_number || 0}
                  </div>

                  <div className="ShopCard-info-detail-item flex items-center">
                    <Icon name={EIconName.StarFill} /> {storeState?.vote || 0}
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
