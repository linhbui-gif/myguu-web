import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import Tags from '@/components/Tags';
import Ticket from '@/components/Ticket';
import ModalTicketDetail from '@/containers/ModalTicketDetail';
import { useModalState } from '@/utils/hooks';
import { TGetMyVouchersParams } from '@/services/api';
import { DEFAULT_PAGE, dataVoucherTypeOptions } from '@/common/constants';
import { EVoucherType } from '@/common/enums';
import { getMyVouchersAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import './Vouchers.scss';

const Vouchers: React.FC = () => {
  const dispatch = useDispatch();
  const [modalTicketDetailState, handleOpenModalTicketDetail, handleCloseModalTicketDetail] = useModalState();

  const myVouchersState = useSelector((state: TRootState) => state.voucherReducer.getMyVouchersResponse)?.data;

  const [getMyVouchersParamsRequest, setGetMyVouchersParamsRequest] = useState<TGetMyVouchersParams>({
    page: DEFAULT_PAGE,
    limit: 100,
    type: EVoucherType.APP as unknown as string,
  });

  const getMyVouchers = useCallback(() => {
    dispatch(getMyVouchersAction.request({ params: getMyVouchersParamsRequest }));
  }, [dispatch, getMyVouchersParamsRequest]);

  useEffect(() => {
    getMyVouchers();
  }, [getMyVouchers]);

  return (
    <div className="Vouchers">
      <div className="SideBar-card">
        <div className="Vouchers-card-title" style={{ marginBottom: '1.6rem' }}>
          Ví voucher
        </div>
        <div className="Vouchers-status">
          <Tags
            value={dataVoucherTypeOptions.find(
              (option) => String(option.value) === String(getMyVouchersParamsRequest?.type),
            )}
            size="middle"
            options={dataVoucherTypeOptions}
            onChange={(option): void => {
              setGetMyVouchersParamsRequest({
                ...getMyVouchersParamsRequest,
                page: DEFAULT_PAGE,
                type: String(option.value),
              });
            }}
          />
        </div>
      </div>

      <div className="Vouchers-main">
        <Row gutter={[16, 16]}>
          {myVouchersState?.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={index} span={24} lg={{ span: 12 }}>
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

      <ModalTicketDetail {...modalTicketDetailState} onClose={handleCloseModalTicketDetail} />
    </div>
  );
};

export default Vouchers;
