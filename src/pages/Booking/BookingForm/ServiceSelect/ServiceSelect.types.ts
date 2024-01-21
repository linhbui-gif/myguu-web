import { TService } from '@/common/models';

export type TServiceSelectProps = {
  className?: string;
  value?: TService[];
  onChange?: (data: TService[]) => void;
  isBookingAgain?: boolean | any;
};
