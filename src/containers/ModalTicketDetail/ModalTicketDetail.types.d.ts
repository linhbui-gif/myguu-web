import { TVoucher } from '@/common/models';

export type TModalTicketDetailProps = {
  visible: boolean;
  data?: TVoucher;
  onClose?: () => void;
};
