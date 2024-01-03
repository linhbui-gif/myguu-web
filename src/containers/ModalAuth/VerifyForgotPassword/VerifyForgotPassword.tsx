import React from 'react';
import { Col, Form, Row } from 'antd';

import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';

import { TVerifyForgotPasswordProps } from './VerifyForgotPassword.types';
import './VerifyForgotPassword.scss';

const VerifyForgotPassword: React.FC<TVerifyForgotPasswordProps> = ({ onNext }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  return (
    <div className="VerifyForgotPassword">
      <div className="ModalAuth-title text-center">Nhập mã xác minh</div>

      <Form layout="vertical" form={form} className="ModalAuth-form" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="ModalAuth-description gray" style={{ fontWeight: 400 }}>
              Vui lòng nhập mã bảo mật được gửi tới số điện thoại +84 976 570 231 để tiếp tục
            </div>
          </Col>
          <Col span={24}>
            <Form.Item name="phoneNumber" rules={[validationRules.required()]} label="Mã xác minh">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="ModalAuth-description gray" style={{ fontWeight: 400 }}>
              Bạn chưa nhận được mã? <span className="ModalAuth-link highlight">Gửi lại</span>
            </div>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button title="Gửi" styleType={EButtonStyleType.PRIMARY} size="large" htmlType="submit" />
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
