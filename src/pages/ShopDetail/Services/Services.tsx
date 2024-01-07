import React from 'react';
import { useSelector } from 'react-redux';

import CollapseCards from '@/containers/CollapseCards';
import { TRootState } from '@/redux/reducers';

import { TServicesProps } from './Services.types';
import './Services.scss';

const Services: React.FC<TServicesProps> = () => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const servicesByStoreState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesByStoreResponse,
  )?.data;

  return (
    <div className="Services">
      {servicesByStoreState?.map((category, categoryIndex) => {
        const isFirstItem = categoryIndex === 0;

        return (
          <CollapseCards
            style={isFirstItem ? { marginTop: '3.2rem' } : undefined}
            title={category?.name}
            data={category?.services?.map((item) => ({
              serviceData: { ...item, store: storeState },
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

export default Services;
