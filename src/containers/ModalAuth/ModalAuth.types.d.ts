import { EModalAuthType } from '@/containers/ModalAuth/ModalAuth.enums';

export type TModalAuthProps = {
  visible: boolean;
  data?: {
    key?: EModalAuthType;
  };
  onClose?: () => void;
};
