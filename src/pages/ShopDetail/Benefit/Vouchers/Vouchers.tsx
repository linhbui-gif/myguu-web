import React from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

import Ticket from '@/components/Ticket';
import ModalTicketDetail from '@/containers/ModalTicketDetail';
import { useModalState } from '@/utils/hooks';
import { TRootState } from '@/redux/reducers';

import { TVouchersProps } from './Vouchers.types';
import './Vouchers.scss';

const Vouchers: React.FC<TVouchersProps> = () => {
  const vouchersByStoreState = useSelector(
    (state: TRootState) => state.voucherReducer.getVouchersByStoreResponse,
  )?.data;

  const [modalTicketDetailState, handleOpenModalTicketDetail, handleCloseModalTicketDetail] = useModalState();

  const isEmpty = vouchersByStoreState?.length === 0;

  return isEmpty ? (
    <></>
  ) : (
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
