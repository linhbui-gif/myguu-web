import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import NotificationCard from '@/components/NotificationCard';
import { EGetNotificationsAction, getNotificationsAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import Empty from '@/components/Empty';
import { formatISODateToDateTime } from '@/utils/functions';
import { EFormat, ENotificationStatus } from '@/common/enums';
import Pagination from '@/components/Pagination';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { TGetNotificationsParams } from '@/services/api';

import './Notifications.scss';

const Notifications: React.FC = () => {
  const dispatch = useDispatch();

  const notificationsState = useSelector((state: TRootState) => state.notificationReducer.getNotificationsResponse);
  const getNotificationsLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetNotificationsAction.GET_NOTIFICATIONS],
  );

  const [getNotificationsParamsRequest, setGetNotificationsParamsRequest] = useState<TGetNotificationsParams>({
    page: DEFAULT_PAGE,
    limit: DEFAULT_PAGE_SIZE,
  });

  const isEmpty = notificationsState?.data?.length === 0;

  const handlePaginateChange = (page: number): void => {
    setGetNotificationsParamsRequest({
      ...getNotificationsParamsRequest,
      page,
    });
  };

  const getNotifications = useCallback(() => {
    dispatch(getNotificationsAction.request({ params: getNotificationsParamsRequest }));
  }, [dispatch, getNotificationsParamsRequest]);

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  return (
    <div className="Notifications">
      <div className="SideBar-card">
        <div className="Notifications-card-title">Thông báo</div>
      </div>

      <Spin spinning={getNotificationsLoading || false}>
        <div className="SideBar-card">
          {isEmpty ? (
            <Empty />
          ) : (
            <>
              <div className="Notifications-main">
                {notificationsState?.data?.map((item) => (
                  <NotificationCard
                    key={item.id}
                    unread={item.read_status !== ENotificationStatus.READ}
                    title={item?.title}
                    description={item?.content}
                    date={formatISODateToDateTime(item.created_at, EFormat['DD-MM-YYYY - HH:mm'])}
                  />
                ))}
              </div>
              <div className="Notifications-pagination flex justify-center" style={{ marginTop: '1.6rem' }}>
                <Pagination
                  page={getNotificationsParamsRequest.page}
                  pageSize={getNotificationsParamsRequest.limit}
                  total={notificationsState?.paging?.total}
                  onChange={handlePaginateChange}
                />
              </div>
            </>
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Notifications;
