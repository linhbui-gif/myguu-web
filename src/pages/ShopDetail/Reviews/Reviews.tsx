import React from 'react';
import { useSelector } from 'react-redux';

import ReviewsList from '@/pages/ShopDetail/Reviews/ReviewsList';
import CollapseCards from '@/containers/CollapseCards';
import { TRootState } from '@/redux/reducers';

import { TReviewsProps } from './Reviews.types';
import './Reviews.scss';

const Reviews: React.FC<TReviewsProps> = ({ dataVoteState }) => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const serviceState = useSelector((state: TRootState) => state.serviceReducer.getServiceResponse)?.data;

  const servicesByStoreState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesByStoreResponse,
  )?.data;

  return (
    <div className="Reviews">
      <div className="container">
        <ReviewsList dataVoteState={dataVoteState} style={{ marginTop: '1.6rem' }} />
      </div>

      {servicesByStoreState?.map((category, categoryIndex) => {
        const isFirstItem = categoryIndex === 0;

        return (
          <CollapseCards
            style={isFirstItem ? { marginTop: '3.2rem' } : undefined}
            herotitle={isFirstItem ? 'Dịch vụ liên quan' : undefined}
            title={category?.name}
            data={category?.services?.map((item) => ({
              serviceData: { ...item, store: serviceState?.store || storeState },
              showQuantity: true,
              title: item.name,
              image: item?.banner?.[0],
              discountPercent: item.discount_percent,
              sellingPrice: item.discount_price,
              retailPrice: item.price,
            }))}
          />
        );
      })}
    </div>
  );
};

export default Reviews;
