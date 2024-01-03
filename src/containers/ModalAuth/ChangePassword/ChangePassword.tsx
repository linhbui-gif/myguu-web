import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';

import { TChangePasswordProps } from './ChangePassword.types';
import './ChangePassword.scss';

const ChangePassword: React.FC<TChangePasswordProps> = ({ onNext }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  return (
    <div className="ChangePassword">
      <div className="ModalAuth-title text-center">Nhập mật khẩu mới</div>

      <Form
        layout="vertical"
        form={form}
        className="ModalAuth-form"
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        onFinish={handleSubmit}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="password" rules={[validationRules.required()]} label="Mật khẩu mới">
              <Input size="large" type="password" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="confirmPassword"
              rules={[validationRules.required(), validationRules.confirmPassword(formValues?.password)]}
              label="Xác nhận lại mật khẩu"
            >
              <Input size="large" type="password" />
            </Form.Item>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button title="Hoàn thành" styleType={EButtonStyleType.PRIMARY} size="large" htmlType="submit" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ChangePassword;
