import React from 'react';

import CollapseCards from '@/containers/CollapseCards';
import ReviewsList from '@/pages/ShopDetail/Reviews/ReviewsList';

import { TReviewsProps } from './Reviews.types';
import './Reviews.scss';

const Reviews: React.FC<TReviewsProps> = () => {
  return (
    <div className="Reviews">
      <div className="container">
        <ReviewsList style={{ marginTop: '1.6rem' }} />
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

export default Reviews;
