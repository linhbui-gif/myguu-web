import React from 'react';
import { Col, Form, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import {
  ERegisterAction,
  EVerifyRegisterAction,
  getMyProfileAction,
  registerAction,
  verifyRegisterAction,
} from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';

import { TVerifyOtpProps } from './VerifyOtp.types';
import './VerifyOtp.scss';

const VerifyOtp: React.FC<TVerifyOtpProps> = ({ data, onSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const registerLoading = useSelector((state: TRootState) => state.loadingReducer[ERegisterAction.REGISTER]);
  const verifyRegisterLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EVerifyRegisterAction.VERIFY_REGISTER],
  );

  const handleResendOtp = (): void => {
    const body = {
      username: data?.username,
      password: data?.password,
      platform: data?.platform,
      device: data?.device,
      role: data?.role,
    };
    dispatch(
      registerAction.request({ body }, (): void => {
        showNotification(ETypeNotification.SUCCESS, 'Đã gửi lại mã OTP. Vui lòng kiểm tra mã OTP trong tin nhắn !');
      }),
    );
  };

  const handleSubmit = (values: any): void => {
    const body = {
      username: data?.username,
      role: data?.role,
      otp: values?.otp,
    };
    dispatch(verifyRegisterAction.request({ body }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xác thực tài khoản thành công !');
    dispatch(getMyProfileAction.request({}));
    onSuccess?.();
  };

  return (
    <div className="VerifyOtp">
      <div className="ModalAuth-title text-center">Nhập mã xác minh</div>

      <Form layout="vertical" form={form} className="ModalAuth-form" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div className="ModalAuth-description gray" style={{ fontWeight: 400 }}>
              Vui lòng nhập mã bảo mật được gửi tới số điện thoại {data?.username} để tiếp tục:
            </div>
          </Col>
          <Col span={24}>
            <Form.Item name="otp" rules={[validationRules.required()]} label="Mã xác minh">
              <Input size="large" numberic numberstring />
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="ModalAuth-description gray" style={{ fontWeight: 400 }}>
              Bạn chưa nhận được mã?{' '}
              <span
                className="ModalAuth-link highlight"
                onClick={(): void => {
                  if (!registerLoading) handleResendOtp();
                }}
              >
                Gửi lại
              </span>
            </div>
          </Col>
          <Col span={24} style={{ marginTop: '.4rem' }}>
            <Button
              title="Gửi"
              styleType={EButtonStyleType.PRIMARY}
              size="large"
              htmlType="submit"
              disabled={verifyRegisterLoading}
            />
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

export default VerifyOtp;
