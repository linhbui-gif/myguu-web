import { CSSProperties } from 'react';

import { EIconColor, EIconName } from '@/components/Icon';
import { TSelectOption } from '@/components/Select';
import { TGridBannersProps } from '@/containers/GridBanners';

export type TCategoryCardsProps = {
  headerIcon?: EIconName;
  headerIconColor?: EIconColor;
  title?: string;
  moreLink?: string;
  data?: any;
  tagsFilter?: TSelectOption[];
  gridBanners?: TGridBannersProps;
  isGridList?: boolean;
  primaryBackground?: boolean;
  style?: CSSProperties;
};
