import React from 'react';

import ImageService from '@/assets/images/image-service-card-3.png';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import ShopAddressCard from '@/components/ShopAddressCard';

import { TServiceDetailCardProps } from './ServiceDetailCard.types';
import './ServiceDetailCard.scss';

const ServiceDetailCard: React.FC<TServiceDetailCardProps> = () => {
  return (
    <div className="ServiceDetailCard">
      <div className="container">
        <div className="ServiceDetailCard-wrapper flex">
          <div className="ServiceDetailCard-image">
            <img src={ImageService} alt="" />
          </div>
          <div className="ServiceDetailCard-info">
            <h1 className="ServiceDetailCard-info-title">Trang điểm cô dâu</h1>
            <div className="ServiceDetailCard-info-detail flex items-center">
              <div className="ServiceDetailCard-info-detail-item flex items-center">
                <Icon name={EIconName.Calendar} color={EIconColor.REGENT_GRAY} />0 lượt đặt
              </div>
              <div className="ServiceDetailCard-info-detail-item flex items-center">
                <Icon name={EIconName.Heart} color={EIconColor.POMEGRANATE} />7
              </div>
              <div className="ServiceDetailCard-info-detail-item flex items-center">
                <Icon name={EIconName.StarFill} />
                5.0
              </div>
            </div>
            <div className="ServiceDetailCard-info-price">650,000 đ</div>
            <ShopAddressCard />

            <div className="ServiceDetailCard-info-btn flex items-center">
              <Button
                className="expand-padding"
                iconName={EIconName.Calendar}
                iconColor={EIconColor.WHITE}
                styleType={EButtonStyleType.PRIMARY}
                title="Chọn dịch vụ"
                size="large"
              />
              <Button
                iconName={EIconName.Chat}
                iconColor={EIconColor.TAN_HIDE}
                styleType={EButtonStyleType.PRIMARY_TRANSPARENT}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
