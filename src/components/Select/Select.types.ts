import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { EIconColor, EIconName } from '@/components/Icon';

export type TSelectProps = {
  className?: string;
  placeholder?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  showSearch?: boolean;
  disabled?: boolean;
  defaultValue?: TSelectOption;
  allowClear?: boolean;
  dropdownClassName?: string;
  suffixIcon?: EIconName;
  paginate?: {
    page: number;
    pageSize: number;
    total: number;
  };
  size?: SizeType;
  suffixIconColor?: EIconColor;
  onSearch?: (keyword: string) => void;
  onLoadMore?: () => void;
  onChange?: (option?: TSelectOption) => void;
};

export type TSelectOption = {
  label: React.ReactNode;
  value: string;
  data?: any;
  disabled?: boolean;
};
