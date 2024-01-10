import React from 'react';

import Carousels from '@/components/Carousels';

import { TBannerProps } from './Banner.types.d';
import './Banner.scss';

const Banner: React.FC<TBannerProps> = ({ data = [] }) => {
  const isEmpty = data.length === 0;
  return isEmpty ? (
    <></>
  ) : (
    <div className="Banner">
      <div className="container">
        <div className="Banner-wrapper">
          <Carousels
            arrows
            dots={false}
            infinite
            slidesToShow={1}
            autoplay
            responsive={[
              {
                breakpoint: 991,
                settings: {
                  arrows: false,
                  dots: true,
                },
              },
            ]}
          >
            {[...data, ...data].map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="Banner-item">
                <img src={item} alt="" />
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </div>
  );
};

export default Banner;
