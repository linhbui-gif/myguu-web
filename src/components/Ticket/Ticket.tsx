import React from 'react';

import ImageTicket from '@/assets/images/image-service-card-4.png';

import { TTicketProps } from './Ticket.types.d';
import './Ticket.scss';

const Ticket: React.FC<TTicketProps> = ({ onClick }) => {
  return (
    <div className="Ticket flex" onClick={onClick}>
      <div className="Ticket-image">
        <img src={ImageTicket} alt="" />
      </div>
      <div className="Ticket-info">
        <div className="Ticket-info-description">Nhi Phúc Store</div>
        <div className="Ticket-info-title">Giảm 50% trang điểm cô dâu</div>
        <div className="Ticket-info-description flex items-center justify-between">
          HSD:24-4-2023
          <div className="Ticket-action">Sử dụng</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
