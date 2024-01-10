import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.0135 2.47344L2.42016 5.27344C1.82016 5.74011 1.3335 6.73344 1.3335 7.48677V12.4268C1.3335 13.9734 2.5935 15.2401 4.14016 15.2401H11.8602C13.4068 15.2401 14.6668 13.9734 14.6668 12.4334V7.5801C14.6668 6.77344 14.1268 5.74011 13.4668 5.28011L9.34683 2.39344C8.4135 1.74011 6.9135 1.77344 6.0135 2.47344Z"
        stroke={color}
        className="stroke"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.5735V10.5735"
        stroke={color}
        className="stroke"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
