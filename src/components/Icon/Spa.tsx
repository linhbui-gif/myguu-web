import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.1975 6.28125L11.4683 5.96045"
        stroke={color}
        strokeWidth="0.7"
        strokeMiterlimit="2.613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_302_5638"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path d="M2.44727 2.26367H21.9473V21.7637H2.44727V2.26367Z" fill="white" />
      </mask>
      <g mask="url(#mask0_302_5638)">
        <path
          d="M5.11328 9.72852H19.2813C20.5381 9.72852 21.5664 10.7568 21.5664 12.0137V12.7754C21.5664 14.0323 20.5381 15.0605 19.2813 15.0605H5.11328C3.85645 15.0605 2.82812 14.0323 2.82812 12.7754V12.0137C2.82812 10.7568 3.85645 9.72852 5.11328 9.72852Z"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4833 12.7754H6.10352C5.68457 12.7754 5.3418 12.4327 5.3418 12.0137C5.3418 11.5948 5.68457 11.252 6.10352 11.252M17.5293 15.0605C18.1603 15.0605 18.6718 14.549 18.6718 13.918C18.6718 13.287 18.1603 12.7754 17.5293 12.7754H13.911"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.2813 15.0605C20.5381 15.0605 21.5664 16.0889 21.5664 17.3457V18.1074C21.5664 19.3643 20.5381 20.3926 19.2813 20.3926H5.11328C3.85648 20.3926 2.82812 19.3643 2.82812 18.1074V17.3457C2.82812 16.0889 3.85645 15.0605 5.11328 15.0605"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5293 20.3926C18.1603 20.3926 18.6718 19.881 18.6718 19.25C18.6718 18.619 18.1603 18.1075 17.5293 18.1075H6.10352C5.68457 18.1075 5.3418 17.7647 5.3418 17.3457C5.3418 16.9268 5.68457 16.584 6.10352 16.584"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.24609 5.94172C8.22387 5.52594 9.54763 5.63799 10.7394 6.33923C11.3463 6.6964 11.8405 7.16025 12.1972 7.67094C12.554 7.16025 13.0482 6.6964 13.6551 6.33923C14.8468 5.63799 16.1706 5.52594 17.1484 5.94172C17.0128 7.0127 16.2557 8.12508 15.064 8.82631C14.1114 9.3869 13.0744 9.57089 12.1972 9.40983C11.3201 9.57089 10.2831 9.3869 9.3305 8.82631C8.13875 8.12508 7.38168 7.0127 7.24609 5.94172Z"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1146 5.76792C15.3211 5.00289 15.291 4.24437 15.0416 3.63507C14.1136 3.75714 13.1495 4.43865 12.5419 5.51138C12.4006 5.7608 12.2869 6.01662 12.2002 6.27344"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1973 7.6713V9.41016"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.27616 5.75207C9.07408 4.99218 9.10546 4.23968 9.35321 3.63441C10.2813 3.75648 11.2452 4.43799 11.8529 5.51076C12.1957 6.11587 12.376 6.75879 12.4034 7.3623"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3354 4.75C11.5509 4.29087 11.8471 3.90704 12.1972 3.63465C12.5419 3.90918 12.8357 4.29217 13.0512 4.74193"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1968 12.7754H12.1972"
          stroke={color}
          strokeWidth="0.7"
          strokeMiterlimit="2.613"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Svg;
