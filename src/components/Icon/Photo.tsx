import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.83659 15.1366H10.8366C14.1699 15.1366 15.5033 13.8032 15.5033 10.4699V6.46989C15.5033 3.13656 14.1699 1.80322 10.8366 1.80322H6.83659C3.50326 1.80322 2.16992 3.13656 2.16992 6.46989V10.4699C2.16992 13.8032 3.50326 15.1366 6.83659 15.1366Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83675 7.13639C7.57313 7.13639 8.17008 6.53944 8.17008 5.80306C8.17008 5.06668 7.57313 4.46973 6.83675 4.46973C6.10037 4.46973 5.50342 5.06668 5.50342 5.80306C5.50342 6.53944 6.10037 7.13639 6.83675 7.13639Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6167 13.1033L5.90337 10.8966C6.43003 10.5433 7.19003 10.5833 7.66337 10.9899L7.88337 11.1833C8.40337 11.6299 9.24337 11.6299 9.76337 11.1833L12.5367 8.80326C13.0567 8.3566 13.8967 8.3566 14.4167 8.80326L15.5034 9.73659"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
