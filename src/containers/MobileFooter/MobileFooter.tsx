import React from 'react';
import classNames from 'classnames';
import { navigate, useLocation } from '@reach/router';
import { useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import ModalAuth, { EModalAuthType } from '@/containers/ModalAuth';
import { TRootState } from '@/redux/reducers';
import { useModalState } from '@/utils/hooks';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

import { TMobileFooterProps } from './MobileFooter.types.d';
import './MobileFooter.scss';

const MobileFooter: React.FC<TMobileFooterProps> = () => {
  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;
  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const [modalAuthState, handleOpenModalAuth, handleCloseModalAuth] = useModalState();

  const { pathname } = useLocation();

  const dataMobileFooterMenu = [
    { link: Paths.Home, activePaths: [Paths.Home], title: 'Trang Chủ', icon: EIconName.House },
    {
      link: `${LayoutPaths.Profile}${Paths.Notifications}`,
      activePaths: [`${LayoutPaths.Profile}${Paths.Notifications}`],
      title: 'Thông Báo',
      icon: EIconName.Bell,
      auth: true,
    },
    {
      link: Paths.Booking(String(cartState?.[0]?.store?.id)),
      activePaths: [Paths.Booking(String(cartState?.[0]?.store?.id))],
      title: 'Đặt Lịch',
      icon: EIconName.Calendar2,
      auth: true,
      cart: true,
      badge: cartState?.length === 0 ? undefined : cartState?.length,
    },
    {
      link: `${LayoutPaths.Profile}${Paths.FavoritesShop}`,
      activePaths: [`${LayoutPaths.Profile}${Paths.FavoritesShop}`],
      title: 'Yêu thích',
      icon: EIconName.HeartOutline,
      auth: true,
    },
    {
      link: Paths.Account,
      activePaths: [Paths.Account],
      title: 'Tài Khoản',
      icon: EIconName.User,
      auth: true,
    },
  ];

  return (
    <div className="MobileFooter flex items-start justify-around">
      {dataMobileFooterMenu.map((item, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames('MobileFooter-item', {
            active: (item?.activePaths as string[])?.includes(pathname),
          })}
          onClick={(): void => {
            if (item?.auth) {
              if (myProfileState) {
                if (item.cart) {
                  if (cartState?.length === 0) {
                    showNotification(ETypeNotification.ERROR, 'Vui lòng chọn 1 dịch vụ để đặt lịch !');
                  } else if (item.link) {
                    navigate(item.link);
                  }
                } else if (item.link) {
                  navigate(item.link);
                }
              } else {
                handleOpenModalAuth({ key: EModalAuthType.SIGN_IN });
              }
            } else if (item.link) {
              navigate(item.link);
            }
          }}
        >
          {item?.badge && <div className="MobileFooter-item-badge flex items-center justify-center">{item.badge}</div>}

          <div className="MobileFooter-item-icon flex">
            <Icon name={item.icon} color={EIconColor.DOVE_GRAY} />
          </div>
          <div className="MobileFooter-item-label">{item.title}</div>
        </div>
      ))}

      <ModalAuth {...modalAuthState} onClose={handleCloseModalAuth} />
    </div>
  );
};

export default MobileFooter;
