import React from 'react';
import { Col, Form, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';

import Select from '@/components/Select';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import CalendarSelect from '@/pages/Booking/BookingForm/CalendarSelect';
import ImageAvatar from '@/assets/images/image-avatar.png';
import Tags from '@/components/Tags';
import StaffSelect from '@/pages/Booking/BookingForm/StaffSelect';
import QuantitySelect from '@/pages/Booking/BookingForm/QuantitySelect';
import ServiceSelect from '@/pages/Booking/BookingForm/ServiceSelect';
import TextArea from '@/components/TextArea';
import VoucherSelect from '@/pages/Booking/BookingForm/VoucherSelect';
import Button, { EButtonStyleType } from '@/components/Button';

import { TBookingFormProps } from './BookingForm.types';
import './BookingForm.scss';

const BookingForm: React.FC<TBookingFormProps> = ({ onNext }) => {
  const [form] = Form.useForm();
  const isMobile = useMediaQuery({ maxWidth: 575 });

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  return (
    <div className="BookingForm">
      <div className="Booking-header flex items-center justify-center text-center">Đặt lịch hẹn</div>
      <div className="Booking-main">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Form.Item className="Booking-label" name="branch" label="Chọn chi nhánh">
                <Select
                  options={[]}
                  suffixIcon={EIconName.CaretDown}
                  suffixIconColor={EIconColor.TAN_HIDE}
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="date" label="Chọn ngày">
                <CalendarSelect rangeDays={isMobile ? 2 : 3} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="time" label="Giờ hẹn">
                <Tags
                  shape="rectangle"
                  size="large"
                  carousel
                  options={[
                    { value: '08:00', label: '08:00' },
                    { value: '09:00', label: '09:00' },
                    { value: '10:00', label: '10:00' },
                    { value: '11:00', label: '11:00' },
                    { value: '12:00', label: '12:00' },
                    { value: '13:00', label: '13:00' },
                    { value: '14:00', label: '14:00' },
                    { value: '15:00', label: '15:00' },
                    { value: '16:00', label: '16:00' },
                    { value: '17:00', label: '17:00' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="staff" label="Nhân viên">
                <StaffSelect
                  options={[
                    {
                      value: '',
                      label: 'Tự động',
                      data: { iconNameDefault: EIconName.Users, iconColorDefault: EIconColor.WHITE },
                    },
                    { value: '1', label: 'Thu Hương', data: { avatar: ImageAvatar } },
                    { value: '2', label: 'Hà Nhi', data: { avatar: ImageAvatar } },
                    { value: '3', label: 'Thu Trang', data: { avatar: ImageAvatar } },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="quantity">
                <QuantitySelect />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="services" label="Dịch vụ">
                <ServiceSelect />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="services">
                <VoucherSelect />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="BookingForm-coin flex items-center justify-between">
                <div className="BookingForm-coin-item flex items-center">
                  <Icon name={EIconName.GuCoin} />
                  Điểm Gu
                  <span>(7.500 Gu đang có)</span>
                </div>
                <div className="BookingForm-coin-item">
                  <strong>-7.500 đ</strong>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <Form.Item
                className="Booking-label"
                name="note"
                label={
                  <span
                    className="flex items-center"
                    style={{ fontWeight: 400, fontSize: '1.5rem', columnGap: '.4rem' }}
                  >
                    <Icon name={EIconName.Note} color={EIconColor.REGENT_GRAY} />
                    Ghi chú:
                  </span>
                }
              >
                <TextArea placeholder="Lời nhắn tới cửa hàng" size="large" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="BookingForm-total flex items-center justify-between">
                <div className="BookingForm-total-item flex items-center">
                  Tạm tính
                  <span>3 dịch vụ</span>
                </div>
                <div className="BookingForm-total-item">
                  <strong>450.000 đ</strong>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div style={{ padding: '1.6rem 0' }}>
                <Button title="Tiếp theo" size="large" styleType={EButtonStyleType.PRIMARY} htmlType="submit" />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
