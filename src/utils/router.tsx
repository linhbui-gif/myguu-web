import React from 'react';
import * as reach from '@reach/router';
import { ZALO_MINI_APP_BASE_PATH } from '@/common/constants';

const isZaloApp: () => boolean = () => {
  return window.APP_CONTEXT === 'zalo-mini-app';
};

export const Link: React.FC<reach.LinkProps<{ to: string }> & React.RefAttributes<HTMLAnchorElement>> = ({
  to = '',
  children,
  ...props
}) => {
  let customLink = to;
  if (isZaloApp()) {
    customLink = ZALO_MINI_APP_BASE_PATH + to;
  }
  return (
    <reach.Link {...props} to={customLink}>
      {children}
    </reach.Link>
  );
};

export const navigate = (to: string, options?: any): void => {
  let customLink = to;
  if (isZaloApp()) {
    customLink = ZALO_MINI_APP_BASE_PATH + to;
  }
  reach.navigate(customLink, options);
};
