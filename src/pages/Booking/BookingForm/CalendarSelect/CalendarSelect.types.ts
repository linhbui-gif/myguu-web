import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Moment } from 'moment';

export type TCalendarSelectProps = {
  className?: string;
  value?: Moment;
  rangeDays?: number;
  showDot?: boolean;
  size?: SizeType;
  onChange?: (data: Moment) => void;
};
