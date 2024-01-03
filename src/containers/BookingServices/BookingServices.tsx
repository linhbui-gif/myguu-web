import React from 'react';

import Carousels from '@/components/Carousels';
import IconServiceBeautySalon from '@/assets/icons/icon-service-beauty-salon.svg';
import IconServiceClinic from '@/assets/icons/icon-service-clinic.svg';
import IconServiceGym from '@/assets/icons/icon-service-gym.svg';
import IconServiceMakeup from '@/assets/icons/icon-service-makeup.svg';
import IconServiceNail from '@/assets/icons/icon-service-nail.svg';
import IconServiceSalon from '@/assets/icons/icon-service-salon.svg';
import IconServiceSpa from '@/assets/icons/icon-service-spa.svg';
import IconServiceStudio from '@/assets/icons/icon-service-studio.svg';

import { TBookingServicesProps } from './BookingServices.types.d';
import './BookingServices.scss';

const BookingServices: React.FC<TBookingServicesProps> = () => {
  const dataServices = [
    {
      link: '#',
      title: 'Makeup',
      icon: IconServiceMakeup,
    },
    {
      link: '#',
      title: 'Spa',
      icon: IconServiceSpa,
    },
    {
      link: '#',
      title: 'Salon',
      icon: IconServiceSalon,
    },
    {
      link: '#',
      title: 'Nail-Mi',
      icon: IconServiceNail,
    },
    {
      link: '#',
      title: 'Thẩm Mỹ Viện',
      icon: IconServiceBeautySalon,
    },
    {
      link: '#',
      title: 'Studio',
      icon: IconServiceStudio,
    },
    {
      link: '#',
      title: 'Phòng Khám',
      icon: IconServiceClinic,
    },
    {
      link: '#',
      title: 'GYM',
      icon: IconServiceGym,
    },
  ];

  return (
    <div className="BookingServices">
      <div className="container">
        <div className="BookingServices-wrapper">
          <Carousels dots={false} arrows={false} variableWidth infinite={false}>
            {dataServices.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="BookingServices-item-wrapper">
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
