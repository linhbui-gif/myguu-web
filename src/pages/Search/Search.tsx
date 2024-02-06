import React, { useCallback, useEffect, useState } from 'react';
import { Col, Drawer, Empty, Row, Spin } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '@reach/router';

import Breadcrumb from '@/components/Breadcrumb';
import ServiceCard from '@/components/ServiceCard';
import Pagination from '@/components/Pagination';
import FilterTools, { EFilterType } from '@/containers/FilterTools';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { DEFAULT_PAGE } from '@/common/constants';
import {
  EGetServicesBySearchAction,
  EGetStoresBySearchAction,
  getServicesBySearchAction,
  getStoresBySearchAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TGetStoresBySearchBody } from '@/services/api';
import { Paths } from '@/pages/routers';
import Tabs, { ETabsStyleType } from '@/components/Tabs';
import { EKeyTabSearch } from '@/pages/Search/Search.enums';

import './Search.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const location = useLocation();
  const searchValue: string = (location?.state as any)?.search;
  const paramsFilterValue: any = (location?.state as any)?.filter;

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const [getStoresBySearchParamsRequest, setGetStoresBySearchParamsRequest] = useState<
    TGetStoresBySearchBody & { tab: EKeyTabSearch; searchKeyword?: string }
  >({
    page: DEFAULT_PAGE,
    limit: 18,
    filter_type: EFilterType.NEAR_YOU,
    filter_vote: '',
    tab: EKeyTabSearch.SERVICE,
  });

  const isServiceTab = getStoresBySearchParamsRequest?.tab === EKeyTabSearch.SERVICE;

  const storesBySearchState = useSelector((state: TRootState) => state.storeReducer.getStoresBySearchResponse);
  const storesBySearchLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetStoresBySearchAction.GET_STORES_BY_SEARCH],
  );

  const servicesBySearchState = useSelector((state: TRootState) => state.serviceReducer.getServicesBySearchResponse);
  const servicesBySearchLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EGetServicesBySearchAction.GET_SERVICES_BY_SEARCH],
  );

  const dataSearchTabs = [
    {
      key: EKeyTabSearch.SERVICE,
      title: 'Dịch Vụ',
      children: <></>,
    },
    {
      key: EKeyTabSearch.STORE,
      title: 'Cửa Hàng',
      children: <></>,
    },
  ];

  const handlePaginateChange = (page: number): void => {
    setGetStoresBySearchParamsRequest({
      ...getStoresBySearchParamsRequest,
      page,
    });
  };

  const getStoresBySearch = useCallback(() => {
    if (getStoresBySearchParamsRequest?.searchKeyword) {
      dispatch(
        (isServiceTab ? getServicesBySearchAction : getStoresBySearchAction).request({
          body: {
            ...getStoresBySearchParamsRequest,
            searchKeyword: undefined,
            [isServiceTab ? `search` : `search_store`]: getStoresBySearchParamsRequest?.searchKeyword,
            filter_vote: getStoresBySearchParamsRequest?.filter_vote || undefined,
            lat: appGeoLoactionState?.latitude,
            lng: appGeoLoactionState?.longitude,
          } as any,
        }),
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, appGeoLoactionState, getStoresBySearchParamsRequest]);

  useEffect(() => {
    getStoresBySearch();
  }, [getStoresBySearch]);

  useEffect(() => {
    if (searchValue || paramsFilterValue) {
      setGetStoresBySearchParamsRequest({
        ...getStoresBySearchParamsRequest,
        page: DEFAULT_PAGE,
        searchKeyword: searchValue || ' ',
        ...(paramsFilterValue || {}),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, paramsFilterValue]);

  return (
    <div className="Search">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ', link: Paths.Home },
          { key: '2', title: 'Tìm kiếm' },
          { key: '3', title: searchValue },
        ]}
      />
      <div className="Search-main" style={{ padding: '4.8rem 0 6.4rem' }}>
        <div className="container">
          <div className="Search-main-wrapper">
            <Row gutter={[24, 24]}>
              {!isTablet && (
                <Col span={24} lg={{ span: 6 }}>
                  <FilterTools
                    paramsRequest={getStoresBySearchParamsRequest}
                    onFilterChange={(dataChanged): void =>
                      setGetStoresBySearchParamsRequest({
                        ...getStoresBySearchParamsRequest,
                        page: DEFAULT_PAGE,
                        ...dataChanged,
                      })
                    }
                  />
                  {/* {isTablet ? (
                    <div className="flex">
                      <Button
                        title="Bộ Lọc"
                        styleType={EButtonStyleType.PRIMARY}
                        iconName={EIconName.Filter}
                        iconColor={EIconColor.WHITE}
                        onClick={(): void => setVisibleFilter(true)}
                      />
                    </div>
                  ) : (
                    <></>
                  )} */}
                </Col>
              )}

              <Col span={24} lg={{ span: 18 }}>
                <div className="Search-tab">
                  <Tabs
                    data={dataSearchTabs}
                    styleType={ETabsStyleType.LINE}
                    onChange={(changedTab): void => {
                      setGetStoresBySearchParamsRequest({
                        ...getStoresBySearchParamsRequest,
                        page: DEFAULT_PAGE,
                        tab: changedTab as any,
                      });
                    }}
                  />
                </div>
                <div className="Search-total flex items-center justify-between">
                  <div className="Search-total-title">
                    Kết quả tìm kiếm <strong>“{searchValue}”</strong>
                  </div>
                  {isServiceTab ? (
                    <div className="Search-total-subtitle">{servicesBySearchState?.paging?.total || 0} kết quả</div>
                  ) : (
                    <div className="Search-total-subtitle">{storesBySearchState?.paging?.total || 0} kết quả</div>
                  )}
                </div>
                <Spin spinning={servicesBySearchLoading || storesBySearchLoading || false}>
                  <Row gutter={isMobile ? [16, 16] : [24, 24]}>
                    {isServiceTab ? (
                      <>
                        {servicesBySearchState?.data.length === 0 ? (
                          <div style={{ flex: 1 }}>
                            <Empty />
                          </div>
                        ) : (
                          servicesBySearchState?.data?.map((item) => (
                            <Col key={item.id} span={12} md={{ span: 8 }}>
                              <ServiceCard
                                border
                                link={Paths.ServiceDetail(String(item.id), item.slug)}
                                subtitle={item?.store?.name}
                                title={item.name}
                                image={item?.banner?.[0]}
                                discountPercent={item.discount_percent}
                                sellingPrice={item.discount_price}
                                retailPrice={item.price}
                                moveTime={item.move_time}
                                distance={item.store_distance}
                                vote={item.vote}
                              />
                            </Col>
                          ))
                        )}
                      </>
                    ) : (
                      <>
                        {storesBySearchState?.data.length === 0 ? (
                          <div style={{ flex: 1 }}>
                            <Empty />
                          </div>
                        ) : (
                          storesBySearchState?.data?.map((item) => (
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
                          ))
                        )}
                      </>
                    )}
                  </Row>
                </Spin>
                <div className="Search-pagination flex justify-center" style={{ marginTop: '2rem' }}>
                  <Pagination
                    page={getStoresBySearchParamsRequest.page || 0}
                    pageSize={getStoresBySearchParamsRequest.limit || 0}
                    total={isServiceTab ? servicesBySearchState?.paging?.total : storesBySearchState?.paging?.total}
                    onChange={handlePaginateChange}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {isTablet && (
        <Drawer
          className="HeaderMobile"
          visible={visibleFilter}
          closeIcon={<Icon name={EIconName.X} color={EIconColor.REGENT_GRAY} />}
          placement="right"
          onClose={(): void => setVisibleFilter(false)}
        >
          <div style={{ marginTop: '3.6rem' }}>
            <FilterTools
              paramsRequest={getStoresBySearchParamsRequest}
              onFilterChange={(dataChanged): void =>
                setGetStoresBySearchParamsRequest({
                  ...getStoresBySearchParamsRequest,
                  page: DEFAULT_PAGE,
                  ...dataChanged,
                })
              }
            />
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default Search;
