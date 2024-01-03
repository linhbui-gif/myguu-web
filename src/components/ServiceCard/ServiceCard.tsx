/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import ImageServiceCard1 from '@/assets/images/image-service-card-1.png';
import ImageServiceCard2 from '@/assets/images/image-service-card-2.png';
import ImageServiceCard3 from '@/assets/images/image-service-card-3.png';
import ImageServiceCard4 from '@/assets/images/image-service-card-4.png';
import ImageServiceCard5 from '@/assets/images/image-service-card-5.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { formatCurrency } from '@/utils/functions';
import Quantity from '@/components/Quantity';
import { Paths } from '@/pages/routers';

import { TServiceCardProps } from './ServiceCard.types.d';
import './ServiceCard.scss';

const ServiceCard: React.FC<TServiceCardProps> = ({
  verify,
  address,
  discountPercent,
  border,
  sellingPrice,
  retailPrice,
  subtitle,
  vertical,
  showQuantity,
}) => {
  const images = [ImageServiceCard1, ImageServiceCard2, ImageServiceCard3, ImageServiceCard4, ImageServiceCard5];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={classNames('ServiceCard', { vertical, border, quantity: showQuantity })}>
      <div className="ServiceCard-image cursor-pointer">
        {discountPercent && (
          <div className="ServiceCard-image-badge flex items-center justify-center">-{discountPercent}%</div>
        )}

        <img src={randomImage} alt="" />
      </div>

      <div className="ServiceCard-info">
        {subtitle && (
          <h5
            className="ServiceCard-description ellipsis-1 cursor-pointer"
            style={{ marginBottom: '0rem' }}
            onClick={(): void => {
              navigate(Paths.ServiceDetail('1'));
            }}
          >
            {subtitle}
          </h5>
        )}

        <div className="ServiceCard-header flex items-start">
          {verify && (
            <div className="ServiceCard-verify">
              <Icon name={EIconName.Verify} />
            </div>
          )}

          <h4
            className="ServiceCard-title cursor-pointer ellipsis-1"
            onClick={(): void => {
              navigate(Paths.ShopDetail('1'));
            }}
          >
            Quỳnh Nguyễn Store
          </h4>
        </div>

        {address && <p className="ServiceCard-description ellipsis-1">157 B Chùa Láng, Q.Đống Đa, Hà Nội</p>}

        {sellingPrice && (
          <div className="ServiceCard-price flex items-center flex-wrap">
            {formatCurrency({ amount: sellingPrice, showSuffix: true })}
            {retailPrice && <del>{formatCurrency({ amount: retailPrice, showSuffix: true })}</del>}
          </div>
        )}

        {showQuantity && <Quantity />}

        {!showQuantity && (
          <div className="ServiceCard-footer flex items-center flex-wrap" style={{ columnGap: '.8rem' }}>
            <p className="ServiceCard-description">20 phút</p>
            <p className="ServiceCard-description flex items-center">
              <Icon name={EIconName.Location} color={EIconColor.DOVE_GRAY} />
              2.0 km
            </p>
            <p className="ServiceCard-description flex items-center">
              <Icon name={EIconName.StarFill} />
              4.5
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
