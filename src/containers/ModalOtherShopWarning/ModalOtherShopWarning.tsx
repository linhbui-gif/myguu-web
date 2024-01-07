/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import { TRootState } from '@/redux/reducers';
import { uiActions } from '@/redux/actions';
import { TService } from '@/common/models';

import { TModalOtherShopWarningProps } from './ModalOtherShopWarning.types';
import './ModalOtherShopWarning.scss';

const ModalOtherShopWarning: React.FC<TModalOtherShopWarningProps> = () => {
  const dispatch = useDispatch();
  const [checkService, setCheckService] = useState<TService>();

  const visible = useSelector((state: TRootState) => state.uiReducer.visibleOtherShopWarning);
  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const handleSubmit = (): void => {
    handleClose();
    if (checkService) {
      dispatch(uiActions.setCart([checkService]));
    }
  };

  const handleClose = (): void => {
    dispatch(uiActions.setVisibleOtherShopWarning(false));
    if (checkService) {
      const newData = cartState?.filter((service) => service.id !== checkService.id);
      dispatch(uiActions.setCart(newData));
    }
  };

  useEffect(() => {
    if (cartState && cartState.length > 1) {
      const firstItem = cartState?.[0];
      const lastItem = cartState?.[cartState.length - 1];
      if (firstItem && lastItem) {
        const isOtherShop = lastItem?.store?.id !== firstItem?.store?.id;

        if (isOtherShop) {
          dispatch(uiActions.setVisibleOtherShopWarning(true));
          setCheckService(lastItem);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartState]);

  return (
    <Modal visible={!!visible} className="ModalOtherShopWarning" onClose={handleClose} hideFooter closeable={false}>
      <div className="ModalOtherShopWarning-wrapper">
        <div className="ModalOtherShopWarning-icon">
          <Icon name={EIconName.House} color={EIconColor.TAN_HIDE} />
        </div>
        <div className="ModalOtherShopWarning-title">Cảnh Báo</div>
        <div className="ModalOtherShopWarning-description">
          Bạn đang chọn 1 dịch vụ khác cửa hàng đã chọn trước đó.
          <br />
          Bạn có chắc chắn muốn chọn dịch vụ này không? Các lịch bạn đã chọn trước đó sẽ bị loại bỏ.
        </div>
        <div className="ModalOtherShopWarning-btn flex justify-center">
          <Button title="Tiếp Tục" size="large" styleType={EButtonStyleType.PRIMARY} onClick={handleSubmit} />
          <Button title="Huỷ Bỏ" size="large" styleType={EButtonStyleType.PRIMARY_OUTLINE} onClick={handleClose} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalOtherShopWarning;
