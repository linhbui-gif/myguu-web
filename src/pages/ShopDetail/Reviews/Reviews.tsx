import React from 'react';

import ReviewsList from '@/pages/ShopDetail/Reviews/ReviewsList';

import { TReviewsProps } from './Reviews.types';
import './Reviews.scss';

const Reviews: React.FC<TReviewsProps> = () => {
  return (
    <div className="Reviews">
      <div className="container">
        <ReviewsList style={{ marginTop: '1.6rem' }} />
      </div>
    </div>
  );
};

export default Reviews;
