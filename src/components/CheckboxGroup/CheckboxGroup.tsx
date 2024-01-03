import React from 'react';
import classNames from 'classnames';
import { Checkbox as AntdCheckbox, Space } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import { TCheckboxGroupProps } from './CheckboxGroup.types';

import './CheckboxGroup.scss';

const CheckboxGroup: React.FC<TCheckboxGroupProps> = ({ className, options = [], onChange, value }) => {
  const handleCheckboxGroupChange = (e: CheckboxValueType[]): void => {
    const changedValues = options.filter((item) => e.includes(item.value));
    onChange?.(changedValues);
  };

  return (
    <div className={classNames('CheckboxGroup', className)}>
      <AntdCheckbox.Group onChange={handleCheckboxGroupChange} value={value?.map((item) => item.value)}>
        <Space direction="vertical" size={12}>
          {options.map((item) => (
            <AntdCheckbox key={item.value} value={item.value}>
              {item.label}
            </AntdCheckbox>
          ))}
        </Space>
      </AntdCheckbox.Group>
    </div>
  );
};

export default CheckboxGroup;
