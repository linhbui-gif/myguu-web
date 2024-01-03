import React from 'react';
import { Col, Form, Row } from 'antd';

import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';

import { TForgotPasswordProps } from './ForgotPassword.types';
import './ForgotPassword.scss';

const ForgotPassword: React.FC<TForgotPasswordProps> = ({ onClickSignIn, onClickSignUp, onNext }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  return (
    <div className="ForgotPassword">
      <div className="ModalAuth-title text-center">Quên mật khẩu</div>

      <Form layout="vertical" form={form} className="ModalAuth-form" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="phoneNumber" rules={[validationRules.required()]} label="Số điện thoại">
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button title="Gửi" styleType={EButtonStyleType.PRIMARY} size="large" htmlType="submit" />
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
