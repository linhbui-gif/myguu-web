import React from 'react';
import { Col, Row } from 'antd';

import Tags from '@/components/Tags';
import Ticket from '@/components/Ticket';
import ModalTicketDetail from '@/containers/ModalTicketDetail';

import './Vouchers.scss';
import { useModalState } from '@/utils/hooks';

const Vouchers: React.FC = () => {
  const [modalTicketDetailState, handleOpenModalTicketDetail, handleCloseModalTicketDetail] = useModalState();

  return (
    <div className="Vouchers">
      <div className="SideBar-card">
        <div className="Vouchers-card-title" style={{ marginBottom: '1.6rem' }}>
          Ví voucher
        </div>
        <div className="Vouchers-status">
          <Tags
            value={{ value: '1', label: 'Cửa Hàng' }}
            size="middle"
            options={[
              { value: '1', label: 'Voucher Sàn' },
              { value: '2', label: 'Voucher Shop' },
              { value: '3', label: 'Voucher Đổi Thưởng' },
            ]}
          />
        </div>
      </div>

      <div className="Vouchers-main">
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col key={item} span={24} lg={{ span: 12 }}>
              <Ticket onClick={handleOpenModalTicketDetail} />
            </Col>
          ))}
        </Row>
      </div>

      <ModalTicketDetail {...modalTicketDetailState} onClose={handleCloseModalTicketDetail} />
    </div>
  );
};

export default Vouchers;
