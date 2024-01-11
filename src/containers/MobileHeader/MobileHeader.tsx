import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import HeaderSearch from '@/containers/Header/HeaderSearch';
import Avatar from '@/components/Avatar';
import ModalAuth, { EModalAuthType } from '@/containers/ModalAuth';
import { useModalState } from '@/utils/hooks';
import { TRootState } from '@/redux/reducers';
import { Paths } from '@/pages/routers';
import ModalOtherShopWarning from '@/containers/ModalOtherShopWarning';

import { TMobileHeaderProps } from './MobileHeader.types.d';
import './MobileHeader.scss';

const MobileHeader: React.FC<TMobileHeaderProps> = () => {
  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;
  const appGeoLoactionState = useSelector((state: TRootState) => state.uiReducer.geoAppLocation);

  const [modalAuthState, handleOpenModalAuth, handleCloseModalAuth] = useModalState();

  return (
    <div className="MobileHeader">
      <div className="container">
        <div className="MobileHeader-wrapper">
          <div className="MobileHeader-header flex items-center justify-between">
            <div className="MobileHeader-header-item">
              <div className="MobileHeader-header-location flex items-center">
                <Icon name={EIconName.LocationFill} color={EIconColor.WHITE} />
                {appGeoLoactionState ? 'Vị Trí Của Bạn' : 'Đang Tìm Kiếm'}
              </div>
              Hà Nội, Việt Nam
            </div>
            <div
              className="MobileHeader-header-item cursor-pointer"
              onClick={(): void => {
                if (myProfileState) {
                  navigate(Paths.Account);
                } else {
                  handleOpenModalAuth({ key: EModalAuthType.SIGN_IN });
                }
              }}
            >
              <Avatar size={32} image={myProfileState?.avatar} />
            </div>
          </div>
          <div className="MobileHeader-search">
            <HeaderSearch />
          </div>
        </div>
      </div>

      <ModalAuth {...modalAuthState} onClose={handleCloseModalAuth} />
      <ModalOtherShopWarning />
    </div>
  );
};

export default MobileHeader;
