import React from 'react';

import CollapseCards from '@/containers/CollapseCards';
import Vouchers from '@/pages/ShopDetail/Benefit/Vouchers';

import { TBenefitProps } from './Benefit.types';
import './Benefit.scss';

const Benefit: React.FC<TBenefitProps> = () => {
  return (
    <div className="Benefit">
      <Vouchers />

      <CollapseCards
        style={{ marginTop: '3.2rem' }}
        herotitle="Dịch vụ liên quan"
        title="Trang điểm"
        data={[
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <CollapseCards
        style={{ marginBottom: '2.4rem' }}
        title="Gội đầu"
        data={[
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
    </div>
  );
};

export default Benefit;
