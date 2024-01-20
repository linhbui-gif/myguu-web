import React from 'react';

import Quantity from '@/components/Quantity';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { formatCurrency } from '@/utils/functions';
import { Paths } from '@/pages/routers';
import { TService } from '@/common/models';

import { TServiceSelectProps } from './ServiceSelect.types';
import './ServiceSelect.scss';

const ServiceSelect: React.FC<TServiceSelectProps> = ({ value = [], onChange }) => {
  const cartState = value;
  const isEmpty = cartState?.length === 0;

  const handleSelectService = (quantity: number, serviceData: TService): void => {
    if (serviceData) {
      if (quantity === 0) {
        const newData = cartState?.filter((service) => service.id !== serviceData.id);
        onChange?.(newData);
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
          onChange?.(newData);
        } else {
          const newData = [...(cartState || []), { ...serviceData, quantity }];
          onChange?.(newData);
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
