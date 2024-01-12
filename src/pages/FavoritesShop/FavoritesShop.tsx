import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Tags from '@/components/Tags';
import ShopAddressCard from '@/components/ShopAddressCard';

import './FavoritesShop.scss';
import { DEFAULT_PAGE } from '@/common/constants';
import { getMyFavouriteServicesAction, getMyFavouriteStoresAction } from '@/redux/actions';
import { dataFavouriteTypeOptions } from '@/pages/FavoritesShop/FavoritesShop.data';
import { TSelectOption } from '@/components/Select';
import { EFavoritesType } from '@/pages/FavoritesShop/FavoritesShop.enums';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';

const FavoritesShop: React.FC = () => {
  const dispatch = useDispatch();

  const [currentFavoriteType, setCurrentFavoriteType] = useState<TSelectOption>(dataFavouriteTypeOptions[0]);

  const myFavouriteServicesState = useSelector(
    (state: TRootState) => state.userReducer.getMyFavouriteServicesResponse,
  )?.data;
  const myFavouriteStoresState = useSelector(
    (state: TRootState) => state.userReducer.getMyFavouriteStoresResponse,
  )?.data;

  const getMyFavouriteServices = useCallback(() => {
    if (currentFavoriteType?.value === EFavoritesType.SERVICE)
      dispatch(getMyFavouriteServicesAction.request({ params: { page: DEFAULT_PAGE, limit: 100 } }));
  }, [dispatch, currentFavoriteType]);

  const getMyFavouriteStores = useCallback(() => {
    if (currentFavoriteType?.value === EFavoritesType.STORE)
      dispatch(getMyFavouriteStoresAction.request({ params: { page: DEFAULT_PAGE, limit: 100 } }));
  }, [dispatch, currentFavoriteType]);

  useEffect(() => {
    getMyFavouriteServices();
  }, [getMyFavouriteServices]);

  useEffect(() => {
    getMyFavouriteStores();
  }, [getMyFavouriteStores]);

  return (
    <div className="FavoritesShop">
      <div className="SideBar-card">
        <div className="FavoritesShop-card-title" style={{ marginBottom: '1.6rem' }}>
          Danh sách yêu thích
        </div>
        <div className="FavoritesShop-status">
          <Tags
            value={currentFavoriteType}
            size="middle"
            options={dataFavouriteTypeOptions}
            onChange={setCurrentFavoriteType}
          />
        </div>
      </div>

      {currentFavoriteType?.value === EFavoritesType.STORE && (
        <div className="FavoritesShop-main">
          <Row gutter={[16, 16]}>
            {myFavouriteStoresState?.map((item) => (
              <Col key={item.id} span={24} lg={{ span: 12 }}>
                <ShopAddressCard
                  image={item?.avatar}
                  title={item?.name}
                  address={item?.address}
                  distance={item?.distance}
                  voteNumber={item?.vote_number}
                  vote={item?.vote}
                  moveTime={item?.move_time}
                  favorited
                  link={Paths.ShopDetail(String(item.id), item.slug)}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {currentFavoriteType?.value === EFavoritesType.SERVICE && (
        <div className="FavoritesShop-main">
          <Row gutter={[16, 16]}>
            {myFavouriteServicesState?.map((item) => (
              <Col key={item.id} span={24} lg={{ span: 12 }}>
                <ShopAddressCard
                  image={item?.avatar}
                  title={item?.name}
                  retailPrice={item?.price}
                  sellingPrice={item?.discount_price}
                  favorited
                  link={Paths.ServiceDetail(String(item.id), item.slug)}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default FavoritesShop;
