import { SizeType } from 'antd/lib/config-provider/SizeContext';

import { TVoucher } from '@/common/models';

export type TTicketProps = {
  active?: boolean;
  image?: string;
  subtitle?: string;
  title?: string;
  endDate?: string;
  banner?: string;
  data?: TVoucher;
  disabled?: boolean;
  size?: SizeType;
  forceUse?: boolean;
  onClick?: () => void;
  onSave?: () => void;
};
