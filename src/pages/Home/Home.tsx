import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import Banner from '@/containers/Banner';
import BookingServices from '@/containers/BookingServices';
import CategoryCards from '@/containers/CategoryCards';
import { EIconColor, EIconName } from '@/components/Icon';
import AppDownload from '@/containers/AppDownload';
import {
  getBannersAction,
  getServicesDealHotAction,
  getServicesProposeForYouAction,
  getStoresMakeupAtHomeAction,
  getStoresNearByAction,
  getStoresProminentPlaceAction,
} from '@/redux/actions';
import { EBannerScreen, EBannerType } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import { TGetStoresNearByParams, TGetStoresProminentPlaceParams } from '@/services/api';
import { EServicesType } from '@/pages/Services';
import { EShopsType } from '@/pages/Shops';
import VoucherMobile from '@/containers/VoucherMobile';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const categoriesState = useSelector((state: TRootState) => state.categoryReducer.getCategoriesResponse)?.data || [];
  const categoriesOptions = categoriesState?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse);

  const bannersState = useSelector((state: TRootState) => state.bannerReducer.getBannersResponse)?.data;
  const overviewBanners = bannersState?.find((banner) => banner.type === EBannerType.OVERVIEW)?.src || [];
  const prominentPlaceBanners = bannersState?.find((banner) => banner.type === EBannerType.PROMINENT_PLACE)?.src || [];

  const servicesDealHotState = useSelector((state: TRootState) => state.serviceReducer.getServicesDealHotResponse);
  const servicesProposeForYouState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesProposeForYouResponse,
  );

  const storesNearByState = useSelector((state: TRootState) => state.storeReducer.getStoresNearByResponse);
  const storesProminentPlaceState = useSelector(
    (state: TRootState) => state.storeReducer.getStoresProminentPlaceResponse,
  );
  const storesMakeupAtHomeState = useSelector((state: TRootState) => state.storeReducer.getStoresMakeupAtHomeResponse);

  const [getStoresNearByParamsRequest, setGetStoresNearByParamsRequest] = useState<TGetStoresNearByParams>({});
  const [getStoresProminentPlaceParamsRequest, setGetStoresProminentPlaceParamsRequest] =
    useState<TGetStoresProminentPlaceParams>({});
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const getBanners = useCallback(() => {
    dispatch(getBannersAction.request({ params: { screen: EBannerScreen.HOME } }));
  }, [dispatch]);

  const getServicesDealHot = useCallback(() => {
    dispatch(
      getServicesDealHotAction.request({
        params: {
          lat: appGeoLoactionState?.latitude,
          lng: appGeoLoactionState?.longitude,
        },
      }),
    );
  }, [dispatch, appGeoLoactionState]);

  const getStoresNearBy = useCallback(() => {
    if (getStoresNearByParamsRequest?.category_id) {
      dispatch(
        getStoresNearByAction.request({
          params: {
            lat: appGeoLoactionState?.latitude,
            lng: appGeoLoactionState?.longitude,
            category_id: getStoresNearByParamsRequest?.category_id,
          },
        }),
      );
    }
  }, [dispatch, appGeoLoactionState, getStoresNearByParamsRequest]);

  const getStoresProminentPlace = useCallback(() => {
    if (getStoresProminentPlaceParamsRequest?.category_id) {
      dispatch(
        getStoresProminentPlaceAction.request({
          params: {
            lat: appGeoLoactionState?.latitude,
            lng: appGeoLoactionState?.longitude,
            category_id: getStoresProminentPlaceParamsRequest?.category_id,
          },
        }),
      );
    }
  }, [dispatch, appGeoLoactionState, getStoresProminentPlaceParamsRequest]);

  const getStoresMakeupAtHome = useCallback(() => {
    dispatch(
      getStoresMakeupAtHomeAction.request({
        params: {
          lat: appGeoLoactionState?.latitude,
          lng: appGeoLoactionState?.longitude,
        },
      }),
    );
  }, [dispatch, appGeoLoactionState]);

  const getServicesProposeForYou = useCallback(() => {
    if (myProfileState) dispatch(getServicesProposeForYouAction.request({}));
  }, [dispatch, myProfileState]);

  useEffect(() => {
    if (categoriesState) {
      setGetStoresNearByParamsRequest({ ...getStoresNearByParamsRequest, category_id: categoriesOptions?.[0]?.value });
      setGetStoresProminentPlaceParamsRequest({
        ...getStoresProminentPlaceParamsRequest,
        category_id: categoriesOptions?.[0]?.value,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesState]);

  useEffect(() => {
    getStoresNearBy();
  }, [getStoresNearBy]);

  useEffect(() => {
    getStoresProminentPlace();
  }, [getStoresProminentPlace]);

  useEffect(() => {
    getStoresMakeupAtHome();
  }, [getStoresMakeupAtHome]);

  useEffect(() => {
    getServicesDealHot();
  }, [getServicesDealHot]);

  useEffect(() => {
    getServicesProposeForYou();
  }, [getServicesProposeForYou]);

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  return (
    <div className="Home">
      <Banner data={overviewBanners} />
      <BookingServices />
      {/* {isTablet && myProfileState ? <VoucherMobile /> : ''} */}
      <CategoryCards
        title="Deal Hot"
        primaryBackground
        headerIcon={EIconName.Lightning}
        headerIconColor={EIconColor.WHITE}
        moreLink={
          (servicesDealHotState?.paging?.pageCount || 0) > 1
            ? `${Paths.Services}?type=${EServicesType.DEAL_HOT}`
            : undefined
        }
        data={servicesDealHotState?.data?.map((item) => ({
          link: Paths.ServiceDetail(String(item.id), item.slug),
          border: true,
          subtitle: item.store_name,
          title: item.name,
          image: item?.banner?.[0],
          discountPercent: item.discount_percent,
          sellingPrice: item.discount_price,
          retailPrice: item.price,
          moveTime: item.move_time,
          distance: item.store_distance,
          vote: item.vote,
        }))}
      />
      <CategoryCards
        title="Cửa hàng gần bạn"
        valueTagsFilter={categoriesOptions.find((option) => option.value === getStoresNearByParamsRequest?.category_id)}
        onTagsFilterChange={(option): void =>
          setGetStoresNearByParamsRequest({ ...getStoresNearByParamsRequest, category_id: Number(option.value) })
        }
        tagsFilter={categoriesOptions}
        moreLink={`${Paths.Shops}?type=${EShopsType.NEAR_YOU}&category_id=${getStoresNearByParamsRequest?.category_id}`}
        data={storesNearByState?.data?.map((item) => ({
          link: Paths.ShopDetail(String(item.id), item.slug),
          title: item.name,
          image: item?.avatar,
          address: item?.address,
          moveTime: item.move_time,
          distance: item.distance,
          vote: item.vote,
        }))}
      />
      <CategoryCards
        title="Đề xuất cho bạn"
        moreLink={
          (servicesProposeForYouState?.paging?.pageCount || 0) > 1
            ? `${Paths.Services}?type=${EServicesType.PROPOSE_FOR_YOU}`
            : undefined
        }
        data={servicesProposeForYouState?.data?.map((item) => ({
          border: true,
          link: Paths.ServiceDetail(String(item.id), item.slug),
          subtitle: item.store_name,
          title: item.name,
          image: item?.banner?.[0],
          discountPercent: item.discount_percent,
          sellingPrice: item.discount_price,
          retailPrice: item.price,
          moveTime: item.move_time,
          distance: item.store_distance,
          vote: item.vote,
        }))}
      />
      <CategoryCards
        title="Make-up tại nhà"
        moreLink={
          (storesMakeupAtHomeState?.paging?.pageCount || 0) > 1
            ? `${Paths.Shops}?type=${EShopsType.MAKEUP_AT_HOME}`
            : undefined
        }
        data={storesMakeupAtHomeState?.data?.map((item) => ({
          link: Paths.ShopDetail(String(item.id), item.slug),
          title: item.name,
          image: item?.avatar,
          address: item?.address,
          moveTime: item.move_time,
          distance: item.distance,
          vote: item.vote,
        }))}
      />
      <CategoryCards
        isGridList
        title="Địa điểm nổi bật"
        gridBanners={{
          data: prominentPlaceBanners?.map((item, index) => ({ key: String(index), image: item })),
          span: 24,
        }}
        valueTagsFilter={categoriesOptions.find(
          (option) => option.value === getStoresProminentPlaceParamsRequest?.category_id,
        )}
        onTagsFilterChange={(option): void =>
          setGetStoresProminentPlaceParamsRequest({
            ...getStoresProminentPlaceParamsRequest,
            category_id: Number(option.value),
          })
        }
        tagsFilter={categoriesOptions}
        moreLink={
          (storesProminentPlaceState?.paging?.pageCount || 0) > 1
            ? `${Paths.Shops}?type=${EShopsType.PROMINENT_PLACE}&category_id=${getStoresProminentPlaceParamsRequest?.category_id}`
            : undefined
        }
        data={storesProminentPlaceState?.data?.map((item) => ({
          link: Paths.ShopDetail(String(item.id), item.slug),
          border: true,
          vertical: true,
          title: item.name,
          image: item?.avatar,
          address: item?.address,
          moveTime: item.move_time,
          distance: item.distance,
          vote: item.vote,
        }))}
      />
      <AppDownload />
    </div>
  );
};

export default Home;
