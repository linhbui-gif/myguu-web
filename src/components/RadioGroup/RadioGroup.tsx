import React from 'react';
import classNames from 'classnames';
import { Radio as AntdRadio, RadioChangeEvent, Space } from 'antd';

import { TRadioGroupProps } from './RadioGroup.types';

import './RadioGroup.scss';

const RadioGroup: React.FC<TRadioGroupProps> = ({ className, options = [], onChange, value }) => {
  const handleRadioGroupChange = (e: RadioChangeEvent): void => {
    const { value: currentValue } = e.target;
    const option = options.find((item) => item.value === currentValue);
    if (option) onChange?.(option);
  };

  return (
    <div className={classNames('RadioGroup', className)}>
      <AntdRadio.Group
        onChange={handleRadioGroupChange}
        value={options.find((item) => item.value === value?.value)?.value}
      >
        <Space direction="vertical" size={12}>
          {options.map((item) => (
            <AntdRadio key={item.value} value={item.value}>
              {item.label}
            </AntdRadio>
          ))}
        </Space>
      </AntdRadio.Group>
    </div>
  );
};

export default RadioGroup;
