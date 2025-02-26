import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconName, EIconColor } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import ShopAddressCard from '@/components/ShopAddressCard';
import { TRootState } from '@/redux/reducers';
import { formatCurrency } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { uiActions } from '@/redux/actions';

import { TServiceDetailCardProps } from './ServiceDetailCard.types';
import './ServiceDetailCard.scss';

const ServiceDetailCard: React.FC<TServiceDetailCardProps> = () => {
  const dispatch = useDispatch();

  const serviceState = useSelector((state: TRootState) => state.serviceReducer.getServiceResponse)?.data;
  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const handleSelectService = (): void => {
    if (serviceState) {
      const isExisted = cartState?.find((service) => service.id === serviceState?.id);
      if (isExisted) {
        const newData = cartState?.map((service) => {
          if (service.id === serviceState?.id) {
            return {
              ...service,
              quantity: (service?.quantity || 0) + 1,
            };
          }

          return service;
        });
        dispatch(uiActions.setCart(newData));
      } else {
        const newData = [...(cartState || []), { ...serviceState, quantity: 1 }];
        dispatch(uiActions.setCart(newData));
      }
    }
  };

  return (
    <div className="ServiceDetailCard">
      <div className="container">
        <div className="ServiceDetailCard-wrapper flex">
          <div className="ServiceDetailCard-image">
            {serviceState?.banner?.[0] && <img src={serviceState?.banner?.[0]} alt="" />}
          </div>
          <div className="ServiceDetailCard-info">
            <h1 className="ServiceDetailCard-info-title">{serviceState?.name}</h1>
            <div className="ServiceDetailCard-info-detail flex items-center">
              <div className="ServiceDetailCard-info-detail-item flex items-center">
                <Icon name={EIconName.Calendar} color={EIconColor.REGENT_GRAY} />
                {serviceState?.order_number || 0} lượt đặt
              </div>
              <div className="ServiceDetailCard-info-detail-item flex items-center">
                <Icon name={EIconName.Heart} color={EIconColor.POMEGRANATE} /> {serviceState?.like_number || 0}
              </div>
              <div className="ServiceDetailCard-info-detail-item flex items-center">
                <Icon name={EIconName.StarFill} /> {serviceState?.vote || 0}
              </div>
            </div>

            {(typeof serviceState?.price === 'number' || typeof serviceState?.discount_price === 'number') && (
              <div className="ServiceDetailCard-info-price flex items-center">
                {formatCurrency({
                  amount:
                    (typeof serviceState?.discount_price === 'number'
                      ? serviceState?.discount_price
                      : serviceState?.price) || 0,
                  showSuffix: true,
                })}

                {typeof serviceState?.price === 'number' && typeof serviceState?.discount_price === 'number' && (
                  <del>{formatCurrency({ amount: serviceState?.price, showSuffix: true })}</del>
                )}
              </div>
            )}

            <ShopAddressCard
              image={serviceState?.store?.avatar}
              title={serviceState?.store?.name}
              address={serviceState?.store?.address}
              distance={serviceState?.store?.distance}
              vote={serviceState?.store?.vote}
              voteNumber={serviceState?.store?.vote_number}
              moveTime={serviceState?.store?.move_time}
              link={Paths.ShopDetail(String(serviceState?.store?.id), String(serviceState?.store?.slug))}
            />

            <div className="ServiceDetailCard-info-btn flex items-center">
              <Button
                className="expand-padding"
                iconName={EIconName.Calendar}
                iconColor={EIconColor.WHITE}
                styleType={EButtonStyleType.PRIMARY}
                title="Chọn dịch vụ"
                size="large"
                onClick={handleSelectService}
              />
              <Button
                iconName={EIconName.Chat}
                iconColor={EIconColor.PRIMARY}
                styleType={EButtonStyleType.PRIMARY_TRANSPARENT}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
