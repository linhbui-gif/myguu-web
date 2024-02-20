import React from 'react';
import * as reach from '@reach/router';

export const BASEPATH = '/zapps/1057838639345963674';

const isZaloApp: () => boolean = () => {
  return window.APP_CONTEXT === 'zalo-mini-app';
};

export const Link: React.FC<{ to: string }> = ({ to = '', children, ...props }) => {
  let customLink = to;
  if (isZaloApp()) {
    customLink = BASEPATH + to;
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
    customLink = BASEPATH + to;
  }
  reach.navigate(customLink, options);
};
