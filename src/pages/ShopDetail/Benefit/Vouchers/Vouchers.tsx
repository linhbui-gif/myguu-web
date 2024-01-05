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
            {vouchersByStoreState?.map((item) => (
              <Col key={item.id} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <Ticket
                  image={item?.avatar}
                  subtitle={item?.store?.name}
                  title={item?.name}
                  endDate={item?.end_date}
                  onClick={(): void => handleOpenModalTicketDetail(item)}
                />
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
