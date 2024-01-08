import { TVoucher } from '@/common/models';

export type TVoucherSelectProps = {
  className?: string;
  value?: TVoucher;
  totalOrder?: number;
  disabled?: boolean;
  onChange?: (data: TVoucher) => void;
};
