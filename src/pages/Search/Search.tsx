import React, { useCallback, useEffect, useState } from 'react';
import { Col, Drawer, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from '@reach/router';

import Breadcrumb from '@/components/Breadcrumb';
import ServiceCard from '@/components/ServiceCard';
import Pagination from '@/components/Pagination';
import FilterTools, { EFilterType } from '@/containers/FilterTools';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { DEFAULT_PAGE } from '@/common/constants';
import { getStoresBySearchAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TGetStoresBySearchBody } from '@/services/api';
import { scrollToTop } from '@/utils/functions';

import './Search.scss';
import { Paths } from '@/pages/routers';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 575 });
  const location = useLocation();
  const searchValue: string = (location?.state as any)?.search;

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const [getStoresBySearchParamsRequest, setGetStoresBySearchParamsRequest] = useState<TGetStoresBySearchBody>({
    page: DEFAULT_PAGE,
    limit: 9,
    filter_type: EFilterType.NEAR_YOU,
    filter_vote: '',
  });

  const storesBySearchState = useSelector((state: TRootState) => state.storeReducer.getStoresBySearchResponse);

  const handlePaginateChange = (): void => {
    scrollToTop();
    setGetStoresBySearchParamsRequest({
      ...getStoresBySearchParamsRequest,
      page: (getStoresBySearchParamsRequest.page || 0) + 1,
    });
  };

  const getStoresBySearch = useCallback(() => {
    if (getStoresBySearchParamsRequest.search_store) {
      dispatch(
        getStoresBySearchAction.request({
          body: {
            ...getStoresBySearchParamsRequest,
            filter_vote: getStoresBySearchParamsRequest?.filter_vote || undefined,
            lat: appGeoLoactionState?.latitude,
            lng: appGeoLoactionState?.longitude,
          },
        }),
      );
    }
  }, [dispatch, appGeoLoactionState, getStoresBySearchParamsRequest]);

  useEffect(() => {
    getStoresBySearch();
  }, [getStoresBySearch]);

  useEffect(() => {
    if (searchValue) {
      setGetStoresBySearchParamsRequest({
        ...getStoresBySearchParamsRequest,
        page: DEFAULT_PAGE,
        search_store: searchValue,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className="Search">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Tìm kiếm' },
          { key: '3', title: searchValue },
        ]}
      />
      <div className="Search-main" style={{ padding: '4.8rem 0 6.4rem' }}>
        <div className="container">
          <div className="Search-main-wrapper">
            <Row gutter={[24, 24]}>
              <Col span={24} lg={{ span: 6 }}>
                {isTablet ? (
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
                )}
              </Col>
              <Col span={24} lg={{ span: 18 }}>
                <div className="Search-total flex items-center justify-between">
                  <div className="Search-total-title">
                    Kết quả tìm kiếm <strong>“{searchValue}”</strong>
                  </div>
                  <div className="Search-total-subtitle">{storesBySearchState?.paging?.total || 0} kết quả</div>
                </div>
                <Row gutter={isMobile ? [16, 16] : [24, 24]}>
                  {storesBySearchState?.data?.map((item) => (
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
                </Row>

                <div className="Search-pagination flex justify-center" style={{ marginTop: '2rem' }}>
                  <Pagination
                    page={getStoresBySearchParamsRequest.page || 0}
                    pageSize={getStoresBySearchParamsRequest.limit || 0}
                    total={storesBySearchState?.paging?.total}
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
          placement="left"
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
