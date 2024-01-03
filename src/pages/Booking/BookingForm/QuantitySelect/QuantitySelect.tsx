import React from 'react';

import Quantity from '@/components/Quantity';

import { TQuantitySelectProps } from './QuantitySelect.types';
import './QuantitySelect.scss';

const QuantitySelect: React.FC<TQuantitySelectProps> = ({ value, onChange }) => {
  return (
    <div className="QuantitySelect flex items-center justify-between">
      Số lượng chỗ
      <Quantity value={value} onChange={onChange} />
    </div>
  );
};

export default QuantitySelect;
