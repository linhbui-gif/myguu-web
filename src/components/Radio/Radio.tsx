import React from 'react';
import classNames from 'classnames';
import { Radio as AntdRadio } from 'antd';

import { TRadioProps } from '@/components/Radio/Radio.types';

import './Radio.scss';

const Radio: React.FC<TRadioProps> = ({ className, label, value, onChange }) => {
  return (
    <div className={classNames('Radio', className)}>
      <AntdRadio checked={value} onChange={(): void => onChange?.(!value)}>
        {label}
      </AntdRadio>
    </div>
  );
};

export default Radio;
