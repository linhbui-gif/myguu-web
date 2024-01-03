import React from 'react';

import Carousels from '@/components/Carousels';
import ImageBanner from '@/assets/images/image-banner.png';

import { TBannerProps } from './Banner.types.d';
import './Banner.scss';

const Banner: React.FC<TBannerProps> = () => {
  return (
    <div className="Banner">
      <div className="container">
        <div className="Banner-wrapper">
          <Carousels arrows dots={false} infinite slidesToShow={1} autoplay>
            {[1, 2, 3].map((item) => (
              <div key={item} className="Banner-item">
                <img src={ImageBanner} alt="" />
              </div>
            ))}
          </Carousels>
        </div>
      </div>
    </div>
  );
};

export default Banner;
