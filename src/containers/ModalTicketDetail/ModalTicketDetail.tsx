import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@/utils/router';

import Modal from '@/components/Modal';
import Button, { EButtonStyleType } from '@/components/Button';
import Avatar from '@/components/Avatar';
import { EFormat, ETypeNotification } from '@/common/enums';
import { formatISODateToDateTime, showNotification } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';

import { TModalTicketDetailProps } from './ModalTicketDetail.types.d';
import './ModalTicketDetail.scss';

const ModalTicketDetail: React.FC<TModalTicketDetailProps> = ({ visible, data, onClose }) => {
  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);
  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;

  const handleUseVoucher = (): void => {
    if (myProfileState) {
      if (cartState?.length === 0) {
        showNotification(ETypeNotification.ERROR, 'Vui lòng chọn 1 dịch vụ để sử dụng voucher !');
      } else {
        navigate(Paths.Booking(String(cartState?.[0]?.store?.id)), { state: { voucher: data } });
      }
    } else {
      showNotification(ETypeNotification.ERROR, 'Vui lòng đăng nhập để tiếp tục sử dụng voucher !');
    }
  };
  return (
    <Modal visible={visible} closeable={false} width={472} className="ModalTicketDetail" onClose={onClose}>
      <div className="ModalTicketDetail-wrapper">
        <div className="ModalTicketDetail-image">{data?.banner && <img src={data?.banner} alt="" />}</div>

        <div className="ModalTicketDetail-ticket">
          <div className="ModalTicketDetail-ticket-btn flex justify-center">
            <Button title="Lấy Mã" styleType={EButtonStyleType.PRIMARY} size="small" />
          </div>
          <div className="ModalTicketDetail-ticket-title">{data?.name}</div>
          {data?.end_date && (
            <div className="ModalTicketDetail-ticket-description">
              HSD: {formatISODateToDateTime(data?.end_date, EFormat['DD-MM-YYYY'])}
            </div>
          )}

          <div className="ModalTicketDetail-ticket-shop flex items-center">
            <Avatar image={data?.avatar} />
            {data?.store?.name}
          </div>
        </div>

        {/* eslint-disable-next-line react/no-danger */}
        <div className="ModalTicketDetail-content" dangerouslySetInnerHTML={{ __html: data?.description || '' }} />

        <div className="ModalTicketDetail-btn flex justify-center">
          <Button title="Sử dụng" styleType={EButtonStyleType.PRIMARY} onClick={handleUseVoucher} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalTicketDetail;
