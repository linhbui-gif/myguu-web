import React, { useEffect } from 'react';
import { Redirect, Router } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Profile from '@/layouts/Profile/Profile';
import { getMyProfileAction, uiActions } from '@/redux/actions';
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

  useEffect(() => {
    getGeoLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (atk && !myProfileState) {
      dispatch(getMyProfileAction.request({}));
    }
  }, [dispatch, myProfileState, atk]);

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
          <PublicRoute path={Paths.Booking} component={Pages.Booking} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Guest>

        <Profile path={LayoutPaths.Profile}>
          <PublicRoute path={Paths.MySchedules} component={Pages.MySchedules} />
          <PublicRoute path={Paths.ProfileInformation} component={Pages.ProfileInformation} />
          <PublicRoute path={Paths.FavoritesShop} component={Pages.FavoritesShop} />
          <PublicRoute path={Paths.Vouchers} component={Pages.Vouchers} />
          <PublicRoute path={Paths.Notifications} component={Pages.Notifications} />
          <PublicRoute path={Paths.MyAddress} component={Pages.MyAddress} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
        </Profile>
      </Router>
    </div>
  );
};

export default App;
