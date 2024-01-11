import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Tags from '@/components/Tags';
import CalendarSelect from '@/pages/Booking/BookingForm/CalendarSelect';
import ScheduleCard from '@/components/ScheduleCard';
import { getOrdersAction } from '@/redux/actions';
import { TGetOrdersParams } from '@/services/api';
import { DEFAULT_PAGE, dataOrderStatusOptions } from '@/common/constants';
import { EOrderStatus } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { LayoutPaths, Paths } from '@/pages/routers';

import './MySchedules.scss';

const MySchedules: React.FC = () => {
  const dispatch = useDispatch();
  const isSmallDesktop = useMediaQuery({ maxWidth: 1200 });
  const isMiniTablet = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 575 });

  const renderRangeDays = (): number => {
    switch (true) {
      case isMobile:
        return 3;
      case isMiniTablet:
        return 4;
      case isSmallDesktop:
        return 6;
      default:
        return 7;
    }
  };

  const myOrdersState = useSelector((state: TRootState) => state.orderReducer.getOrdersResponse);

  const [getMyOrdersParamsRequest, setGetMyOrdersParamsRequest] = useState<TGetOrdersParams>({
    page: DEFAULT_PAGE,
    limit: 100,
    tab: EOrderStatus.SCHEDULE,
  });

  const getMyOrders = useCallback(() => {
    if (getMyOrdersParamsRequest?.from_date && getMyOrdersParamsRequest?.to_date) {
      dispatch(getOrdersAction.request({ params: getMyOrdersParamsRequest }));
    }
  }, [dispatch, getMyOrdersParamsRequest]);

  useEffect(() => {
    getMyOrders();
  }, [getMyOrders]);

  return (
    <div className="MySchedules">
      <div className="SideBar-card">
        <div className="MySchedules-card-title" style={{ marginBottom: '1.6rem' }}>
          Lịch hẹn của tôi
        </div>
        <div className="MySchedules-status">
          <Tags
            carousel
            size="middle"
            value={dataOrderStatusOptions.find((option) => option.value === getMyOrdersParamsRequest?.tab)}
            options={dataOrderStatusOptions}
            onChange={(option): void => {
              setGetMyOrdersParamsRequest({
                ...getMyOrdersParamsRequest,
                page: DEFAULT_PAGE,
                tab: option?.value as string,
              });
            }}
          />
        </div>
      </div>

      <div className="MySchedules-date">
        <CalendarSelect
          schedules={myOrdersState?.data}
          rangeDays={renderRangeDays()}
          size="small"
          onChangeRange={({ fromDate, toDate }): void => {
            setGetMyOrdersParamsRequest({
              ...getMyOrdersParamsRequest,
              page: DEFAULT_PAGE,
              from_date: fromDate,
              to_date: toDate,
            });
          }}
          onInit={({ fromDate, toDate }): void => {
            setGetMyOrdersParamsRequest({
              ...getMyOrdersParamsRequest,
              page: DEFAULT_PAGE,
              from_date: fromDate,
              to_date: toDate,
            });
          }}
        />
      </div>

      <div className="MySchedules-schedules">
        <Row gutter={[16, 16]}>
          {myOrdersState?.data?.map((item) => (
            <Col key={item.id} span={24} lg={{ span: 12 }}>
              <ScheduleCard
                dateTime={item.date}
                status={item.process}
                numberOfBookings={item.number_of_bookings}
                services={item.order_services}
                remind={item.remind === 1}
                total={typeof item.total_money_discount === 'number' ? item.total_money_discount : item.total_money}
                onClickDetail={(): void => {
                  navigate(`${LayoutPaths.Profile}${Paths.MyScheduleDetail(String(item.id))}`);
                }}
                onClickReview={(): void => {}}
                onClickReOrder={(): void => {
                  const dataServices = item?.order_services?.map((subItem) => ({
                    ...subItem.service,
                    quantity: subItem?.quantity,
                  }));
                  navigate(Paths.Booking(String(dataServices?.[0]?.store?.id)), { state: { services: dataServices } });
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MySchedules;
