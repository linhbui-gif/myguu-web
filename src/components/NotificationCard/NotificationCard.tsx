import React from 'react';
import classNames from 'classnames';

import ImageNotification from '@/assets/images/image-content-2.png';

import { TNotificationCardProps } from './NotificationCard.types.d';
import './NotificationCard.scss';

const NotificationCard: React.FC<TNotificationCardProps> = ({ unread }) => {
  return (
    <div className={classNames('NotificationCard flex items-start', { unread })}>
      <div className="NotificationCard-image">
        <img src={ImageNotification} alt="" />
      </div>
      <div className="NotificationCard-info">
        <div className="NotificationCard-info-title">Lịch của bạn đã được đặt</div>
        <div className="NotificationCard-info-subtitle">Sen Spa Hà Nội đã nhận lịch đặt của bạn</div>
        <div className="NotificationCard-info-description">07:00 28-06-2023</div>
      </div>
    </div>
  );
};

export default NotificationCard;
