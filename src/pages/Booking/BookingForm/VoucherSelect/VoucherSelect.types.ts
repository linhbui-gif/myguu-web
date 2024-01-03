import { TSelectOption } from '@/components/Select';

export type TVoucherSelectProps = {
  className?: string;
  value?: TSelectOption;
  onChange?: (data: TSelectOption) => void;
};
