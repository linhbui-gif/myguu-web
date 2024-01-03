import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { TSelectOption } from '@/components/Select';

export type TTagsProps = {
  value?: TSelectOption;
  options: TSelectOption[];
  size?: SizeType;
  shape?: 'rounded' | 'rectangle';
  carousel?: boolean;
  onChange?: (data: TSelectOption) => void;
};
