/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { formatCurrency } from '@/utils/functions';
import Quantity from '@/components/Quantity';

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
  title,
  image,
  moveTime,
  distance,
  vote,
  link,
}) => {
  const handleNavigateLink = (): void => {
    if (link) navigate(link);
  };

  return (
    <div className={classNames('ServiceCard', { vertical, border, quantity: showQuantity })}>
      <div className="ServiceCard-image cursor-pointer" onClick={handleNavigateLink}>
        {discountPercent && (
          <div className="ServiceCard-image-badge flex items-center justify-center">-{discountPercent}%</div>
        )}

        {image && <img src={image} alt="" />}
      </div>

      <div className="ServiceCard-info">
        {subtitle && (
          <h5 className="ServiceCard-description ellipsis-1" style={{ marginBottom: '0rem' }}>
            {subtitle}
          </h5>
        )}

        <div className="ServiceCard-header flex items-start">
          {verify && (
            <div className="ServiceCard-verify">
              <Icon name={EIconName.Verify} />
            </div>
          )}

          {title && (
            <h4 className="ServiceCard-title cursor-pointer ellipsis-1" onClick={handleNavigateLink}>
              {title}
            </h4>
          )}
        </div>

        {address && <p className="ServiceCard-description ellipsis-1 capitalize">{address}</p>}

        {(typeof retailPrice === 'number' || typeof sellingPrice === 'number') && (
          <div className="ServiceCard-price flex items-center flex-wrap">
            {formatCurrency({
              amount: (typeof sellingPrice === 'number' ? sellingPrice : retailPrice) || 0,
              showSuffix: true,
            })}

            {typeof retailPrice === 'number' && typeof sellingPrice === 'number' && (
              <del>{formatCurrency({ amount: retailPrice, showSuffix: true })}</del>
            )}
          </div>
        )}

        {showQuantity && <Quantity />}

        {!showQuantity && (
          <div className="ServiceCard-footer flex items-center flex-wrap" style={{ columnGap: '.8rem' }}>
            {!!moveTime && <p className="ServiceCard-description">{moveTime} phút</p>}
            {!!distance && (
              <p className="ServiceCard-description flex items-center">
                <Icon name={EIconName.Location} color={EIconColor.DOVE_GRAY} />
                {distance} km
              </p>
            )}
            {!!vote && (
              <p className="ServiceCard-description flex items-center">
                <Icon name={EIconName.StarFill} />
                {vote}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
