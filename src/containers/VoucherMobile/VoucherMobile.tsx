import React from 'react';

import Icon, { EIconName } from '@/components/Icon';
import { TVoucherMobileProps } from './VoucherMobile.types';
import './VoucherMobile.scss';

const VoucherMobile: React.FC<TVoucherMobileProps> = () => {
  return (
    <div className="VoucherMobile">
      <div className="container">
        <div className="VoucherMobile-wrapper flex">
          <div className="VoucherMobile-wrapper-item flex">
            <div className="VoucherMobile-wrapper-item-left">
              <p>Ưu đãi</p>
              <h4>Voucher</h4>
            </div>
            <div className="VoucherMobile-wrapper-item-icon">
              <Icon name={EIconName.VoucherMobile} />
            </div>
          </div>
          <div className="VoucherMobile-wrapper-item flex">
            <div className="VoucherMobile-wrapper-item-left">
              <p>Đồng GU</p>
              <h4>0</h4>
            </div>
            <div className="VoucherMobile-wrapper-item-icon">
              <Icon name={EIconName.GuCoinCircle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherMobile;
