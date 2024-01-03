import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import classNames from 'classnames';

import { TBreadcrumbProps } from './Breadcrumb.types.d';
import './Breadcrumb.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const Breadcrumb: React.FC<TBreadcrumbProps> = ({ className, options = [] }) => {
  return (
    <div className={classNames('Breadcrumb', className)}>
      <div className="container">
        <div className="Breadcrumb-wrapper">
          <AntdBreadcrumb separator={<Icon name={EIconName.AngleRight} color={EIconColor.REGENT_GRAY} />}>
            {options.map((option) => (
              <AntdBreadcrumb.Item key={option.key} onClick={option.onClick}>
                {option.title}
              </AntdBreadcrumb.Item>
            ))}
          </AntdBreadcrumb>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
