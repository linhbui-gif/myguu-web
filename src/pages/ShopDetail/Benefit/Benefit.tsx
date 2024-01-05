import React from 'react';
import { useSelector } from 'react-redux';

import CollapseCards from '@/containers/CollapseCards';
import Vouchers from '@/pages/ShopDetail/Benefit/Vouchers';
import { TRootState } from '@/redux/reducers';

import { TBenefitProps } from './Benefit.types';
import './Benefit.scss';

const Benefit: React.FC<TBenefitProps> = () => {
  const servicesByStoreState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesByStoreResponse,
  )?.data;

  return (
    <div className="Benefit">
      <Vouchers />

      {servicesByStoreState?.map((category, categoryIndex) => {
        const isFirstItem = categoryIndex === 0;

        return (
          <CollapseCards
            style={isFirstItem ? { marginTop: '3.2rem' } : undefined}
            herotitle={isFirstItem ? 'Dịch vụ liên quan' : undefined}
            title={category?.name}
            data={category?.services?.map((item) => ({
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

export default Benefit;
