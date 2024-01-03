import React, { useEffect, useState } from 'react';
import { Avatar as AntdAvatar } from 'antd';
import classNames from 'classnames';

import ImageAvatarDefault from '@/assets/images/image-avatar-default.svg';

import { TAvatarProps } from './Avatar.types';
import './Avatar.scss';
import Icon from '@/components/Icon';

const Avatar: React.FC<TAvatarProps> = ({ image, size, className, iconNameDefault, iconColorDefault }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [image]);

  return (
    <div className={classNames('Avatar', className, { 'icon-default': iconNameDefault })}>
      <AntdAvatar
        size={size}
        src={isError ? ImageAvatarDefault : image || (iconNameDefault ? undefined : ImageAvatarDefault)}
        onError={(): boolean => {
          setIsError(true);
          return true;
        }}
      >
        {iconNameDefault && !image && <Icon name={iconNameDefault} color={iconColorDefault} />}
      </AntdAvatar>
    </div>
  );
};

export default Avatar;
