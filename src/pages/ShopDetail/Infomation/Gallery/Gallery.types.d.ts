import { CSSProperties } from 'react';

import { TSelectOption } from '@/components/Select';

export type TGalleryProps = {
  style?: CSSProperties;
  data?: TSelectOption[];
  loading?: boolean;
  isShowLoadMore?: boolean;
  total?: number;
  onLoadMore?: () => void;
};
