import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '@reach/router';

import Quantity from '@/components/Quantity';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { formatCurrency } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { TService } from '@/common/models';
import { uiActions } from '@/redux/actions';

import { TServiceSelectProps } from './ServiceSelect.types';
import './ServiceSelect.scss';

const ServiceSelect: React.FC<TServiceSelectProps> = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const appCartState = useSelector((state: TRootState) => state.uiReducer.cart);
  const [dataServices, setDataServices] = useState<TService[] | undefined>((location?.state as any)?.services);

  const isBookingAgain = dataServices && dataServices.length > 0;
  const cartState = isBookingAgain ? dataServices : appCartState;

  const isEmpty = cartState?.length === 0;

  const handleSelectService = (quantity: number, serviceData: TService): void => {
    if (serviceData) {
      if (quantity === 0) {
        const newData = cartState?.filter((service) => service.id !== serviceData.id);
        if (isBookingAgain) {
          setDataServices(newData);
        } else {
          dispatch(uiActions.setCart(newData));
        }
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
          if (isBookingAgain) {
            setDataServices(newData);
          } else {
            dispatch(uiActions.setCart(newData));
          }
        } else {
          const newData = [...(cartState || []), { ...serviceData, quantity }];
          if (isBookingAgain) {
            setDataServices(newData);
          } else {
            dispatch(uiActions.setCart(newData));
          }
        }
      }
    }
  };

  return (
    <div className="ServiceSelect">
      {!isEmpty && (
        <div className="ServiceSelect-main">
          {cartState?.map((service) => {
            const quantityValue = cartState?.find((cart) => cart.id === service?.id)?.quantity || 0;

            return (
              <div key={service.id} className="ServiceSelect-item flex items-center">
                <div className="ServiceSelect-item-image">
                  {service?.banner?.[0] && <img src={service?.banner?.[0]} alt="" />}
                </div>
                <div className="ServiceSelect-item-info">
                  <div className="ServiceSelect-item-info-title">{service?.name}</div>
                  <div className="ServiceSelect-item-info-description flex items-center justify-between">
                    {formatCurrency({
                      amount: typeof service?.discount_price === 'number' ? service?.discount_price : service?.price,
                      showSuffix: true,
                    })}
                    <Quantity
                      value={quantityValue}
                      onChange={(quantity): void => handleSelectService(quantity, service)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="ServiceSelect-add">
        <Button
          title="Thêm dịch vụ"
          iconName={EIconName.PlusSquare}
          iconColor={EIconColor.TAN_HIDE}
          styleType={EButtonStyleType.PRIMARY_TEXT}
          link={
            cartState?.[0]?.store
              ? Paths.ShopDetail(String(cartState?.[0]?.store?.id), cartState?.[0]?.store?.slug)
              : Paths.Home
          }
        />
      </div>
    </div>
  );
};

export default ServiceSelect;
