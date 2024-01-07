import React from 'react';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import { TQuantityProps } from './Quantity.types.d';
import './Quantity.scss';

const Quantity: React.FC<TQuantityProps> = ({ value = 0, onChange }) => {
  const handleMinusQuantity = (): void => {
    onChange?.(value - 1);
  };

  const handlePlusQuantity = (): void => {
    onChange?.(value + 1);
  };

  return (
    <div className="Quantity flex items-center">
      {value > 0 && (
        <>
          <Button
            iconColor={EIconColor.WHITE}
            iconName={EIconName.Minus}
            styleType={EButtonStyleType.PRIMARY}
            onClick={handleMinusQuantity}
          />
          <span>{value}</span>
        </>
      )}

      <Button
        iconColor={EIconColor.WHITE}
        iconName={EIconName.Plus}
        styleType={EButtonStyleType.PRIMARY}
        onClick={handlePlusQuantity}
      />
    </div>
  );
};

export default Quantity;
