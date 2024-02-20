import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { navigate } from '@/utils/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TBreadcrumbProps } from './Breadcrumb.types.d';
import './Breadcrumb.scss';

const Breadcrumb: React.FC<TBreadcrumbProps> = ({ className, options = [] }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 });
  return isTablet ? (
    <></>
  ) : (
    <div className={classNames('Breadcrumb', className)}>
      <div className="container">
        <div className="Breadcrumb-wrapper">
          <AntdBreadcrumb separator={<Icon name={EIconName.AngleRight} color={EIconColor.REGENT_GRAY} />}>
            {options.map((option) => (
              <AntdBreadcrumb.Item
                className={classNames({ 'cursor-pointer': option.link })}
                key={option.key}
                onClick={(): void => {
                  if (option?.link) {
                    navigate(option.link);
                  } else {
                    option?.onClick?.();
                  }
                }}
              >
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
