import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Modal from '@/components/Modal';
import Ticket from '@/components/Ticket';
import Button, { EButtonStyleType } from '@/components/Button';
import { getMyVouchersAction, getVouchersByStoreAction } from '@/redux/actions';
import { DEFAULT_PAGE } from '@/common/constants';
import { EVoucherType } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { TVoucher } from '@/common/models';

import { TModalVoucherSelectProps } from './ModalVoucherSelect.types.d';
import './ModalVoucherSelect.scss';
import { EIconColor } from '@/components/Icon';

const ModalVoucherSelect: React.FC<TModalVoucherSelectProps> = ({
  visible,
  totalOrder = 0,
  data,
  onClose,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const { storeId } = useParams();

  const [voucherSelected, setVoucherSelected] = useState<TVoucher>();

  const vouchersByStoreState = useSelector(
    (state: TRootState) => state.voucherReducer.getVouchersByStoreResponse,
  )?.data;
  const isEmptyVouchersByStore = vouchersByStoreState?.length === 0;

  const myVouchersState = useSelector((state: TRootState) => state.voucherReducer.getMyVouchersResponse)?.data;
  const isEmptyMyVouchers = myVouchersState?.length === 0;

  const renderTicket = (item: TVoucher): React.ReactNode => {
    const isValidVoucher =
      (item?.store ? Number(item?.store?.id) === Number(storeId) : true) &&
      (typeof item?.order_money_min === 'number' ? totalOrder >= item?.order_money_min : true) &&
      item?.used < item?.used_limit;

    return (
      <div key={item.id} className="ModalVoucherSelect-list-item">
        <Ticket
          forceUse
          active={item.id === voucherSelected?.id}
          size="small"
          data={item}
          banner={item?.banner}
          image={item?.avatar}
          subtitle={item?.store?.name}
          title={item?.name}
          endDate={item?.end_date}
          disabled={!isValidVoucher}
          onClick={(): void => setVoucherSelected(item)}
        />

        {!isValidVoucher && (
          <div className="ModalVoucherSelect-description" style={{ color: EIconColor.POMEGRANATE }}>
            Không đủ điều kiện để sử dụng Voucher.
          </div>
        )}
      </div>
    );
  };

  const getVouchersByStore = useCallback(() => {
    if (storeId) {
      dispatch(
        getVouchersByStoreAction.request({ paths: { id: storeId }, params: { page: DEFAULT_PAGE, limit: 100 } }),
      );
    }
  }, [dispatch, storeId]);

  const getMyVouchers = useCallback(() => {
    dispatch(
      getMyVouchersAction.request({
        params: { page: DEFAULT_PAGE, limit: 100, type: EVoucherType.APP as unknown as string },
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    getMyVouchers();
  }, [getMyVouchers]);

  useEffect(() => {
    getVouchersByStore();
  }, [getVouchersByStore]);

  useEffect(() => {
    if (visible && data) {
      setVoucherSelected(data);
    }
  }, [visible, data]);

  return (
    <Modal visible={visible} className="ModalVoucherSelect" onClose={onClose} width={400}>
      <div className="ModalVoucherSelect-wrapper">
        <div className="ModalVoucherSelect-title">Chọn Voucher</div>

        <div className="ModalVoucherSelect-body flex flex-col">
          {!isEmptyMyVouchers && (
            <>
              <div className="ModalVoucherSelect-subtitle">Voucher MyGuu</div>
              <div className="ModalVoucherSelect-list">{myVouchersState?.map((item) => renderTicket(item))}</div>
            </>
          )}

          {!isEmptyVouchersByStore && (
            <>
              <div className="ModalVoucherSelect-subtitle">Voucher Cửa Hàng</div>
              <div className="ModalVoucherSelect-list">{vouchersByStoreState?.map((item) => renderTicket(item))}</div>
            </>
          )}

          <div className="ModalVoucherSelect-btn flex justify-center">
            <Button
              title="Chọn"
              size="large"
              styleType={EButtonStyleType.PRIMARY}
              onClick={(): void => {
                if (voucherSelected) {
                  onSubmit?.(voucherSelected);
                  onClose?.();
                }
              }}
              disabled={!voucherSelected}
            />
            <Button title="Huỷ Bỏ" size="large" styleType={EButtonStyleType.PRIMARY_OUTLINE} onClick={onClose} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalVoucherSelect;
