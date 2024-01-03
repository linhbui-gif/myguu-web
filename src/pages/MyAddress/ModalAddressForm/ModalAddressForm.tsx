import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import Radio from '@/components/Radio';

import { TModalAddressFormProps } from './ModalAddressForm.types';
import './ModalAddressForm.scss';

const ModalAddressForm: React.FC<TModalAddressFormProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const [formValues, setFormValues] = useState<any>({});

  const handleSubmit = (): void => {};

  return (
    <Modal
      className="ModalAddressForm"
      visible={visible}
      onClose={onClose}
      width={624}
      confirmButton={{ title: 'Lưu' }}
      cancelButton={{ title: 'Huỷ' }}
      onSubmit={handleSubmit}
    >
      <div className="ModalAddressForm-wrapper">
        <div className="ModalAddressForm-title">Thêm địa chỉ mới</div>
        <Form
          form={form}
          layout="vertical"
          onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item name="name" label="Tên">
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="address" label="Địa chỉ">
                <Input size="large" />
              </Form.Item>
            </Col>
            {/* <Col span={24}>
              <div className="ModalAddressForm-iframe">
                <iframe
                  title="map"
                  src={`https://www.google.com/maps?z=19&q=${formValues?.address || 'hanoi'}`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col> */}
            <Col span={24}>
              <Form.Item name="isDefault">
                <Radio label="Đặt Làm Mặc Định" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddressForm;
