import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import { ERole, ETypeNotification } from '@/common/enums';
import { EChangePasswordAction, changePasswordAction } from '@/redux/actions/auth/change-password';
import { TRootState } from '@/redux/reducers';

import { TChangePasswordProps } from './ChangePassword.types';
import './ChangePassword.scss';

const ChangePassword: React.FC<TChangePasswordProps> = ({ data, onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const changePasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EChangePasswordAction.CHANGE_PASSWORD],
  );

  const handleSubmit = (values: any): void => {
    const body = {
      transaction: data?.transaction,
      new_password: values?.password,
      role: ERole.USER,
    };

    dispatch(changePasswordAction.request({ body }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công !');
    onSuccess?.();
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
            <Button
              title="Hoàn thành"
              styleType={EButtonStyleType.PRIMARY}
              size="large"
              htmlType="submit"
              disabled={changePasswordLoading}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ChangePassword;
