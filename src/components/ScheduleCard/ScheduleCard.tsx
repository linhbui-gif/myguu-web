import React from 'react';

import Button, { EButtonStyleType } from '@/components/Button';
import { formatCurrency, formatISODateToDateTime } from '@/utils/functions';
import { EEmpty, EFormat, EOrderProcess } from '@/common/enums';
import { dataOrderProcessOptions } from '@/common/constants';
import Switch from '@/components/Switch';

import { TScheduleCardProps } from './ScheduleCard.types.d';
import './ScheduleCard.scss';

const ScheduleCard: React.FC<TScheduleCardProps> = ({
  dateTime,
  status,
  services,
  total,
  numberOfBookings,
  remind,
  onClickDetail,
  onClickReview,
  onClickReOrder,
}) => {
  const currentProcess = dataOrderProcessOptions.find((option) => option.value === status);
  return (
    <div className="ScheduleCard">
      <div className="ScheduleCard-header flex items-center justify-between">
        <div className="ScheduleCard-header-item">
          <div className="ScheduleCard-header-title">
            {dateTime ? formatISODateToDateTime(dateTime, EFormat['DD/MM/YYYY - HH:mm A']) : EEmpty.DASH}
          </div>
        </div>
        <div className="ScheduleCard-header-item">
          {currentProcess?.value === EOrderProcess.CONFIRMED ? (
            <div className="ScheduleCard-remind flex items-center">
              Nhắc tôi
              <Switch value={remind} />
            </div>
          ) : (
            <div
              className="ScheduleCard-header-title"
              style={{ fontSize: '1.3rem', color: currentProcess?.data?.color }}
            >
              {currentProcess?.label}
            </div>
          )}
        </div>
      </div>

      {services?.map((orderSerivce) => (
        <div key={orderSerivce.id} className="ScheduleCard-body flex items-center">
          <div className="ScheduleCard-image">
            {orderSerivce?.service?.banner?.[0] && <img src={orderSerivce?.service?.banner?.[0]} alt="" />}
          </div>
          <div className="ScheduleCard-info">
            <div className="ScheduleCard-info-title capitalize">{orderSerivce?.service?.store?.name}</div>
            <div className="ScheduleCard-info-description">Đặt {numberOfBookings || 0} chỗ</div>
            <div className="ScheduleCard-info-description">Dịch vụ: {orderSerivce?.service?.name}</div>
          </div>
        </div>
      ))}

      <div className="ScheduleCard-price text-right">
        Tổng cộng: <strong>{formatCurrency({ amount: total || 0, showSuffix: true })}</strong>
      </div>

      <div className="ScheduleCard-btn flex justify-end">
        {[EOrderProcess.CONFIRMED].includes(currentProcess?.value as EOrderProcess) && (
          <Button title="Chi Tiết" styleType={EButtonStyleType.PRIMARY} onClick={onClickDetail} />
        )}
        {[EOrderProcess.COMPLETE, EOrderProcess.CANCEL].includes(currentProcess?.value as EOrderProcess) && (
          <Button title="Đặt Lại" styleType={EButtonStyleType.PRIMARY_OUTLINE} onClick={onClickReOrder} />
        )}
        {[EOrderProcess.COMPLETE].includes(currentProcess?.value as EOrderProcess) && (
          <Button title="Đánh Giá" styleType={EButtonStyleType.PRIMARY} onClick={onClickReview} />
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
