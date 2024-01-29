import React, { useCallback, useEffect } from 'react';
import { Redirect, Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Profile from '@/layouts/Profile/Profile';
import { getAddressGeocodeAction, getCategoriesAction, getMyProfileAction, uiActions } from '@/redux/actions';
import Helpers from '@/services/helpers';
import { TRootState } from '@/redux/reducers';
import { useModalState } from '@/utils/hooks';
import ModalRequireTurnOnShareLocation from '@/containers/ModalRequireTurnOnShareLocation';

import 'moment/locale/vi';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const atk = Helpers.getAccessToken();

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
    if (myProfileState) getGeoLocation();
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

  return (
    <div className="App">
      <ModalRequireTurnOnShareLocation
        {...modalRequireTurnOnShareLocationState}
        onClose={handleCloseModalRequireTurnOnShareLocation}
        onSubmit={(): void => {
          getGeoLocation();
        }}
      />

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
    </div>
  );
};

export default App;
