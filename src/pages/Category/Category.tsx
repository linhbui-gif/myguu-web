import React, { useCallback, useEffect, useState } from 'react';
import { Col, Drawer, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import Breadcrumb from '@/components/Breadcrumb';
import ServiceCard from '@/components/ServiceCard';
import Pagination from '@/components/Pagination';
import FilterTools, { EFilterType } from '@/containers/FilterTools';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { TGetStoresByCategoryBody } from '@/services/api';
import { DEFAULT_PAGE } from '@/common/constants';
import { getStoresByCategoryAction } from '@/redux/actions';
import { scrollToTop } from '@/utils/functions';
import { Paths } from '@/pages/routers';

const Category: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 575 });

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const [getStoresByCategoryParamsRequest, setGetStoresByCategoryParamsRequest] = useState<TGetStoresByCategoryBody>({
    page: DEFAULT_PAGE,
    limit: 9,
    category_ids: [Number(id)],
    filter_type: EFilterType.NEAR_YOU,
    filter_vote: '',
  });

  const categoriesState = useSelector((state: TRootState) => state.categoryReducer.getCategoriesResponse)?.data || [];
  const storesByCategoryState = useSelector((state: TRootState) => state.storeReducer.getStoresByCategoryResponse);

  const handlePaginateChange = (): void => {
    scrollToTop();
    setGetStoresByCategoryParamsRequest({
      ...getStoresByCategoryParamsRequest,
      page: (getStoresByCategoryParamsRequest.page || 0) + 1,
    });
  };

  const getStoresByCategory = useCallback(() => {
    dispatch(
      getStoresByCategoryAction.request({
        body: {
          ...getStoresByCategoryParamsRequest,
          filter_vote: getStoresByCategoryParamsRequest?.filter_vote || undefined,
          lat: appGeoLoactionState?.latitude,
          lng: appGeoLoactionState?.longitude,
        },
      }),
    );
  }, [dispatch, appGeoLoactionState, getStoresByCategoryParamsRequest]);

  useEffect(() => {
    getStoresByCategory();
  }, [getStoresByCategory]);

  return (
    <div className="Category">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Danh mục' },
          { key: '3', title: categoriesState?.find((item) => Number(item.id) === Number(id))?.name },
        ]}
      />
      <div className="Category-main" style={{ padding: '4.8rem 0 6.4rem' }}>
        <div className="container">
          <div className="Category-main-wrapper">
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
                    paramsRequest={getStoresByCategoryParamsRequest}
                    onFilterChange={(dataChanged): void =>
                      setGetStoresByCategoryParamsRequest({
                        ...getStoresByCategoryParamsRequest,
                        page: DEFAULT_PAGE,
                        ...dataChanged,
                      })
                    }
                  />
                )}
              </Col>
              <Col span={24} lg={{ span: 18 }}>
                <Row gutter={isMobile ? [16, 16] : [24, 24]}>
                  {storesByCategoryState?.data?.map((item) => (
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

                <div className="Category-pagination flex justify-center" style={{ marginTop: '2rem' }}>
                  <Pagination
                    page={getStoresByCategoryParamsRequest.page || 0}
                    pageSize={getStoresByCategoryParamsRequest.limit || 0}
                    total={storesByCategoryState?.paging?.total}
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
              paramsRequest={getStoresByCategoryParamsRequest}
              onFilterChange={(dataChanged): void =>
                setGetStoresByCategoryParamsRequest({
                  ...getStoresByCategoryParamsRequest,
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

export default Category;
