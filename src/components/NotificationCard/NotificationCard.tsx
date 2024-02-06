import React from 'react';
import classNames from 'classnames';

import ImageNotification from '@/assets/images/image-content-2.png';

import { TNotificationCardProps } from './NotificationCard.types.d';
import './NotificationCard.scss';

const NotificationCard: React.FC<TNotificationCardProps> = ({ unread, title, description, date }) => {
  return (
    <div className={classNames('NotificationCard flex items-start', { unread })}>
      <div className="NotificationCard-image">
        <img src={ImageNotification} alt="" />
      </div>
      <div className="NotificationCard-info">
        <div className="NotificationCard-info-title">{title}</div>
        <div className="NotificationCard-info-subtitle">{description}</div>
        <div className="NotificationCard-info-description">{date}</div>
      </div>
    </div>
  );
};

export default NotificationCard;
