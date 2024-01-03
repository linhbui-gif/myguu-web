import React from 'react';

import NotificationCard from '@/components/NotificationCard';

import './Notifications.scss';

const Notifications: React.FC = () => {
  return (
    <div className="Notifications">
      <div className="SideBar-card">
        <div className="Notifications-card-title">Thông báo</div>
      </div>

      <div className="SideBar-card">
        <div className="Notifications-main">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <NotificationCard key={item} unread={item % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
