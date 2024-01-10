import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9849 15.3457C8.11731 15.3457 4.81445 15.9305 4.81445 18.2724C4.81445 20.6143 8.09636 21.22 11.9849 21.22C15.8525 21.22 19.1545 20.6343 19.1545 18.2933C19.1545 15.9524 15.8735 15.3457 11.9849 15.3457Z"
        stroke={color}
        className="stroke"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9849 12.0059C14.523 12.0059 16.5802 9.94779 16.5802 7.40969C16.5802 4.8716 14.523 2.81445 11.9849 2.81445C9.44682 2.81445 7.3887 4.8716 7.3887 7.40969C7.38015 9.93922 9.42396 11.9973 11.9525 12.0059H11.9849Z"
        stroke={color}
        className="stroke"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Svg;
