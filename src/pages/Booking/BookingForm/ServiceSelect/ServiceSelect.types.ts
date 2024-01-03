import { TSelectOption } from '@/components/Select';

export type TServiceSelectProps = {
  className?: string;
  value?: TSelectOption[];
  options?: TSelectOption[];
  onChange?: (data: TSelectOption) => void;
};
