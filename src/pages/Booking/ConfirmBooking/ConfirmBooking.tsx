import React from 'react';
import { Col, Form, Row } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import Input from '@/components/Input';

import { TConfirmBookingProps } from './ConfirmBooking.types';
import './ConfirmBooking.scss';

const ConfirmBooking: React.FC<TConfirmBookingProps> = ({ onNext }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  return (
    <div className="ConfirmBooking">
      <div className="BookingForm">
        <div className="Booking-header flex items-center justify-center text-center">Xem lại lịch đặt</div>
        <div className="Booking-main">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <div className="ConfirmBooking-title">Minh Vân Makeup</div>
            <div className="ConfirmBooking-table">
              <table>
                <tr>
                  <td>Chi nhánh</td>
                  <td>
                    <span>Phường Mai Dịch - Q. Cầu Giấy, TP.Hà Nội</span>
                  </td>
                </tr>
                <tr>
                  <td>Thời gian</td>
                  <td>
                    <span>16:00 19-05-2023</span>
                  </td>
                </tr>
                <tr>
                  <td>Số chỗ</td>
                  <td>
                    <span>01</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="ConfirmBooking-title">Dịch vụ</div>
            <div className="ConfirmBooking-table">
              <table>
                <tr>
                  <td style={{ color: EIconColor.MIRAGE }}>
                    Trang điểm cô dâu
                    <br />
                    x1
                  </td>
                  <td style={{ color: EIconColor.MIRAGE, verticalAlign: 'bottom' }}>150,000đ</td>
                </tr>
                <tr>
                  <td style={{ color: EIconColor.MIRAGE }}>
                    Trang điểm chụp hình
                    <br />
                    x2
                  </td>
                  <td style={{ color: EIconColor.MIRAGE, verticalAlign: 'bottom' }}>300,000đ</td>
                </tr>
                <tr>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    Tổng tiền
                  </td>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    <strong>450.000 đ</strong>
                  </td>
                </tr>
                <tr>
                  <td style={{ color: EIconColor.TAN_HIDE }}>Giảm giá voucher</td>
                  <td>
                    <strong style={{ color: EIconColor.TAN_HIDE }}>-20.000 đ</strong>
                  </td>
                </tr>
                <tr>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    Thanh toán
                  </td>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    <strong>430.000 đ</strong>
                  </td>
                </tr>
              </table>
            </div>

            <div className="ConfirmBooking-title">Thông tin khách đặt</div>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="name" label="Tên">
                  <Input size="large" suffix={<Icon name={EIconName.PencilEdit} color={EIconColor.DOVE_GRAY} />} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="phoneNumber" label="Số điện thoại">
                  <Input size="large" numberstring numberic />
                </Form.Item>
              </Col>
              <Col span={24}>
                <div style={{ padding: '0 0 0.8rem' }}>
                  <Button title="Xác nhận" size="large" styleType={EButtonStyleType.PRIMARY} htmlType="submit" />
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
