import { CSSProperties } from 'react';

import { TVote } from '@/common/models';
import { TCommonResponse } from '@/common/types';

export type TReviewsListProps = {
  dataVoteState?: TCommonResponse & {
    data: TVote[];
  };
  style?: CSSProperties;
};
