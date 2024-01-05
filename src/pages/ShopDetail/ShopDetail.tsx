import React, { useCallback, useEffect } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from '@/components/Tabs';
import AppDownload from '@/containers/AppDownload';
import Breadcrumb from '@/components/Breadcrumb';
import ShopCard from '@/pages/ShopDetail/ShopCard';
import Infomation from '@/pages/ShopDetail/Infomation';
import Services from '@/pages/ShopDetail/Services';
import Benefit from '@/pages/ShopDetail/Benefit';
import Images from '@/pages/ShopDetail/Images';
import Reviews from '@/pages/ShopDetail/Reviews';
import {
  EGetStoreAlbumsAction,
  getServicesByStoreAction,
  getStoreAction,
  getStoreAlbumsAction,
  getStoreVotesAction,
  getVouchersByStoreAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { usePaginationLoadMoreOptionTool } from '@/utils/hooks';
import { DEFAULT_PAGE } from '@/common/constants';

const ShopDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;

  const {
    options: albumsOptions,
    handleLoadMore: handleLoadMoreStoreAlbums,
    loading: getStoreAlbumsLoading,
    state: storeAlbumsState,
    isLoadMore: isShowAlbumsLoadMore,
  } = usePaginationLoadMoreOptionTool({
    actions: getStoreAlbumsAction,
    reducer: 'storeReducer',
    response: 'getStoreAlbumsResponse',
    loadingAction: EGetStoreAlbumsAction.GET_STORE_ALBUMS,
    initialParams: { limit: 6 },
    initialPaths: { id },
  });

  const dataShopDetailTabs = [
    {
      key: 'info',
      title: 'Thông Tin',
      children: (
        <Infomation
          isShowAlbumsLoadMore={isShowAlbumsLoadMore}
          dataAlbums={albumsOptions}
          onLoadMore={handleLoadMoreStoreAlbums}
          loadingAlbums={getStoreAlbumsLoading}
          totalAlbums={storeAlbumsState?.paging?.total}
        />
      ),
    },
    {
      key: 'service',
      title: 'Dịch Vụ',
      children: <Services />,
    },
    {
      key: 'benefit',
      title: 'Ưu Đãi',
      children: <Benefit />,
    },
    {
      key: 'gallery',
      title: 'Hình Ảnh',
      children: (
        <Images
          isShowAlbumsLoadMore={isShowAlbumsLoadMore}
          dataAlbums={albumsOptions}
          onLoadMore={handleLoadMoreStoreAlbums}
          loadingAlbums={getStoreAlbumsLoading}
          totalAlbums={storeAlbumsState?.paging?.total}
        />
      ),
    },
    {
      key: 'review',
      title: 'Đánh Giá',
      children: <Reviews />,
    },
  ];

  const getStore = useCallback(() => {
    if (id) dispatch(getStoreAction.request({ paths: { id } }));
  }, [dispatch, id]);

  useEffect(() => {
    getStore();
  }, [getStore]);

  const getServicesByStore = useCallback(() => {
    if (id) dispatch(getServicesByStoreAction.request({ params: { store_id: id, page: DEFAULT_PAGE, limit: 100 } }));
  }, [dispatch, id]);

  const getVouchersByStore = useCallback(() => {
    if (id) dispatch(getVouchersByStoreAction.request({ paths: { id }, params: { page: DEFAULT_PAGE, limit: 100 } }));
  }, [dispatch, id]);

  const getStoreVotes = useCallback(() => {
    if (id) dispatch(getStoreVotesAction.request({ paths: { id }, params: { page: DEFAULT_PAGE, limit: 100 } }));
  }, [dispatch, id]);

  useEffect(() => {
    getServicesByStore();
  }, [getServicesByStore]);

  useEffect(() => {
    getVouchersByStore();
  }, [getVouchersByStore]);

  useEffect(() => {
    getStoreVotes();
  }, [getStoreVotes]);

  return (
    <div className="ShopDetail">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Cửa hàng' },
          { key: '3', title: storeState?.name },
        ]}
      />
      <ShopCard />

      <div className="ShopDetail-main" style={{ marginBottom: '-3.2rem' }}>
        <div className="ShopDetail-main-wrapper">
          <Tabs data={dataShopDetailTabs} />
        </div>
      </div>

      <AppDownload />
    </div>
  );
};

export default ShopDetail;
