import React, { useEffect } from 'react';
import { Col, Form, Row, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import UploadImage from '@/components/UploadImage';
import { TRootState } from '@/redux/reducers';
import { parseObjectToFormData, showNotification, validationRules } from '@/utils/functions';
import {
  EGetMyProfileAction,
  EUpdateMyProfileAction,
  getMyProfileAction,
  updateMyProfileAction,
} from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';

import './ProfileInformation.scss';

const ProfileInformation: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;

  const updateMyProfileLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUpdateMyProfileAction.UPDATE_MY_PROFILE],
  );

  const getMyProfileLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetMyProfileAction.GET_MY_PROFILE],
  );

  const handleSubmit = async (values: any): Promise<void> => {
    const body = {
      file: values?.avatar,
      name: values?.name,
      phone: values?.phone,
    };

    dispatch(updateMyProfileAction.request({ body: parseObjectToFormData(body) }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Cập nhật thông tin cá nhân thành công !');
    dispatch(getMyProfileAction.request({}));
  };

  useEffect(() => {
    if (myProfileState) {
      const dataChanged = {
        avatar: myProfileState?.avatar,
        name: myProfileState?.name,
        phone: myProfileState?.phone,
      };
      form.setFieldsValue(dataChanged);
    }
  }, [myProfileState, form]);

  return (
    <div className="ProfileInformation">
      <div className="SideBar-card">
        <div className="ProfileInformation-card-title">Thông tin cá nhân</div>
      </div>
      <div className="SideBar-card">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Spin spinning={getMyProfileLoading}>
            <Row gutter={[24, 24]}>
              <Col span={24} style={{ paddingTop: '0.8rem' }}>
                <Form.Item name="avatar">
                  <UploadImage />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  className="ProfileInformation-label"
                  name="name"
                  label="Họ tên"
                  rules={[validationRules.required()]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  className="ProfileInformation-label"
                  name="phone"
                  label="Số điện thoại"
                  rules={[validationRules.required()]}
                >
                  <Input size="large" numberic numberstring />
                </Form.Item>
              </Col>
              <Col span={24} style={{ paddingBottom: '0.8rem' }}>
                <div className="ProfileInformation-submit flex">
                  <Button
                    title="Lưu"
                    htmlType="submit"
                    styleType={EButtonStyleType.PRIMARY}
                    disabled={updateMyProfileLoading}
                  />
                </div>
              </Col>
            </Row>
          </Spin>
        </Form>
      </div>
    </div>
  );
};

export default ProfileInformation;
