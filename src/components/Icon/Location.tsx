import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99992 9.53329C9.14867 9.53329 10.0799 8.60204 10.0799 7.45329C10.0799 6.30454 9.14867 5.37329 7.99992 5.37329C6.85117 5.37329 5.91992 6.30454 5.91992 7.45329C5.91992 8.60204 6.85117 9.53329 7.99992 9.53329Z"
        stroke={color}
        strokeWidth="1.3"
      />
      <path
        d="M2.4133 6.24C3.72664 0.466665 12.28 0.473332 13.5866 6.24667C14.3533 9.63333 12.2466 12.5 10.4 14.2733C9.05997 15.5667 6.93997 15.5667 5.5933 14.2733C3.7533 12.5 1.64664 9.62667 2.4133 6.24Z"
        stroke={color}
        strokeWidth="1.3"
      />
    </svg>
  );
};

export default Svg;
