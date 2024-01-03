import React, { useState } from 'react';
import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import { TQuantityProps } from './Quantity.types.d';
import './Quantity.scss';

const Quantity: React.FC<TQuantityProps> = ({ value, onChange }) => {
  const [quantity, setQuantity] = useState<number>(value || 1);

  const handleMinusQuantity = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onChange?.(quantity - 1);
    }
  };

  const handlePlusQuantity = (): void => {
    setQuantity(quantity + 1);
    onChange?.(quantity + 1);
  };

  return (
    <div className="Quantity flex items-center">
      <Button
        iconColor={EIconColor.WHITE}
        iconName={EIconName.Minus}
        styleType={EButtonStyleType.PRIMARY}
        onClick={handleMinusQuantity}
      />
      <span>{quantity}</span>
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
