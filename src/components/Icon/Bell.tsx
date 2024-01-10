import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 17.8476C18.1392 17.8476 20.7481 17.1242 21 14.2205C21 11.3188 19.1812 11.5054 19.1812 7.94511C19.1812 5.16414 16.5452 2 12.5 2C8.45477 2 5.81885 5.16414 5.81885 7.94511C5.81885 11.5054 4 11.3188 4 14.2205C4.25295 17.1352 6.86177 17.8476 12.5 17.8476Z"
        stroke={color}
        className="stroke"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8889 20.8574C13.5247 22.3721 11.3967 22.3901 10.0195 20.8574"
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
