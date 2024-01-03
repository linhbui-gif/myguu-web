import { TSelectOption } from '@/components/Select';

export type TSuccessProps = {
  className?: string;
  value?: TSelectOption;
  onChange?: (data: TSelectOption) => void;
};
