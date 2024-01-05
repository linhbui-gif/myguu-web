import React from 'react';

import { formatISODateToDateTime } from '@/utils/functions';
import { EFormat } from '@/common/enums';

import { TTicketProps } from './Ticket.types.d';
import './Ticket.scss';

const Ticket: React.FC<TTicketProps> = ({ image, subtitle, title, endDate, onClick }) => {
  return (
    <div className="Ticket flex" onClick={onClick}>
      <div className="Ticket-image">{image && <img src={image} alt="" />}</div>
      <div className="Ticket-info">
        <div className="Ticket-info-description">{subtitle}</div>
        <div className="Ticket-info-title">{title}</div>
        <div className="Ticket-info-description flex items-center justify-between">
          {endDate && <>HSD: {formatISODateToDateTime(endDate, EFormat['DD-MM-YYYY'])}</>}
          <div className="Ticket-action">Sử dụng</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
