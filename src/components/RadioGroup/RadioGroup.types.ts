import { TSelectOption } from '@/components/Select';

export type TRadioGroupProps = {
  className?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  onChange?: (data: TSelectOption) => void;
};
