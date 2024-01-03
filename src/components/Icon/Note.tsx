import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7368 2.76196H8.08376C6.02476 2.76196 4.24976 4.43096 4.24976 6.49096V17.204C4.24976 19.38 5.90876 21.115 8.08376 21.115H16.0728C18.1328 21.115 19.8018 19.265 19.8018 17.204V8.03796L14.7368 2.76196Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.474 2.75024V5.65924C14.474 7.07924 15.623 8.23124 17.042 8.23424C18.359 8.23724 19.706 8.23824 19.797 8.23224"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2841 15.5579H8.88708"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.2426 10.6056H8.8866" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Svg;
