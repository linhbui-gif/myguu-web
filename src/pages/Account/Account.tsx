import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import SideBar from '@/containers/SideBar';
import Button, { EButtonStyleType } from '@/components/Button';
import Helpers from '@/services/helpers';
import { Paths } from '@/pages/routers';
import { logoutAction, getMyProfileAction, ELogoutAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import './Account.scss';

const Account: React.FC = () => {
  const dispatch = useDispatch();

  const logoutLoading = useSelector((state: TRootState) => state.loadingReducer[ELogoutAction.LOGOUT]);

  const handleLogout = (): void => {
    dispatch(logoutAction.request({}, handleLogoutSuccess, handleLogoutSuccess));
  };

  const handleLogoutSuccess = (): void => {
    Helpers.clearTokens();
    dispatch(getMyProfileAction.success(undefined));
    navigate(Paths.Home);
  };

  return (
    <div className="Account">
      <div className="container">
        <div className="Account-wrapper" style={{ paddingBottom: '3.2rem' }}>
          <SideBar />

          <div className="Account-logout flex justify-center">
            <Button
              title="Đăng xuất"
              styleType={EButtonStyleType.PRIMARY_OUTLINE}
              size="large"
              onClick={handleLogout}
              disabled={logoutLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
