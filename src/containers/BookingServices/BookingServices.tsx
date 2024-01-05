import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Carousels from '@/components/Carousels';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';

import { TBookingServicesProps } from './BookingServices.types.d';
import './BookingServices.scss';

const BookingServices: React.FC<TBookingServicesProps> = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const categoriesState = useSelector((state: TRootState) => state.categoryReducer.getCategoriesResponse)?.data || [];

  const dataServices = categoriesState?.map((item) => ({
    link: Paths.Category(String(item.id), item.slug),
    title: item.name,
    icon: item.icon,
  }));

  return (
    <div className="BookingServices">
      <div className="container">
        <div className="BookingServices-wrapper">
          <Carousels dots={false} arrows={false} variableWidth infinite={false} onDragging={setIsDragging}>
            {dataServices.map((item, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="BookingServices-item-wrapper"
                onClick={(): void => {
                  if (!isDragging) navigate(item.link);
                }}
              >
                <div className="BookingServices-item">
                  <div className="BookingServices-item-icon flex items-center justify-center">
                    <div className="BookingServices-item-icon-image">
                      <img src={item.icon} alt="" />
                    </div>
                  </div>
                  <div className="BookingServices-item-title text-center">{item.title}</div>
                </div>
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </div>
  );
};

export default BookingServices;
