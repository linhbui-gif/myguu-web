import React from 'react';

import Button, { EButtonStyleType } from '@/components/Button';
import ImageService from '@/assets/images/image-service-card-4.png';

import { TScheduleCardProps } from './ScheduleCard.types.d';
import './ScheduleCard.scss';
import { EIconColor } from '@/components/Icon';

const ScheduleCard: React.FC<TScheduleCardProps> = () => {
  return (
    <div className="ScheduleCard">
      <div className="ScheduleCard-header flex items-center justify-between">
        <div className="ScheduleCard-header-item">
          <div className="ScheduleCard-header-title">20/02/2023 - 10:00 Sáng</div>
        </div>
        <div className="ScheduleCard-header-item">
          {/* <Button title="Đang chờ nhận" size="small" styleType={EButtonStyleType.TAN_HIDE} shape="rectangle" /> */}
          <div className="ScheduleCard-header-title" style={{ fontSize: '1.3rem', color: EIconColor.MOUNTAIN_MEADOW }}>
            Hoàn Thành
          </div>
          {/* <div className="ScheduleCard-header-title" style={{ fontSize: '1.3rem', color: EIconColor.POMEGRANATE }}>
            Đã Huỷ
          </div> */}
        </div>
      </div>

      <div className="ScheduleCard-body flex items-center">
        <div className="ScheduleCard-image">
          <img src={ImageService} alt="" />
        </div>
        <div className="ScheduleCard-info">
          <div className="ScheduleCard-info-title">Nhi Phúc Store</div>
          <div className="ScheduleCard-info-description">Đặt 1 chỗ</div>
          <div className="ScheduleCard-info-description">Dịch vụ: Trang điểm cá nhân</div>
        </div>
      </div>

      <div className="ScheduleCard-price text-right">
        Tổng cộng: <strong>450,000 đ</strong>
      </div>

      <div className="ScheduleCard-btn flex justify-end">
        <Button title="Chi Tiết" styleType={EButtonStyleType.PRIMARY} />
        <Button title="Đặt Lại" styleType={EButtonStyleType.PRIMARY_OUTLINE} />
        <Button title="Đánh Giá" styleType={EButtonStyleType.PRIMARY} />
      </div>
    </div>
  );
};

export default ScheduleCard;
