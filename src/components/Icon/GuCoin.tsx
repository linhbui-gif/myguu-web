import React from 'react';

import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_71_13287)" />
      <circle cx="9.99996" cy="9.99996" r="8.33333" fill="url(#paint1_linear_71_13287)" />
      <path
        d="M13.3196 5.3125H6.32322C5.93748 5.3125 5.625 5.65617 5.625 6.08042V13.9678C5.625 14.3649 5.91752 14.6869 6.27885 14.6869H10.0738C10.4839 14.6869 10.8166 14.3213 10.8166 13.8699V13.0529H7.11073V6.94653H13.3196C13.7298 6.94653 14.0625 6.58091 14.0625 6.12951C14.0625 5.67812 13.7301 5.3125 13.3196 5.3125ZM14.0617 9.82152H9.88077C9.67569 9.82152 9.49004 9.91307 9.3556 10.0609C9.22588 10.2036 9.14395 10.3985 9.13844 10.6149C9.12636 11.0772 9.47245 11.4558 9.89312 11.4558H12.576L12.5768 13.9297C12.5899 14.1319 12.6697 14.3135 12.7924 14.4484C12.9221 14.591 13.0993 14.6811 13.296 14.6872C13.3031 14.6872 13.3102 14.6875 13.3173 14.6875C13.728 14.6875 14.0604 14.3118 14.0604 13.8572V10.9065L14.0625 10.9057V9.82268L14.0617 9.82152Z"
        fill="#EB9209"
      />
      <defs>
        <linearGradient
          id="paint0_linear_71_13287"
          x1="1.75879"
          y1="3.5"
          x2="18.5623"
          y2="7.10298"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE68E" />
          <stop offset="1" stopColor="#F9AB34" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_71_13287"
          x1="7.34844"
          y1="2.04541"
          x2="16.6391"
          y2="13.7376"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE68E" />
          <stop offset="1" stopColor="#F9AB34" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
