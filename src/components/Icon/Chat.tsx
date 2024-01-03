import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.66671 12.6663H5.33337C2.66671 12.6663 1.33337 11.9997 1.33337 8.66634V5.33301C1.33337 2.66634 2.66671 1.33301 5.33337 1.33301H10.6667C13.3334 1.33301 14.6667 2.66634 14.6667 5.33301V8.66634C14.6667 11.333 13.3334 12.6663 10.6667 12.6663H10.3334C10.1267 12.6663 9.92671 12.7663 9.80004 12.933L8.80004 14.2663C8.36004 14.853 7.64004 14.853 7.20004 14.2663L6.20004 12.933C6.09337 12.7863 5.84671 12.6663 5.66671 12.6663Z"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6643 7.33333H10.6703"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99703 7.33333H8.00302"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.32967 7.33333H5.33566"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
