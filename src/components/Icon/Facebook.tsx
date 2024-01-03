import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.16427 8.55647V14.1674H2.58682V8.55647H0.445557V6.28138H2.58682V5.45362C2.58682 2.38051 3.87059 0.764648 6.58682 0.764648C7.41953 0.764648 7.62771 0.898477 8.08372 1.00752V3.25783C7.57319 3.16861 7.42944 3.11905 6.89909 3.11905C6.26959 3.11905 5.93254 3.29749 5.62523 3.64941C5.31792 4.00133 5.16427 4.61099 5.16427 5.48336V6.28633H8.08372L7.30057 8.56143H5.16427V8.55647Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
