import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Breadcrumb from '@/components/Breadcrumb';
import { getQueryParam } from '@/utils/functions';
import { EServicesType } from '@/pages/Services/Services.enums';
import { DEFAULT_PAGE } from '@/common/constants';
import { getServicesDealHotAction, getServicesProposeForYouAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import ServiceCard from '@/components/ServiceCard';
import { Paths } from '@/pages/routers';
import { TService } from '@/common/models';
import Pagination from '@/components/Pagination';

import './Services.scss';

const Services: React.FC = () => {
  const dispatch = useDispatch();
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const type = getQueryParam('type');

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const servicesDealHotState = useSelector((state: TRootState) => state.serviceReducer.getServicesDealHotResponse);
  const servicesProposeForYouState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesProposeForYouResponse,
  );

  const [getParamsRequest, setGetParamsRequest] = useState<any>({
    page: DEFAULT_PAGE,
    limit: 8 * 5,
    lat: undefined,
    lng: undefined,
  });

  const handlePaginateChange = (page: number): void => {
    setGetParamsRequest({
      ...getParamsRequest,
      page,
    });
  };

  const renderTitle = (): string => {
    switch (type) {
      case EServicesType.DEAL_HOT:
        return 'Deal Hot';
      case EServicesType.PROPOSE_FOR_YOU:
        return 'Đề Xuất Cho Bạn';
      default:
        return '';
    }
  };

  const renderDataState = (): any => {
    switch (type) {
      case EServicesType.DEAL_HOT:
        return servicesDealHotState;

      case EServicesType.PROPOSE_FOR_YOU:
        return servicesProposeForYouState;

      default:
        return undefined;
    }
  };

  const getData = useCallback(() => {
    switch (type) {
      case EServicesType.DEAL_HOT: {
        dispatch(
          getServicesDealHotAction.request({
            params: getParamsRequest,
          }),
        );
        break;
      }
      case EServicesType.PROPOSE_FOR_YOU: {
        dispatch(
          getServicesProposeForYouAction.request({
            params: getParamsRequest,
          }),
        );
        break;
      }
      default:
        break;
    }
  }, [dispatch, getParamsRequest, type]);

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
    <div className="Services">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ', link: Paths.Home },
          { key: '2', title: 'Dịch vụ' },
          { key: '3', title: renderTitle() },
        ]}
      />
      <div className="Services-header">{renderTitle()}</div>
      <div className="Services-main" style={{ padding: '4.8rem 0 6.4rem' }}>
        <div className="container">
          <div className="Services-main-wrapper">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Row gutter={isTablet ? [16, 16] : [24, 24]}>
                  {renderDataState()?.data?.map((item: TService) => (
                    <Col key={item.id} span={12} lg={{ span: 6 }}>
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
                  ))}
                </Row>

                <div className="Services-pagination flex justify-center" style={{ marginTop: '2rem' }}>
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

export default Services;
