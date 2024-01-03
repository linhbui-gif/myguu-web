import React from 'react';

import ImageSuccess from '@/assets/images/image-success.svg';

import { TSuccessProps } from './Success.types';
import './Success.scss';

const Success: React.FC<TSuccessProps> = () => {
  return (
    <div className="Success" style={{ padding: '6.4rem 0' }}>
      <div className="ModalAuth-icon">
        <img src={ImageSuccess} alt="" />
      </div>
      <div className="ModalAuth-title text-center" style={{ margin: 0 }}>
        Cập nhật thành công!
      </div>
    </div>
  );
};

export default Success;
