import React from 'react';
import { useSelector } from 'react-redux';

import Branches from '@/pages/ShopDetail/Infomation/Branches';
import TimeWorking from '@/pages/ShopDetail/Infomation/TimeWorking/TimeWorking';
import Members from '@/pages/ShopDetail/Infomation/Members';
import Gallery from '@/pages/ShopDetail/Infomation/Gallery/Gallery';
import { TRootState } from '@/redux/reducers';

import { TInfomationProps } from './Infomation.types';
import './Infomation.scss';

const Infomation: React.FC<TInfomationProps> = ({
  dataAlbums,
  onLoadMore,
  loadingAlbums,
  isShowAlbumsLoadMore,
  totalAlbums,
}) => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;

  return (
    <div className="Infomation">
      <div className="container">
        {storeState?.description && (
          <p className="Infomation-description" style={{ marginBottom: '3.2rem' }}>
            {storeState?.description}
          </p>
        )}

        <Branches />

        <TimeWorking />

        <Members />

        <Gallery
          data={dataAlbums}
          onLoadMore={onLoadMore}
          isShowLoadMore={isShowAlbumsLoadMore}
          total={totalAlbums}
          loading={loadingAlbums}
        />
      </div>
    </div>
  );
};

export default Infomation;
