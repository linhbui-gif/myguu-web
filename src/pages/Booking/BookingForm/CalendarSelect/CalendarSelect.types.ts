import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Moment } from 'moment';

import { TOrder } from '@/common/models';

export type TCalendarSelectProps = {
  schedules?: TOrder[];
  className?: string;
  value?: Moment;
  rangeDays?: number;
  size?: SizeType;
  disabledDate?: (data: Moment) => boolean;
  onChange?: (data: Moment) => void;
  onChangeRange?: (data: { fromDate: string; toDate: string }) => void;
  onInit?: (data: { fromDate: string; toDate: string }) => void;
};
