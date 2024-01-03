import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TVoucherSelectProps } from './VoucherSelect.types';
import './VoucherSelect.scss';

const VoucherSelect: React.FC<TVoucherSelectProps> = () => {
  return (
    <div className="VoucherSelect flex items-center justify-between">
      <div className="VoucherSelect-item flex items-center">
        <Icon name={EIconName.Voucher} color={EIconColor.TAN_HIDE} />
        Chọn Voucher
      </div>
      <div className="VoucherSelect-item">
        <Icon name={EIconName.AngleRight} color={EIconColor.REGENT_GRAY} />
      </div>
    </div>
  );
};

export default VoucherSelect;
