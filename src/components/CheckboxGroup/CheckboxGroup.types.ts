import { TSelectOption } from '@/components/Select';

export type TCheckboxGroupProps = {
  className?: string;
  value?: TSelectOption[];
  options?: TSelectOption[];
  onChange?: (data: TSelectOption[]) => void;
};
