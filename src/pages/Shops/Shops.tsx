import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Breadcrumb from '@/components/Breadcrumb';
import { getQueryParam, scrollToTop } from '@/utils/functions';
import { EShopsType } from '@/pages/Shops/Shops.enums';
import { DEFAULT_PAGE } from '@/common/constants';
import { getStoresMakeupAtHomeAction, getStoresNearByAction, getStoresProminentPlaceAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import ServiceCard from '@/components/ServiceCard';
import { Paths } from '@/pages/routers';
import { TStore } from '@/common/models';
import Pagination from '@/components/Pagination';

import './Shops.scss';

const Shops: React.FC = () => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const type = getQueryParam('type');
  const category_id = getQueryParam('category_id') as string;

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const storesNearByState = useSelector((state: TRootState) => state.storeReducer.getStoresNearByResponse);
  const storesProminentPlaceState = useSelector(
    (state: TRootState) => state.storeReducer.getStoresProminentPlaceResponse,
  );
  const storesMakeupAtHomeState = useSelector((state: TRootState) => state.storeReducer.getStoresMakeupAtHomeResponse);

  const [getParamsRequest, setGetParamsRequest] = useState<any>({
    page: DEFAULT_PAGE,
    limit: 8 * 5,
    lat: undefined,
    lng: undefined,
    category_id: undefined,
  });

  const handlePaginateChange = (): void => {
    scrollToTop();
    setGetParamsRequest({
      ...getParamsRequest,
      page: (getParamsRequest.page || 0) + 1,
    });
  };

  const renderTitle = (): string => {
    switch (type) {
      case EShopsType.NEAR_YOU:
        return 'Cửa Hàng Gần Bạn';
      case EShopsType.MAKEUP_AT_HOME:
        return 'Make-up Tại Nhà';
      case EShopsType.PROMINENT_PLACE:
        return 'Địa Điểm Nổi Bật';
      default:
        return '';
    }
  };

  const renderDataState = (): any => {
    switch (type) {
      case EShopsType.NEAR_YOU:
        return storesNearByState;
      case EShopsType.MAKEUP_AT_HOME:
        return storesMakeupAtHomeState;
      case EShopsType.PROMINENT_PLACE:
        return storesProminentPlaceState;

      default:
        return undefined;
    }
  };

  const getData = useCallback(() => {
    switch (type) {
      case EShopsType.NEAR_YOU: {
        dispatch(
          getStoresNearByAction.request({
            params: {
              lat: appGeoLoactionState?.latitude,
              lng: appGeoLoactionState?.longitude,
              category_id: category_id || undefined,
            },
          }),
        );
        break;
      }
      case EShopsType.MAKEUP_AT_HOME: {
        dispatch(
          getStoresMakeupAtHomeAction.request({
            params: {
              lat: appGeoLoactionState?.latitude,
              lng: appGeoLoactionState?.longitude,
            },
          }),
        );
        break;
      }
      case EShopsType.PROMINENT_PLACE: {
        dispatch(
          getStoresProminentPlaceAction.request({
            params: {
              lat: appGeoLoactionState?.latitude,
              lng: appGeoLoactionState?.longitude,
              category_id: category_id || undefined,
            },
          }),
        );
        break;
      }
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, getParamsRequest, type, category_id]);

  useEffect(() => {
    if (appGeoLoactionState) {
      setGetParamsRequest({
        ...getParamsRequest,
        lat: appGeoLoactionState?.latitude,
        lng: appGeoLoactionState?.longitude,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appGeoLoactionState]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="Shops">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Dịch vụ' },
          { key: '3', title: renderTitle() },
        ]}
      />
      <div className="Shops-header">{renderTitle()}</div>
      <div className="Shops-main" style={{ padding: '4.8rem 0 6.4rem' }}>
        <div className="container">
          <div className="Shops-main-wrapper">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Row gutter={isTablet ? [16, 16] : [24, 24]}>
                  {renderDataState()?.data?.map((item: TStore) => (
                    <Col key={item.id} span={12} lg={{ span: 6 }}>
                      <ServiceCard
                        border
                        link={Paths.ShopDetail(String(item.id), item.slug)}
                        title={item.name}
                        image={item?.avatar}
                        address={item?.address}
                        moveTime={item.move_time}
                        distance={item.distance}
                        vote={item.vote}
                      />
                    </Col>
                  ))}
                  {/* {isServiceTab ? (
                    <>
                      
                    </>
                  ) : (
                    <>
                      {storesByShopsState?.data?.map((item) => (
                        <Col key={item.id} span={12} md={{ span: 8 }}>
                          <ServiceCard
                            border
                            link={Paths.ShopDetail(String(item.id), item.slug)}
                            title={item.name}
                            image={item?.avatar}
                            address={item?.address}
                            moveTime={item.move_time}
                            distance={item.distance}
                            vote={item.vote}
                          />
                        </Col>
                      ))}
                    </>
                  )} */}
                </Row>

                <div className="Shops-pagination flex justify-center" style={{ marginTop: '2rem' }}>
                  <Pagination
                    page={getParamsRequest.page || 0}
                    pageSize={getParamsRequest.limit || 0}
                    total={renderDataState()?.paging?.total}
                    onChange={handlePaginateChange}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
