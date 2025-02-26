import React, { useCallback, useEffect } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import AppDownload from '@/containers/AppDownload';
import CollapseCards from '@/containers/CollapseCards';
import Reviews from '@/pages/ShopDetail/Reviews';
import Tabs, { ETabsStyleType } from '@/components/Tabs';
import Content from '@/pages/ServiceDetail/Content';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceDetailCard from '@/pages/ServiceDetail/ServiceDetailCard';
import { getServiceAction, getServiceVotesAction, getServicesByStoreAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { DEFAULT_PAGE } from '@/common/constants';

import './ServiceDetail.scss';
import { Paths } from '@/pages/routers';

const ServiceDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const serviceState = useSelector((state: TRootState) => state.serviceReducer.getServiceResponse)?.data;
  const serviceVotesState = useSelector((state: TRootState) => state.serviceReducer.getServiceVotesResponse);

  const servicesByStoreState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesByStoreResponse,
  )?.data;

  const dataServiceDetailTabs = [
    {
      key: 'info',
      title: 'Chi tiết dịch vụ',
      children: <Content />,
    },
    {
      key: 'review',
      title: 'Đánh giá dịch vụ',
      children: <Reviews dataVoteState={serviceVotesState} />,
    },
  ];

  const getService = useCallback(() => {
    if (id) dispatch(getServiceAction.request({ paths: { id } }));
  }, [id, dispatch]);

  const getServiceVotes = useCallback(() => {
    if (id) dispatch(getServiceVotesAction.request({ paths: { id }, params: { page: DEFAULT_PAGE, limit: 100 } }));
  }, [dispatch, id]);

  const getServicesByStore = useCallback(() => {
    if (serviceState?.store?.id) {
      dispatch(getServicesByStoreAction.request({ params: { store_id: serviceState?.store?.id } }));
    }
  }, [dispatch, serviceState]);

  useEffect(() => {
    getServiceVotes();
  }, [getServiceVotes]);

  useEffect(() => {
    getServicesByStore();
  }, [getServicesByStore]);

  useEffect(() => {
    getService();
  }, [getService]);

  useEffect(() => {
    return (): void => {
      dispatch(getServiceAction.success(undefined));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ServiceDetail">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ', link: Paths.Home },
          { key: '2', title: 'Dịch vụ' },
          { key: '3', title: serviceState?.name || '' },
        ]}
      />

      <ServiceDetailCard />

      <div className="ServiceDetail-main" style={{ marginBottom: '-3.2rem' }}>
        <div className="ServiceDetail-main-wrapper">
          <Tabs data={dataServiceDetailTabs} styleType={ETabsStyleType.LINE} />
        </div>
      </div>

      {servicesByStoreState?.map((category, categoryIndex) => {
        const isFirstItem = categoryIndex === 0;

        return (
          <CollapseCards
            style={isFirstItem ? { marginTop: '3.2rem' } : undefined}
            herotitle={isFirstItem ? 'Dịch vụ liên quan' : undefined}
            title={category?.name}
            data={category?.services?.map((item) => ({
              serviceData: { ...item, store: serviceState?.store || storeState },
              showQuantity: true,
              title: item.name,
              image: item?.banner?.[0],
              discountPercent: item.discount_percent,
              sellingPrice: item.discount_price,
              retailPrice: item.price,
            }))}
          />
        );
      })}

      {/* <AppDownload /> */}
    </div>
  );
};

export default ServiceDetail;
