import React from 'react';

import ImageService from '@/assets/images/image-service-card-2.png';
import Quantity from '@/components/Quantity';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import { TServiceSelectProps } from './ServiceSelect.types';
import './ServiceSelect.scss';

const ServiceSelect: React.FC<TServiceSelectProps> = () => {
  return (
    <div className="ServiceSelect">
      <div className="ServiceSelect-main">
        <div className="ServiceSelect-item flex items-center">
          <div className="ServiceSelect-item-image">
            <img src={ImageService} alt="" />
          </div>
          <div className="ServiceSelect-item-info">
            <div className="ServiceSelect-item-info-title">Trang điểm cô dâu</div>
            <div className="ServiceSelect-item-info-description flex items-center justify-between">
              150.000 đ
              <Quantity />
            </div>
          </div>
        </div>
      </div>

      <div className="ServiceSelect-add">
        <Button
          title="Thêm dịch vụ"
          iconName={EIconName.PlusSquare}
          iconColor={EIconColor.TAN_HIDE}
          styleType={EButtonStyleType.PRIMARY_TEXT}
        />
      </div>
    </div>
  );
};

export default ServiceSelect;
