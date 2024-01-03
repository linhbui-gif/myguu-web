import React from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import { EForgotPasswordAction, forgotPasswordAction } from '@/redux/actions/auth/forgot-password';
import { TRootState } from '@/redux/reducers';
import { ERole, ETypeNotification } from '@/common/enums';

import { TForgotPasswordProps } from './ForgotPassword.types';
import './ForgotPassword.scss';

const ForgotPassword: React.FC<TForgotPasswordProps> = ({ onClickSignIn, onClickSignUp, onSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const forgotPasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EForgotPasswordAction.FORGOT_PASSWORD],
  );

  const handleSubmit = (values: any): void => {
    const body = {
      username: values?.username,
      role: ERole.USER,
    };
    dispatch(forgotPasswordAction.request({ body }, (): void => handleSubmitSuccess(body)));
  };

  const handleSubmitSuccess = (body: any): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xác thực thành công. Vui lòng kiểm tra mã OTP để tiếp tục !');
    onSuccess?.(body);
  };

  return (
    <div className="ForgotPassword">
      <div className="ModalAuth-title text-center">Quên mật khẩu</div>

      <Form layout="vertical" form={form} className="ModalAuth-form" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="username" rules={[validationRules.required()]} label="Số điện thoại">
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button
              title="Gửi"
              styleType={EButtonStyleType.PRIMARY}
              size="large"
              htmlType="submit"
              disabled={forgotPasswordLoading}
            />
          </Col>
        </Row>
      </Form>

      <div className="ModalAuth-description text-center" style={{ marginTop: '7.8rem' }}>
        <span className="ModalAuth-link highlight" onClick={onClickSignUp}>
          Đăng ký
        </span>
        <span className="ModalAuth-description highlight">
          {` `}|{` `}
        </span>
        <span className="ModalAuth-link highlight" onClick={onClickSignIn}>
          Đăng nhập
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
