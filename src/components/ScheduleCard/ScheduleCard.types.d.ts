import { TOrderService } from '@/common/models';

export type TScheduleCardProps = {
  dateTime?: string;
  status?: string;
  services?: TOrderService[];
  total?: number;
  remind?: boolean;
  numberOfBookings?: number;
  onClickDetail?: () => void;
  onClickReview?: () => void;
  onClickReOrder?: () => void;
};
