import React from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import { EPlatform, ERole, ETypeNotification } from '@/common/enums';
import { ELoginAction, getMyProfileAction, loginAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import { TSignInProps } from './SignIn.types';
import './SignIn.scss';

const SignIn: React.FC<TSignInProps> = ({ onClickSignUp, onClickForgotPassword, onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const loginLoading = useSelector((state: TRootState) => state.loadingReducer[ELoginAction.LOGIN]);

  const handleSubmit = (values: any): void => {
    const body = {
      username: values?.username,
      password: values?.password,
      platform: EPlatform.WEB,
      device: window.navigator.userAgent,
      role: ERole.USER,
    };

    dispatch(loginAction.request({ body }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đăng nhập thành công !');
    dispatch(getMyProfileAction.request({}));
    onSuccess?.();
  };

  return (
    <div className="SignIn">
      <div className="ModalAuth-title text-center">Đăng Nhập</div>

      <Form layout="vertical" form={form} className="ModalAuth-form" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name="username"
              rules={[validationRules.required(), validationRules.phoneNumberVietnam()]}
              label="Số điện thoại"
            >
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="password"
              rules={[validationRules.required(), validationRules.password()]}
              label="Mật khẩu"
            >
              <Input size="large" type="password" />
            </Form.Item>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button
              title="Đăng Nhập"
              styleType={EButtonStyleType.PRIMARY}
              size="large"
              htmlType="submit"
              disabled={loginLoading}
            />
          </Col>
        </Row>
      </Form>

      <div className="flex justify-center">
        <div
          className="ModalAuth-link text-center"
          style={{ margin: '2.4rem 0 7.2rem' }}
          onClick={onClickForgotPassword}
        >
          Quên mật khẩu?
        </div>
      </div>
      <div className="ModalAuth-description text-center darken">
        Bạn chưa có tài khoản?{' '}
        <span className="ModalAuth-link highlight" onClick={onClickSignUp}>
          Đăng ký
        </span>
      </div>
    </div>
  );
};

export default SignIn;
