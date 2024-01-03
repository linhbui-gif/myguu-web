import React from 'react';
import { Col, Row } from 'antd';

import Ticket from '@/components/Ticket';
import ModalTicketDetail from '@/containers/ModalTicketDetail';
import { useModalState } from '@/utils/hooks';

import { TVouchersProps } from './Vouchers.types';
import './Vouchers.scss';

const Vouchers: React.FC<TVouchersProps> = () => {
  const [modalTicketDetailState, handleOpenModalTicketDetail, handleCloseModalTicketDetail] = useModalState();

  return (
    <div className="Vouchers">
      <div className="container">
        <div className="Vouchers-wrapper">
          <Row gutter={[24, 24]}>
            {[1, 2, 3, 4].map((item) => (
              <Col key={item} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Ticket onClick={handleOpenModalTicketDetail} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <ModalTicketDetail {...modalTicketDetailState} onClose={handleCloseModalTicketDetail} />
    </div>
  );
};

export default Vouchers;
