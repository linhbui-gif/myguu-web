import { TOrderService } from '@/common/models';

export type TReviewCommentProps = {
  avatar?: string;
  name?: string;
  star?: number;
  content?: string;
  createDate?: string;
  images?: string[];
  orderServices?: TOrderService[];
};
