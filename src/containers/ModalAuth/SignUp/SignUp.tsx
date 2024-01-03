import React, { useState } from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import Radio from '@/components/Radio';
import { ERegisterAction, registerAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EPlatform, ERole, ETypeNotification } from '@/common/enums';

import { TSignUpProps } from './SignUp.types';
import './SignUp.scss';

const SignUp: React.FC<TSignUpProps> = ({ onClickSignIn, onClickForgotPassword, onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<any>({});

  const registerLoading = useSelector((state: TRootState) => state.loadingReducer[ERegisterAction.REGISTER]);

  const handleSubmit = (values: any): void => {
    const body = {
      username: values?.username,
      password: values?.password,
      platform: EPlatform.WEB,
      device: window.navigator.userAgent,
      role: ERole.USER,
    };
    dispatch(registerAction.request({ body }, (): void => handleSubmitSuccess(body)));
  };

  const handleSubmitSuccess = (body: any): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đăng ký thành công. Vui lòng kiểm tra mã OTP để tiếp tục !');
    onSuccess?.(body);
  };

  return (
    <div className="SignUp">
      <div className="ModalAuth-title text-center">Đăng ký tài khoản</div>

      <Form
        layout="vertical"
        form={form}
        className="ModalAuth-form"
        onFinish={handleSubmit}
        onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="username" rules={[validationRules.required()]} label="Số điện thoại">
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="password" rules={[validationRules.required()]} label="Mật khẩu">
              <Input size="large" type="password" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="acceptRule">
              <Radio
                label={
                  <>
                    Tôi đồng ý với{' '}
                    <span className="ModalAuth-link highlight">
                      Điều khoản sử dụng, Chính sách riêng tư, Thỏa thuận
                    </span>{' '}
                    của Beauty Find
                  </>
                }
              />
            </Form.Item>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button
              title="Đăng Ký"
              styleType={EButtonStyleType.PRIMARY}
              size="large"
              htmlType="submit"
              disabled={registerLoading || !formValues?.acceptRule}
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
        Bạn đã có tài khoản?{' '}
        <span className="ModalAuth-link highlight" onClick={onClickSignIn}>
          Đăng nhập
        </span>
      </div>
    </div>
  );
};

export default SignUp;
