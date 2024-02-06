import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import { EIconColor } from '@/components/Icon';
import { EFormat } from '@/common/enums';
import { formatCurrency, formatISODateToDateTime } from '@/utils/functions';
import { getOrderAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import './MyScheduleDetail.scss';

const MyScheduleDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const orderState = useSelector((state: TRootState) => state.orderReducer.getOrderResponse)?.data;
  const storeState = orderState?.order_services?.[0]?.service?.store;

  const getOrder = useCallback(() => {
    if (id) dispatch(getOrderAction.request({ paths: { id } }));
  }, [id, dispatch]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  return (
    <div className="MyScheduleDetail">
      <div className="MyScheduleDetail-header flex items-center justify-center text-center">Xem lại lịch đặt</div>
      <div className="MyScheduleDetail-main">
        <div>
          <div className="MyScheduleDetail-title">{storeState?.name}</div>
          <div className="MyScheduleDetail-table">
            <table>
              <tr>
                <td>Chi nhánh</td>
                <td>
                  <span>{orderState?.branch?.name}</span>
                </td>
              </tr>
              <tr>
                <td>Thời gian</td>
                <td>
                  <span>
                    {orderState?.time}{' '}
                    {orderState?.date ? formatISODateToDateTime(orderState?.date, EFormat['DD-MM-YYYY']) : ''}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Số chỗ</td>
                <td>
                  <span>{orderState?.number_of_bookings}</span>
                </td>
              </tr>
            </table>
          </div>

          <div className="MyScheduleDetail-title">Dịch vụ</div>
          <div className="MyScheduleDetail-table">
            <table>
              {orderState?.order_services?.map((service) => (
                <tr>
                  <td style={{ color: EIconColor.MIRAGE }}>
                    {service?.service?.name}
                    <br />x{service?.quantity}
                  </td>
                  <td style={{ color: EIconColor.MIRAGE, verticalAlign: 'bottom' }}>
                    {formatCurrency({
                      amount: typeof service?.price_discount === 'number' ? service?.price_discount : service?.price,
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
                  <strong>{formatCurrency({ amount: orderState?.total_money || 0, showSuffix: true })}</strong>
                </td>
              </tr>

              {typeof orderState?.floor_discount === 'number' && (
                <tr>
                  <td style={{ color: EIconColor.PRIMARY }}>Giảm giá sàn</td>
                  <td>
                    <strong style={{ color: EIconColor.PRIMARY }}>
                      -{formatCurrency({ amount: orderState?.floor_discount || 0, showSuffix: true })}
                    </strong>
                  </td>
                </tr>
              )}

              {typeof orderState?.rank_discount === 'number' && (
                <tr>
                  <td style={{ color: EIconColor.PRIMARY }}>Giảm giá thành viên</td>
                  <td>
                    <strong style={{ color: EIconColor.PRIMARY }}>
                      -{formatCurrency({ amount: orderState?.rank_discount || 0, showSuffix: true })}
                    </strong>
                  </td>
                </tr>
              )}

              {typeof orderState?.voucher_discount === 'number' && (
                <tr>
                  <td style={{ color: EIconColor.PRIMARY }}>Giảm giá voucher</td>
                  <td>
                    <strong style={{ color: EIconColor.PRIMARY }}>
                      -{formatCurrency({ amount: orderState?.voucher_discount || 0, showSuffix: true })}
                    </strong>
                  </td>
                </tr>
              )}

              {typeof orderState?.exchange_discount === 'number' && (
                <tr>
                  <td style={{ color: EIconColor.PRIMARY }}>Giảm giá đổi thưởng</td>
                  <td>
                    <strong style={{ color: EIconColor.PRIMARY }}>
                      -{formatCurrency({ amount: orderState?.exchange_discount || 0, showSuffix: true })}
                    </strong>
                  </td>
                </tr>
              )}

              <tr>
                <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                  Thanh toán
                </td>
                <td className="dashed-top" style={{ color: EIconColor.MIRAGE }}>
                  <strong>
                    {formatCurrency({
                      amount:
                        typeof orderState?.total_money_discount === 'number'
                          ? orderState?.total_money_discount || 0
                          : orderState?.total_money || 0,
                      showSuffix: true,
                    })}
                  </strong>
                </td>
              </tr>
            </table>
          </div>

          <div className="MyScheduleDetail-title">Thông tin khách đặt</div>
          <div className="MyScheduleDetail-table">
            <table>
              <tr>
                <td style={{ color: EIconColor.MIRAGE }}>Tên khách hàng</td>
                <td style={{ color: EIconColor.MIRAGE }}>
                  <strong>{orderState?.order_users?.[0]?.customer_name}</strong>
                </td>
              </tr>
              <tr>
                <td style={{ color: EIconColor.MIRAGE }}>Số điện thoại</td>
                <td style={{ color: EIconColor.MIRAGE }}>
                  <strong>{orderState?.order_users?.[0]?.customer_phone}</strong>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyScheduleDetail;
