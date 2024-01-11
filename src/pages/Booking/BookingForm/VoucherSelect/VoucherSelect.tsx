import React from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { useModalState } from '@/utils/hooks';
import ModalVoucherSelect from '@/containers/ModalVoucherSelect';

import { TVoucherSelectProps } from './VoucherSelect.types';
import './VoucherSelect.scss';

const VoucherSelect: React.FC<TVoucherSelectProps> = ({ value, totalOrder, disabled, onChange }) => {
  const [modalSelectVoucherState, handleOpenModalSelectVoucher, handleCloseModalSelectVoucher] = useModalState();
  const isDisabled = typeof disabled === 'boolean' && disabled;

  return (
    <>
      <div
        className={classNames('VoucherSelect flex items-center justify-between cursor-pointer', {
          disabled: isDisabled,
        })}
        onClick={(): void => handleOpenModalSelectVoucher(value)}
      >
        <div className="VoucherSelect-item flex items-center">
          <Icon name={EIconName.Voucher} color={EIconColor.TAN_HIDE} />
          <span>{value ? value?.name : `Chọn Voucher`}</span>
          {isDisabled && '(không đủ điều kiện)'}
        </div>
        <div className="VoucherSelect-item">
          <Icon name={EIconName.AngleRight} color={EIconColor.REGENT_GRAY} />
        </div>
      </div>

      <ModalVoucherSelect
        {...modalSelectVoucherState}
        totalOrder={totalOrder}
        onClose={handleCloseModalSelectVoucher}
        onSubmit={onChange}
      />
    </>
  );
};

export default VoucherSelect;
