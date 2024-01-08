import { TAddress } from '@/common/models';

export type TModalAddressFormProps = {
  visible: boolean;
  data?: TAddress;
  onSuccess?: () => void;
  onClose?: () => void;
};
