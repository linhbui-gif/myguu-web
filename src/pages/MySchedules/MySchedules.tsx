import React from 'react';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';

import Tags from '@/components/Tags';
import CalendarSelect from '@/pages/Booking/BookingForm/CalendarSelect';
import ScheduleCard from '@/components/ScheduleCard';

import './MySchedules.scss';

const MySchedules: React.FC = () => {
  const isMiniTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="MySchedules">
      <div className="SideBar-card">
        <div className="MySchedules-card-title" style={{ marginBottom: '1.6rem' }}>
          Lịch hẹn của tôi
        </div>
        <div className="MySchedules-status">
          <Tags
            value={{ value: '3', label: 'Đã Hoàn Thành' }}
            size="middle"
            options={[
              { value: '1', label: 'Lịch Hẹn' },
              { value: '2', label: 'Sắp Tới' },
              { value: '3', label: 'Đã Hoàn Thành' },
              { value: '4', label: 'Đã Hủy' },
            ]}
          />
        </div>
      </div>

      <div className="MySchedules-date">
        <CalendarSelect rangeDays={isMiniTablet ? 4 : 7} size="small" showDot />
      </div>

      <div className="MySchedules-schedules">
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col key={item} span={24} lg={{ span: 12 }}>
              <ScheduleCard />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MySchedules;
