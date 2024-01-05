import { TVote } from '@/common/models';
import { TCommonResponse } from '@/common/types';

export type TReviewsProps = {
  dataVoteState?: TCommonResponse & {
    data: TVote[];
  };
};
