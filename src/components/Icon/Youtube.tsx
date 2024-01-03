import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7568 12.0189H3.26775C1.73048 12.0189 0.491943 10.6593 0.491943 8.9871V3.56254C0.491943 1.8835 1.7367 0.530762 3.26775 0.530762H14.7568C16.2941 0.530762 17.5326 1.8903 17.5326 3.56254V8.9871C17.5388 10.6661 16.2941 12.0189 14.7568 12.0189Z"
        fill={color}
      />
      <path d="M12.0263 6.19038L7.19312 3.40332V8.97743L12.0263 6.19038Z" fill="url(#paint0_linear_9_12878)" />
      <defs>
        <linearGradient
          id="paint0_linear_9_12878"
          x1="9.60969"
          y1="3.40332"
          x2="9.60969"
          y2="8.97743"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEA489" />
          <stop offset="1" stopColor="#F6BF87" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
