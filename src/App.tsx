import React, { useCallback, useEffect } from 'react';
import { Redirect, Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Profile from '@/layouts/Profile/Profile';
import {
  getAddressGeocodeAction,
  getCategoriesAction,
  getMyProfileAction,
  getNotificationUnreadCountAction,
  uiActions,
} from '@/redux/actions';
import Helpers from '@/services/helpers';
import { TRootState } from '@/redux/reducers';
import { useModalState } from '@/utils/hooks';
import ModalRequireTurnOnShareLocation from '@/containers/ModalRequireTurnOnShareLocation';

import 'moment/locale/vi';
import { isZaloApp } from './utils/functions';
import { ZALO_MINI_APP_BASE_PATH } from './common/constants';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [atk, setAtk] = React.useState('');

  const [
    modalRequireTurnOnShareLocationState,
    handleOpenModalRequireTurnOnShareLocation,
    handleCloseModalRequireTurnOnShareLocation,
  ] = useModalState();

  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse);
  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const getGeoLocation = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position): void => {
          const { latitude, longitude } = position.coords;
          dispatch(uiActions.setGeoLocationApp({ latitude, longitude }));
        },
        (err): void => {
          handleOpenModalRequireTurnOnShareLocation(err);
        },
      );
    } else {
      handleOpenModalRequireTurnOnShareLocation();
    }
  };

  const getCategories = useCallback(() => {
    dispatch(getCategoriesAction.request({}));
  }, [dispatch]);

  const getNotificationUnreadCount = useCallback(() => {
    dispatch(getNotificationUnreadCountAction.request({}));
  }, [dispatch]);

  const getAddressGeocode = useCallback(() => {
    if (appGeoLoactionState && myProfileState) {
      dispatch(
        getAddressGeocodeAction.request({
          params: { lat: appGeoLoactionState?.latitude, lng: appGeoLoactionState?.longitude },
        }),
      );
    }
  }, [dispatch, appGeoLoactionState, myProfileState]);

  useEffect(() => {
    if (isZaloApp()) {
      Helpers.getAccessTokenZaloMiniApp().then((token) => {
        setAtk(token);
      });
    } else {
      setAtk(Helpers.getAccessToken());
    }
  }, []);

  useEffect(() => {
    if (myProfileState) {
      getGeoLocation();
      getNotificationUnreadCount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myProfileState]);

  useEffect(() => {
    if (atk && !myProfileState) {
      dispatch(getMyProfileAction.request({}));
    }
  }, [dispatch, myProfileState, atk]);

  useEffect(() => {
    getAddressGeocode();
  }, [getAddressGeocode]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const renderRouter = (): any => {
    if (isZaloApp()) {
      return (
        <Router primary={false} basepath={ZALO_MINI_APP_BASE_PATH}>
          <Guest path={LayoutPaths.Guest}>
            <PublicRoute path={Paths.Home} component={Pages.Home} />
            <PublicRoute path={Paths.ShopDetail()} component={Pages.ShopDetail} />
            <PublicRoute path={Paths.ServiceDetail()} component={Pages.ServiceDetail} />
            <PublicRoute path={Paths.Category()} component={Pages.Category} />
            <PublicRoute path={Paths.Search} component={Pages.Search} />
            <PublicRoute path={Paths.Services} component={Pages.Services} />
            <PublicRoute path={Paths.Shops} component={Pages.Shops} />
            <ProtectedRoute path={Paths.Booking()} component={Pages.Booking} />
            <ProtectedRoute path={Paths.Account} component={Pages.Account} />
            <PublicRoute path={Paths.Policy} component={Pages.Policy} />

            <Redirect noThrow from={Paths.Rest} to={`${ZALO_MINI_APP_BASE_PATH}${LayoutPaths.Guest}${Paths.Home}`} />
          </Guest>

          <Profile path={LayoutPaths.Profile}>
            <ProtectedRoute path={Paths.MySchedules} component={Pages.MySchedules} />
            <ProtectedRoute path={Paths.MyScheduleDetail()} component={Pages.MyScheduleDetail} />
            <ProtectedRoute path={Paths.ProfileInformation} component={Pages.ProfileInformation} />
            <ProtectedRoute path={Paths.FavoritesShop} component={Pages.FavoritesShop} />
            <ProtectedRoute path={Paths.Vouchers} component={Pages.Vouchers} />
            <ProtectedRoute path={Paths.Notifications} component={Pages.Notifications} />
            <ProtectedRoute path={Paths.MyAddress} component={Pages.MyAddress} />

            <Redirect noThrow from={Paths.Rest} to={`${ZALO_MINI_APP_BASE_PATH}${LayoutPaths.Guest}${Paths.Home}`} />
          </Profile>
        </Router>
      );
    }
    return (
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.Home} component={Pages.Home} />
          <PublicRoute path={Paths.ShopDetail()} component={Pages.ShopDetail} />
          <PublicRoute path={Paths.ServiceDetail()} component={Pages.ServiceDetail} />
          <PublicRoute path={Paths.Category()} component={Pages.Category} />
          <PublicRoute path={Paths.Search} component={Pages.Search} />
          <PublicRoute path={Paths.Services} component={Pages.Services} />
          <PublicRoute path={Paths.Shops} component={Pages.Shops} />
          <ProtectedRoute path={Paths.Booking()} component={Pages.Booking} />
          <ProtectedRoute path={Paths.Account} component={Pages.Account} />
          <PublicRoute path={Paths.Policy} component={Pages.Policy} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Profile path={LayoutPaths.Profile}>
          <ProtectedRoute path={Paths.MySchedules} component={Pages.MySchedules} />
          <ProtectedRoute path={Paths.MyScheduleDetail()} component={Pages.MyScheduleDetail} />
          <ProtectedRoute path={Paths.ProfileInformation} component={Pages.ProfileInformation} />
          <ProtectedRoute path={Paths.FavoritesShop} component={Pages.FavoritesShop} />
          <ProtectedRoute path={Paths.Vouchers} component={Pages.Vouchers} />
          <ProtectedRoute path={Paths.Notifications} component={Pages.Notifications} />
          <ProtectedRoute path={Paths.MyAddress} component={Pages.MyAddress} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Profile>
      </Router>
    );
  };
  return (
    <div className="App">
      <ModalRequireTurnOnShareLocation
        {...modalRequireTurnOnShareLocationState}
        onClose={handleCloseModalRequireTurnOnShareLocation}
        onSubmit={(): void => {
          getGeoLocation();
        }}
      />

      {renderRouter()}
    </div>
  );
};

export default App;
