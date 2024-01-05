import React, { useState } from 'react';
import classNames from 'classnames';

import Icon from '@/components/Icon';
import Carousels from '@/components/Carousels';

import { TTagsProps } from './Tags.types.d';
import './Tags.scss';

const Tags: React.FC<TTagsProps> = ({ value, onChange, shape, carousel, size, options = [] }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const renderTagItems = options.map((item) => (
    <div key={item.value}>
      <div
        className={classNames('Tags-item flex items-center justify-center', size, shape, {
          active: value?.value === item?.value,
          reverse: item?.data?.reverse,
        })}
        onClick={(): void => {
          if (!isDragging) onChange?.(item);
        }}
      >
        {item?.data?.iconName && (
          <div className="Tags-item-icon">
            <Icon name={item.data.iconName} color={item?.data?.iconColor} />
          </div>
        )}
        {item?.label}
      </div>
    </div>
  ));

  return carousel ? (
    <div className="Tags">
      <Carousels infinite={false} variableWidth dots={false} arrows={false} onDragging={setIsDragging}>
        {renderTagItems}
      </Carousels>
    </div>
  ) : (
    <div className="Tags flex flex-wrap">{renderTagItems}</div>
  );
};

export default Tags;
