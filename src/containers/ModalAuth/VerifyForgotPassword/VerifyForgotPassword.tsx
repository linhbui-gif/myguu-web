import React from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import { EVerifyForgotPasswordAction, verifyForgotPasswordAction } from '@/redux/actions/auth/verify-forgot-password';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { EForgotPasswordAction, forgotPasswordAction } from '@/redux/actions/auth/forgot-password';

import { TVerifyForgotPasswordProps } from './VerifyForgotPassword.types';
import './VerifyForgotPassword.scss';
import { TVerifyForgotPasswordResponse } from '@/services/api';

const VerifyForgotPassword: React.FC<TVerifyForgotPasswordProps> = ({ data, onSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const verifyForgotPasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EVerifyForgotPasswordAction.VERIFY_FORGOT_PASSWORD],
  );

  const forgotPasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EForgotPasswordAction.FORGOT_PASSWORD],
  );

  const handleResendOtp = (): void => {
    const body = {
      username: data?.username,
      role: data?.role,
    };
    dispatch(
      forgotPasswordAction.request({ body }, (): void => {
        showNotification(ETypeNotification.SUCCESS, 'Đã gửi lại mã OTP. Vui lòng kiểm tra mã OTP trong tin nhắn !');
      }),
    );
  };

  const handleSubmit = (values: any): void => {
    const body = {
      otp: values?.otp,
      username: data?.username,
      role: data?.role,
    };

    dispatch(verifyForgotPasswordAction.request({ body }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (response: TVerifyForgotPasswordResponse): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xác thực mã OTP thành công. Vui lòng đổi mật khẩu mới !');
    onSuccess?.(response?.data);
  };

  return (
    <div className="VerifyForgotPassword">
      <div className="ModalAuth-title text-center">Nhập mã xác minh</div>

      <Form layout="vertical" form={form} className="ModalAuth-form" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="ModalAuth-description gray" style={{ fontWeight: 400 }}>
              Vui lòng nhập mã bảo mật được gửi tới số điện thoại {data?.username} để tiếp tục:
            </div>
          </Col>
          <Col span={24}>
            <Form.Item name="otp" rules={[validationRules.required()]} label="Mã xác minh">
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="ModalAuth-description gray" style={{ fontWeight: 400 }}>
              Bạn chưa nhận được mã?{' '}
              <span
                className="ModalAuth-link highlight"
                onClick={(): void => {
                  if (!forgotPasswordLoading) handleResendOtp();
                }}
              >
                Gửi lại
              </span>
            </div>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button
              title="Gửi"
              styleType={EButtonStyleType.PRIMARY}
              size="large"
              htmlType="submit"
              disabled={verifyForgotPasswordLoading}
            />
          </Col>
        </Row>
      </Form>

      <div className="ModalAuth-description text-center" style={{ marginTop: '4.4rem' }}>
        <span className="ModalAuth-link highlight">Đăng ký</span>
        <span className="ModalAuth-description highlight">
          {` `}|{` `}
        </span>
        <span className="ModalAuth-link highlight">Đăng nhập</span>
      </div>
    </div>
  );
};

export default VerifyForgotPassword;
