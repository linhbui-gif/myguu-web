import React, { useEffect } from 'react';
import { Col, Form, Row } from 'antd';
import { useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import Input from '@/components/Input';
import { TRootState } from '@/redux/reducers';
import { EFormat } from '@/common/enums';
import { formatCurrency } from '@/utils/functions';
import { ECreateOrderAction } from '@/redux/actions';

import { TConfirmBookingProps } from './ConfirmBooking.types';
import './ConfirmBooking.scss';

const ConfirmBooking: React.FC<TConfirmBookingProps> = ({ data, onNext }) => {
  const [form] = Form.useForm();

  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;

  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const createOrderLoading = useSelector((state: TRootState) => state.loadingReducer[ECreateOrderAction.CREATE_ORDER]);

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  useEffect(() => {
    if (data && myProfileState) {
      const dataChanged = {
        customer_name: data?.customer_name || myProfileState?.name,
        customer_phone: data?.customer_phone || myProfileState?.phone,
      };
      form.setFieldsValue(dataChanged);
    }
  }, [form, data, myProfileState]);

  return (
    <div className="ConfirmBooking">
      <div className="BookingForm">
        <div className="Booking-header flex items-center justify-center text-center">Xem lại lịch đặt</div>
        <div className="Booking-main">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <div className="ConfirmBooking-title">{storeState?.name}</div>
            <div className="ConfirmBooking-table">
              <table>
                <tr>
                  <td>Chi nhánh</td>
                  <td>
                    <span>{data?.branch?.label}</span>
                  </td>
                </tr>
                <tr>
                  <td>Thời gian</td>
                  <td>
                    <span>
                      {data?.time?.label} {data?.date?.format(EFormat['DD-MM-YYYY'])}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Số chỗ</td>
                  <td>
                    <span>{data?.numberOfBooking}</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="ConfirmBooking-title">Dịch vụ</div>
            <div className="ConfirmBooking-table">
              <table>
                {cartState?.map((service) => (
                  <tr>
                    <td style={{ color: EIconColor.MIRAGE }}>
                      {service?.name}
                      <br />x{service?.quantity}
                    </td>
                    <td style={{ color: EIconColor.MIRAGE, verticalAlign: 'bottom' }}>
                      {formatCurrency({
                        amount: typeof service?.discount_price === 'number' ? service?.discount_price : service?.price,
                        showSuffix: true,
                      })}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    Tổng tiền
                  </td>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    <strong>{formatCurrency({ amount: data?.totalOrder, showSuffix: true })}</strong>
                  </td>
                </tr>
                <tr>
                  <td style={{ color: EIconColor.TAN_HIDE }}>Giảm giá voucher</td>
                  <td>
                    <strong style={{ color: EIconColor.TAN_HIDE }}>
                      -{formatCurrency({ amount: data?.discount || 0, showSuffix: true })}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    Thanh toán
                  </td>
                  <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                    <strong>{formatCurrency({ amount: data?.total || 0, showSuffix: true })}</strong>
                  </td>
                </tr>
              </table>
            </div>

            <div className="ConfirmBooking-title">Thông tin khách đặt</div>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Form.Item name="customer_name" label="Tên">
                  <Input
                    size="large"
                    suffix={
                      <Icon
                        style={{ width: '2.4rem', height: '2.4rem' }}
                        name={EIconName.PencilEdit}
                        color={EIconColor.DOVE_GRAY}
                      />
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="customer_phone" label="Số điện thoại">
                  <Input size="large" numberstring numberic />
                </Form.Item>
              </Col>
              <Col span={24}>
                <div style={{ padding: '0 0 0.8rem' }}>
                  <Button
                    title="Xác nhận"
                    size="large"
                    styleType={EButtonStyleType.PRIMARY}
                    htmlType="submit"
                    disabled={createOrderLoading}
                  />
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
