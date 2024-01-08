import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { ECreateAddressAction, EUpdateAddressAction, createAddressAction, updateAddressAction } from '@/redux/actions';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';

import { TModalAddressFormProps } from './ModalAddressForm.types';
import './ModalAddressForm.scss';

const ModalAddressForm: React.FC<TModalAddressFormProps> = ({ visible, data, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [formValues, setFormValues] = useState<any>({});

  const createAddressLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ECreateAddressAction.CREATE_ADDRESS],
  );
  const updateAddressLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUpdateAddressAction.UPDATE_ADDRESS],
  );

  const loading = createAddressLoading || updateAddressLoading;

  const handleSubmit = (): void => {
    form.validateFields().then((values: any) => {
      const body = {
        name: values?.name,
        detail: values?.detail,
        lat: 0,
        lng: 0,
      };

      if (data) {
        dispatch(updateAddressAction.request({ paths: { id: data?.id }, body }, handleSubmitSuccess));
      } else {
        dispatch(createAddressAction.request({ body }, handleSubmitSuccess));
      }
    });
  };

  const handleSubmitSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, `${data ? 'Cập nhật' : 'Tạo mới'} địa chỉ thành công !`);
    onClose?.();
    onSuccess?.();
  };

  useEffect(() => {
    if (visible) {
      const dataChanged = {
        name: data?.name,
        detail: data?.detail,
      };
      setFormValues({ ...formValues, ...dataChanged });
      form.setFieldsValue(dataChanged);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, visible, data]);

  return (
    <Modal
      className="ModalAddressForm"
      visible={visible}
      onClose={onClose}
      width={624}
      confirmButton={{ title: 'Lưu', disabled: loading }}
      cancelButton={{ title: 'Huỷ', disabled: loading }}
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
              <Form.Item name="name" label="Tên" rules={[validationRules.required()]}>
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="detail" label="Địa chỉ" rules={[validationRules.required()]}>
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
            {/* <Col span={24}>
              <Form.Item name="isDefault">
                <Radio label="Đặt Làm Mặc Định" />
              </Form.Item>
            </Col> */}
          </Row>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAddressForm;
