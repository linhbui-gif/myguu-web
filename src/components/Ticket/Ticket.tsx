import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import classNames from 'classnames';

import { formatCurrency, formatISODateToDateTime, showNotification } from '@/utils/functions';
import { EFormat, ETypeNotification } from '@/common/enums';
import { ESaveVoucherAction, saveVoucherAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';

import { TTicketProps } from './Ticket.types.d';
import './Ticket.scss';

const Ticket: React.FC<TTicketProps> = ({
  active,
  banner,
  title,
  endDate,
  data,
  size,
  forceUse,
  disabled,
  onClick,
}) => {
  const dispatch = useDispatch();

  const saveVoucherLoading = useSelector((state: TRootState) => state.loadingReducer[ESaveVoucherAction.SAVE_VOUCHER]);

  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);
  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;

  const handleSaveVoucher = (): void => {
    const body = {
      voucher_id: data?.id,
    };
    dispatch(saveVoucherAction.request({ body }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Lưu voucher thành công !');
  };

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
    <div className={classNames('Ticket flex', size, { active, disabled })} onClick={onClick}>
      <div className="Ticket-image">{banner && <img src={banner} alt="" />}</div>
      <div className="Ticket-info">
        {/* {(image || subtitle) && (
          <div className="Ticket-info-description flex items-center" style={{ columnGap: '0.4rem' }}>
            {image && (
              <div className="Ticket-info-image">
                <img src={image} alt="" />
              </div>
            )}
            <span className="ellipsis-1">{subtitle}</span>
          </div>
        )} */}

        <div className="Ticket-info-title capitalize">{title}</div>
        <div className="Ticket-info-description flex items-center justify-between">
          {endDate && <>HSD: {formatISODateToDateTime(endDate, EFormat['DD-MM-YYYY'])}</>}
          {/* eslint-disable-next-line no-constant-condition */}
          {true ? (
            <div
              className="Ticket-action"
              onClick={(e): void => {
                if (!forceUse && !disabled) {
                  e.preventDefault();
                  e.stopPropagation();
                  handleUseVoucher();
                }
              }}
            >
              Sử Dụng
            </div>
          ) : (
            <div
              className="Ticket-action"
              onClick={(e): void => {
                if (!forceUse && !disabled) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!saveVoucherLoading) handleSaveVoucher();
                }
              }}
            >
              Lưu Voucher
            </div>
          )}
        </div>
        <div className="order-money-min">
          Đơn tối thiểu : {formatCurrency({ amount: data?.order_money_min, showSuffix: true })}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
