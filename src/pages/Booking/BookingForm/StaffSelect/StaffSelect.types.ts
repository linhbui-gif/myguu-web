import { TSelectOption } from '@/components/Select';

export type TStaffSelectProps = {
  className?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  onChange?: (data: TSelectOption) => void;
};
