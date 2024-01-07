import { CSSProperties } from 'react';

import { EIconName } from './Icon.enums';

export type TIconProps = TColor & {
  name?: EIconName;
  className?: string;
  strokeWidth?: number;
  style?: CSSProperties;
  onClick?: (e: any) => void;
};

export type TSvgProps = TColor;

export type TColor = {
  color?: string;
};
