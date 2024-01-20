import { TVoucher } from '@/common/models';

export type TModalVoucherSelectProps = {
  visible: boolean;
  data?: TVoucher;
  totalOrder?: number;
  onClose?: () => void;
  onSubmit?: (data: any) => void;
};
