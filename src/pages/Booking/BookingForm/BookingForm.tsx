import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useLocation } from '@reach/router';

import Select from '@/components/Select';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import CalendarSelect from '@/pages/Booking/BookingForm/CalendarSelect';
import Tags from '@/components/Tags';
import StaffSelect from '@/pages/Booking/BookingForm/StaffSelect';
import QuantitySelect from '@/pages/Booking/BookingForm/QuantitySelect';
import ServiceSelect from '@/pages/Booking/BookingForm/ServiceSelect';
import TextArea from '@/components/TextArea';
import VoucherSelect from '@/pages/Booking/BookingForm/VoucherSelect';
import Button, { EButtonStyleType } from '@/components/Button';
import { TRootState } from '@/redux/reducers';
import { formatCurrency, validationRules } from '@/utils/functions';
import { TVoucher } from '@/common/models';

import { dataBookingTime } from './BookingForm.data';
import { TBookingFormProps } from './BookingForm.types';
import './BookingForm.scss';

const BookingForm: React.FC<TBookingFormProps> = ({ onNext }) => {
  const [form] = Form.useForm();
  const isMobile = useMediaQuery({ maxWidth: 575 });

  const location = useLocation();
  const voucher: TVoucher = (location?.state as any)?.voucher;

  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const [formValues, setFormValues] = useState<any>({});

  const dataAddressOptions =
    storeState?.branches?.map((item) => ({
      value: item.id,
      label: item.name,
      data: item,
    })) || [];

  const dataMemberOptions = [
    {
      value: '',
      label: 'Tự động',
      data: { iconNameDefault: EIconName.Users, iconColorDefault: EIconColor.WHITE },
    },
    ...(storeState?.experts?.map((item) => ({
      value: item.id,
      label: item.name,
      data: { avatar: item?.avatar },
    })) || []),
  ];

  const totalOrder =
    cartState?.reduce((result, service) => {
      const price = typeof service?.discount_price === 'number' ? service?.discount_price : service?.price;
      return result + price * (service.quantity || 0);
    }, 0) || 0;

  const isValidVoucher =
    (formValues?.voucher?.store ? formValues?.voucher?.store?.id === cartState?.[0]?.store?.id : true) &&
    (typeof formValues?.voucher?.order_money_min === 'number'
      ? totalOrder >= formValues?.voucher?.order_money_min
      : true) &&
    formValues?.voucher?.used < formValues?.voucher?.used_limit;

  const discount = (): number => {
    if (formValues?.voucher) {
      if (isValidVoucher) {
        return formValues?.voucher?.discount_money;
      }

      return 0;
    }

    return 0;
  };

  const total = totalOrder - discount();

  const handleSubmit = (values: any): void => {
    onNext?.({ ...values, total, totalOrder, discount: discount() });
  };

  useEffect(() => {
    if (storeState) {
      const dataChanged = {
        branch: dataAddressOptions?.[0],
        date: moment(),
        time: dataBookingTime(moment()).find((option) => !option.data?.disabled),
        staff: dataMemberOptions[0],
        numberOfBooking: 1,
        note: '',
      };
      setFormValues({ ...formValues, ...dataChanged });
      form.setFieldsValue(dataChanged);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeState]);

  useEffect(() => {
    if (voucher) {
      const dataChanged = {
        voucher,
      };
      form.setFieldsValue(dataChanged);
      setFormValues({ ...formValues, ...dataChanged });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voucher]);

  return (
    <div className="BookingForm">
      <div className="Booking-header flex items-center justify-center text-center">Đặt lịch hẹn</div>
      <div className="Booking-main">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          onValuesChange={(_, values): void => setFormValues({ ...formValues, ...values })}
        >
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Form.Item className="Booking-label" name="branch" label="Chọn chi nhánh">
                <Select
                  options={dataAddressOptions}
                  suffixIcon={EIconName.CaretDown}
                  suffixIconColor={EIconColor.TAN_HIDE}
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="date" label="Chọn ngày">
                <CalendarSelect
                  rangeDays={isMobile ? 2 : 3}
                  disabledDate={(date): boolean => date.valueOf() < moment().subtract(1, 'day').valueOf()}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="time" label="Giờ hẹn" rules={[validationRules.required()]}>
                <Tags shape="rectangle" size="large" carousel options={dataBookingTime(formValues?.date)} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="staff" label="Nhân viên">
                <StaffSelect options={dataMemberOptions} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="numberOfBooking">
                <QuantitySelect />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="services" label="Dịch vụ">
                <ServiceSelect />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="Booking-label" name="voucher">
                <VoucherSelect totalOrder={totalOrder} disabled={!isValidVoucher} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="BookingForm-coin flex items-center justify-between">
                <div className="BookingForm-coin-item flex items-center">
                  <Icon name={EIconName.GuCoin} />
                  Điểm Gu
                  <span>({formatCurrency({ amount: 0 })} Gu đang có)</span>
                </div>
                <div className="BookingForm-coin-item">
                  <strong>-0 đ</strong>
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
                    <Icon
                      name={EIconName.Note}
                      color={EIconColor.REGENT_GRAY}
                      style={{ width: '2.4rem', height: '2.4rem' }}
                    />
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
                  <span>{cartState?.length || 0} dịch vụ</span>
                </div>
                <div className="BookingForm-total-item">
                  <strong>{formatCurrency({ amount: total, showSuffix: true })}</strong>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div style={{ padding: '1.6rem 0' }}>
                <Button
                  title="Tiếp theo"
                  size="large"
                  styleType={EButtonStyleType.PRIMARY}
                  htmlType="submit"
                  disabled={cartState?.length === 0}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
