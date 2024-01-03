import React from 'react';
import { Col, Form, Row } from 'antd';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';

import './ProfileInformation.scss';
import UploadImage from '@/components/UploadImage';

const ProfileInformation: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <div className="ProfileInformation">
      <div className="SideBar-card">
        <div className="ProfileInformation-card-title">Thông tin cá nhân</div>
      </div>
      <div className="SideBar-card">
        <Form form={form} layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={24} style={{ paddingTop: '0.8rem' }}>
              <Form.Item name="avatar">
                <UploadImage />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="ProfileInformation-label" name="name" label="Họ tên">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="ProfileInformation-label" name="phoneNumber" label="Số điện thoại">
                <Input size="large" numberic numberstring />
              </Form.Item>
            </Col>
            <Col span={24} style={{ paddingBottom: '0.8rem' }}>
              <div className="ProfileInformation-submit flex">
                <Button title="Lưu" styleType={EButtonStyleType.PRIMARY} />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ProfileInformation;
