import React from 'react';
import { Col, Form, Row } from 'antd';

import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';

import { TSignInProps } from './SignIn.types';
import './SignIn.scss';

const SignIn: React.FC<TSignInProps> = ({ onClickSignUp, onClickForgotPassword }) => {
  const [form] = Form.useForm();

  return (
    <div className="SignIn">
      <div className="ModalAuth-title text-center">Đăng Nhập</div>

      <Form layout="vertical" form={form} className="ModalAuth-form">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="phoneNumber" rules={[validationRules.required()]} label="Số điện thoại">
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="password" rules={[validationRules.required()]} label="Mật khẩu">
              <Input size="large" type="password" />
            </Form.Item>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button title="Đăng Nhập" styleType={EButtonStyleType.PRIMARY} size="large" htmlType="submit" />
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
