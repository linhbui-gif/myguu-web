import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { ECreateAddressAction, EUpdateAddressAction, createAddressAction, updateAddressAction } from '@/redux/actions';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import MapPicker from '@/components/MapPicker';

import { TModalAddressFormProps } from './ModalAddressForm.types';
import './ModalAddressForm.scss';

const ModalAddressForm: React.FC<TModalAddressFormProps> = ({ visible, data, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);
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
        lat: values?.mapPicker?.lat,
        lng: values?.mapPicker?.lng,
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
      if (data) {
        const dataChanged = {
          name: data?.name,
          detail: data?.detail,
          mapPicker: { lat: data?.lat, lng: data?.lng },
        };
        setFormValues({ ...formValues, ...dataChanged });
        form.setFieldsValue(dataChanged);
      } else {
        const dataChanged = {
          mapPicker: {
            lat: appGeoLoactionState?.latitude || 21.027762580927508,
            lng: appGeoLoactionState?.longitude || 105.83427070693538,
          },
        };
        setFormValues({ ...formValues, ...dataChanged });
        form.setFieldsValue(dataChanged);
      }
    } else {
      form.resetFields();
      setFormValues({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, visible, data, appGeoLoactionState]);

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
            <Col span={24}>
              <Form.Item name="mapPicker">
                <MapPicker />
              </Form.Item>
            </Col>
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
