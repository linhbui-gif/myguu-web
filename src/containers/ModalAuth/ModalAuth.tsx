import React, { useEffect, useState } from 'react';

import Modal from '@/components/Modal';

import SignIn from '@/containers/ModalAuth/SignIn';
import SignUp from '@/containers/ModalAuth/SignUp';
import ForgotPassword from '@/containers/ModalAuth/ForgotPassword';
import VerifyForgotPassword from '@/containers/ModalAuth/VerifyForgotPassword';
import ChangePassword from '@/containers/ModalAuth/ChangePassword';
import Success from '@/containers/ModalAuth/Success';

import { TModalAuthProps } from './ModalAuth.types.d';
import { EModalAuthType } from './ModalAuth.enums';
import './ModalAuth.scss';
import VerifyOtp from '@/containers/ModalAuth/VerifyOtp';

const ModalAuth: React.FC<TModalAuthProps> = ({ visible, data, onClose }) => {
  const [stepState, setStepState] = useState<{ key?: EModalAuthType; dataStep?: any }>({ key: EModalAuthType.SUCCESS });

  useEffect(() => {
    if (visible) {
      if (data) {
        setStepState({
          key: data?.key,
        });
      }
    } else {
      setStepState({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal
      visible={visible}
      className="ModalAuth"
      onClose={onClose}
      width={562}
      closeable={stepState?.key !== EModalAuthType.SUCCESS}
    >
      {stepState?.key === EModalAuthType.SIGN_IN && (
        <SignIn
          onClickSignUp={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_UP })}
          onClickForgotPassword={(): void => setStepState({ ...stepState, key: EModalAuthType.FORGOT_PASSWORD })}
          onSuccess={(): void => {
            onClose?.();
          }}
        />
      )}
      {stepState?.key === EModalAuthType.SIGN_UP && (
        <SignUp
          onSuccess={(dataStep): void => setStepState({ ...stepState, key: EModalAuthType.VERIFY_OTP, dataStep })}
          onClickSignIn={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_IN })}
          onClickForgotPassword={(): void => setStepState({ ...stepState, key: EModalAuthType.FORGOT_PASSWORD })}
        />
      )}
      {stepState?.key === EModalAuthType.VERIFY_OTP && (
        <VerifyOtp
          data={stepState.dataStep}
          onSuccess={(): void => {
            onClose?.();
          }}
          onClickSignUp={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_UP })}
          onClickSignIn={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_IN })}
        />
      )}
      {stepState?.key === EModalAuthType.FORGOT_PASSWORD && (
        <ForgotPassword
          onClickSignUp={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_UP })}
          onClickSignIn={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_IN })}
          onSuccess={(dataStep): void =>
            setStepState({ ...stepState, key: EModalAuthType.VERIFY_FORGOT_PASSWORD, dataStep })
          }
        />
      )}
      {stepState?.key === EModalAuthType.VERIFY_FORGOT_PASSWORD && (
        <VerifyForgotPassword
          data={stepState?.dataStep}
          onSuccess={(dataStep): void =>
            setStepState({ ...stepState, key: EModalAuthType.CHANGE_NEW_PASSWORD, dataStep })
          }
          onClickSignUp={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_UP })}
          onClickSignIn={(): void => setStepState({ ...stepState, key: EModalAuthType.SIGN_IN })}
        />
      )}
      {stepState?.key === EModalAuthType.CHANGE_NEW_PASSWORD && (
        <ChangePassword
          data={stepState?.dataStep}
          onSuccess={(): void => setStepState({ ...stepState, key: EModalAuthType.SUCCESS })}
        />
      )}
      {stepState?.key === EModalAuthType.SUCCESS && <Success />}
    </Modal>
  );
};

export default ModalAuth;
