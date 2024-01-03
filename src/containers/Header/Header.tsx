import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useMediaQuery } from 'react-responsive';
import { Col, Drawer, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutPaths, Paths } from '@/pages/routers';
import Logo from '@/assets/images/logo.svg';

import DropdownCustom from '@/components/DropdownCustom';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import Avatar from '@/components/Avatar';
import ModalAuth, { EModalAuthType } from '@/containers/ModalAuth';
import { useModalState } from '@/utils/hooks';
import SearchDropdown from '@/containers/Header/SearchDropdown';
import DropdownMenu from '@/components/DropdownMenu';
import { TRootState } from '@/redux/reducers';
import { getMyProfileAction, logoutAction } from '@/redux/actions';
import Helpers from '@/services/helpers';

import { THeaderProps } from './Header.types.d';
import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const dispatch = useDispatch();

  const isTablet = useMediaQuery({ maxWidth: 991 });
  const [modalAuthState, handleOpenModalAuth, handleCloseModalAuth] = useModalState();
  const [visibleSearchDropdown, setVisibleSearchDropdown] = useState<boolean>(false);
  const [visibleMenuMobile, setVisibleMenuMobile] = useState<boolean>(false);

  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;

  const handleSubmit = (): void => {
    setVisibleMenuMobile(false);
  };

  const handleLogout = (): void => {
    dispatch(logoutAction.request({}, handleLogoutSuccess, handleLogoutSuccess));
  };

  const handleLogoutSuccess = (): void => {
    Helpers.clearTokens();
    dispatch(getMyProfileAction.success(undefined));
  };

  const renderSearchDropdown = <SearchDropdown />;

  const renderBranchSelect = (
    <DropdownMenu
      options={[
        { value: '1', label: 'TP.Hà Nội' },
        { value: '2', label: 'TP.Hồ Chí Minh' },
      ]}
    >
      <div className="Header-location flex items-center cursor-pointer">
        <Icon name={EIconName.Location} color={EIconColor.TAN_HIDE} />
        <span>Q.Cầu giấy, TP.Hà Nội</span>
      </div>
    </DropdownMenu>
  );

  const renderHeaderAccount = myProfileState ? (
    <DropdownMenu
      options={[
        { value: '1', label: 'Thông tin cá nhân', link: `${LayoutPaths.Profile}${Paths.ProfileInformation}` },
        { value: '2', label: 'Đăng xuất', danger: true, onClick: handleLogout },
      ]}
    >
      <div className="Header-account flex items-center">
        <div className="Header-account-avatar">
          <Avatar image={myProfileState?.avatar} />
        </div>
        <div className="Header-account-title">
          Xin chào, <strong>{myProfileState?.name}</strong>
        </div>
        <div className="Header-account-arrow">
          <Icon name={EIconName.AngleDown} color={EIconColor.MINE_SHAFT} />
        </div>
      </div>
    </DropdownMenu>
  ) : (
    <div className="Header-account flex items-center">
      <div className="Header-account-avatar">
        <Avatar />
      </div>
      <div className="Header-account-title">
        <span onClick={(): void => handleOpenModalAuth({ key: EModalAuthType.SIGN_IN })}>Đăng Nhập</span>/
        <span onClick={(): void => handleOpenModalAuth({ key: EModalAuthType.SIGN_UP })}>Đăng ký</span>
      </div>
    </div>
  );

  const renderHeaderSearch = (
    <DropdownCustom
      className="Header-search-wrapper"
      visible={visibleSearchDropdown}
      onVisibleChange={setVisibleSearchDropdown}
      overlay={renderSearchDropdown}
      placement="bottomLeft"
    >
      <div className="Header-search flex items-center">
        <div className="Header-search-icon">
          <Icon name={EIconName.Search} color={EIconColor.TAN_HIDE} />
        </div>
        <div className="Header-search-input">
          <Input placeholder="Nhập từ khoá tìm kiếm..." size="small" onEnter={handleSubmit} />
        </div>
        <div className="Header-search-filter">
          <Button
            iconName={EIconName.Filter}
            iconColor={EIconColor.WHITE}
            styleType={EButtonStyleType.PRIMARY}
            size="small"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </DropdownCustom>
  );

  const renderHeaderBooking = (
    <div className="Header-booking">
      <Button
        title="ĐẶT LỊCH"
        styleType={EButtonStyleType.PRIMARY}
        iconName={EIconName.Calendar}
        iconColor={EIconColor.WHITE}
        onClick={(): void => {
          setVisibleMenuMobile(false);
          navigate(Paths.Booking);
        }}
      />
    </div>
  );

  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex items-center">
          <Link to={Paths.Home} className="Header-logo">
            <img src={Logo} alt="" />
          </Link>

          {isTablet && (
            <div className="Header-menu" style={{ marginLeft: 'auto' }}>
              <Button
                iconName={EIconName.Menu}
                iconColor={EIconColor.WHITE}
                styleType={EButtonStyleType.PRIMARY}
                onClick={(): void => setVisibleMenuMobile(true)}
              />
            </div>
          )}

          {!isTablet && (
            <>
              {renderBranchSelect}
              {renderHeaderSearch}
              {renderHeaderBooking}
              {renderHeaderAccount}
            </>
          )}
        </div>
      </div>

      {isTablet && (
        <Drawer
          className="HeaderMobile"
          visible={visibleMenuMobile}
          closeIcon={<Icon name={EIconName.X} color={EIconColor.REGENT_GRAY} />}
          placement="left"
          onClose={(): void => setVisibleMenuMobile(false)}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>{renderHeaderAccount}</Col>
            <Col flex={24}>{renderHeaderSearch}</Col>
            <Col span={24}>{renderBranchSelect}</Col>
            <Col span={24}>{renderHeaderBooking}</Col>
          </Row>
        </Drawer>
      )}

      <ModalAuth {...modalAuthState} onClose={handleCloseModalAuth} />
    </div>
  );
};

export default Header;
