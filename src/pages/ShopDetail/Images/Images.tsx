import React from 'react';
import { useSelector } from 'react-redux';

import CollapseCards from '@/containers/CollapseCards';
import Gallery from '@/pages/ShopDetail/Infomation/Gallery';
import { TRootState } from '@/redux/reducers';

import { TImagesProps } from './Images.types';
import './Images.scss';

const Images: React.FC<TImagesProps> = ({
  dataAlbums,
  onLoadMore,
  isShowAlbumsLoadMore,
  totalAlbums,
  loadingAlbums,
}) => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const servicesByStoreState = useSelector(
    (state: TRootState) => state.serviceReducer.getServicesByStoreResponse,
  )?.data;

  return (
    <div className="Images">
      <div className="container">
        <Gallery
          data={dataAlbums}
          onLoadMore={onLoadMore}
          isShowLoadMore={isShowAlbumsLoadMore}
          total={totalAlbums}
          loading={loadingAlbums}
        />
      </div>

      {servicesByStoreState?.map((category, categoryIndex) => {
        const isFirstItem = categoryIndex === 0;

        return (
          <CollapseCards
            style={isFirstItem ? { marginTop: '3.2rem' } : undefined}
            herotitle={isFirstItem ? 'Dịch vụ liên quan' : undefined}
            title={category?.name}
            data={category?.services?.map((item) => ({
              serviceData: { ...item, store: storeState },
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
    </div>
  );
};

export default Images;
