/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { formatCurrency } from '@/utils/functions';
import Quantity from '@/components/Quantity';
import { TRootState } from '@/redux/reducers';
import { uiActions } from '@/redux/actions';

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
  serviceData,
}) => {
  const dispatch = useDispatch();

  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const handleNavigateLink = (): void => {
    if (link) navigate(link);
  };

  const quantityValue = cartState?.find((service) => service.id === serviceData?.id)?.quantity || 0;

  const handleSelectService = (quantity: number): void => {
    if (serviceData) {
      if (quantity === 0) {
        const newData = cartState?.filter((service) => service.id !== serviceData.id);
        dispatch(uiActions.setCart(newData));
      } else {
        const isExisted = cartState?.find((service) => service.id === serviceData?.id);
        if (isExisted) {
          const newData = cartState?.map((service) => {
            if (service.id === serviceData?.id) {
              return {
                ...service,
                quantity,
              };
            }

            return service;
          });
          dispatch(uiActions.setCart(newData));
        } else {
          const newData = [...(cartState || []), { ...serviceData, quantity }];
          dispatch(uiActions.setCart(newData));
        }
      }
    }
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
          <h5 className="ServiceCard-description ellipsis-1 capitalize" style={{ marginBottom: '0rem' }}>
            {subtitle}
          </h5>
        )}

        <div className="ServiceCard-header flex items-start">
          {verify && (
            <div className="ServiceCard-verify">
              <Icon name={EIconName.Verify} color={EIconColor.PRIMARY} />
            </div>
          )}

          {title && (
            <h4 className="ServiceCard-title cursor-pointer ellipsis-1 capitalize" onClick={handleNavigateLink}>
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

        {showQuantity && <Quantity value={quantityValue} onChange={handleSelectService} />}

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
