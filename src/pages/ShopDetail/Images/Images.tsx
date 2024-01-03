import React from 'react';

import CollapseCards from '@/containers/CollapseCards';
import Gallery from '@/pages/ShopDetail/Infomation/Gallery';

import { TImagesProps } from './Images.types';
import './Images.scss';

const Images: React.FC<TImagesProps> = () => {
  return (
    <div className="Images">
      <div className="container">
        <Gallery style={{ marginTop: '1.6rem' }} />
      </div>

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

export default Images;
