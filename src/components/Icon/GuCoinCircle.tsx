import React from 'react';

import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
      <circle cx="12.5" cy={12} r={12} fill="url(#paint0_linear_297_66056)" />
      <circle cx="12.5" cy={12} r={10} fill="url(#paint1_linear_297_66056)" />
      <path
        d="M16.4836 6.375H8.08787C7.62498 6.375 7.25 6.78741 7.25 7.2965V16.7614C7.25 17.2379 7.60103 17.6243 8.03461 17.6243H12.5885C13.0807 17.6243 13.48 17.1856 13.48 16.6439V15.6635H9.03287V8.33583H16.4836C16.9758 8.33583 17.375 7.89709 17.375 7.35541C17.375 6.81374 16.9761 6.375 16.4836 6.375ZM17.3741 11.7858H12.3569C12.1108 11.7858 11.8881 11.8957 11.7267 12.0731C11.5711 12.2443 11.4727 12.4783 11.4661 12.7378C11.4516 13.2927 11.8669 13.747 12.3717 13.747H15.5912L15.5921 16.7156C15.6079 16.9582 15.7037 17.1762 15.8508 17.338C16.0065 17.5092 16.2192 17.6174 16.4552 17.6247C16.4637 17.6247 16.4722 17.625 16.4807 17.625C16.9736 17.625 17.3725 17.1741 17.3725 16.6286V13.0878L17.375 13.0868V11.7872L17.3741 11.7858Z"
        fill="#EB9209"
      />
      <defs>
        <linearGradient
          id="paint0_linear_297_66056"
          x1="2.61055"
          y1="4.2"
          x2="22.7747"
          y2="8.52357"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE68E" />
          <stop offset={1} stopColor="#F9AB34" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_297_66056"
          x1="9.31818"
          y1="2.45455"
          x2="20.4669"
          y2="16.4852"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE68E" />
          <stop offset={1} stopColor="#F9AB34" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Svg;
