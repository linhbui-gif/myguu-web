import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.54169 13.8363C11.8512 13.8363 14.5341 11.1534 14.5341 7.84394C14.5341 4.53444 11.8512 1.85156 8.54169 1.85156C5.23219 1.85156 2.54932 4.53444 2.54932 7.84394C2.54932 11.1534 5.23219 13.8363 8.54169 13.8363Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7095 12.3232L15.0588 14.6665"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
