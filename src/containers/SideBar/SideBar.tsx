import React from 'react';
import { useSelector } from 'react-redux';
import { navigate, useLocation } from '@reach/router';
import classNames from 'classnames';

import Avatar from '@/components/Avatar';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { LayoutPaths, Paths } from '@/pages/routers';

import { dataSidebarAccount, dataSidebarSetting } from './SideBar.data';
import { TSideBarProps } from './SideBar.types.d';
import './SideBar.scss';

const SideBar: React.FC<TSideBarProps> = () => {
  const { pathname } = useLocation();

  const myProfileState = useSelector((state: TRootState) => state.userReducer.getMyProfileResponse)?.data;

  const rankOptions = Object.keys(myProfileState?.rank_config || {}).map((key) => {
    const dataRank = ((myProfileState?.rank_config || {}) as any)[key];
    return {
      value: dataRank?.value,
      label: key,
      data: dataRank,
    };
  });

  const menu = (
    <>
      <div className="SideBar-card">
        <div className="SideBar-card-wrapper">
          {dataSidebarAccount.map((item) => (
            <div
              key={item.key}
              className={classNames('SideBar-card-item flex items-center', {
                active: (item?.activePaths as string[])?.includes(pathname),
                disabled: item?.disabled,
              })}
              onClick={(): void => {
                if (item.link && !item.disabled) {
                  navigate(item.link);
                }
              }}
            >
              <div className="SideBar-card-item-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="SideBar-card-subtitle">{item.title}</div>
              <div className="SideBar-card-item-arrow" style={{ marginLeft: 'auto' }}>
                <Icon name={EIconName.AngleRight} color={EIconColor.MINE_SHAFT} strokeWidth={6} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="SideBar-card">
        <div className="SideBar-card-wrapper">
          {dataSidebarSetting.map((item) => (
            <div
              key={item.key}
              className={classNames('SideBar-card-item flex items-center', {
                active: (item?.activePaths as string[])?.includes(pathname),
                disabled: item?.disabled,
              })}
              onClick={(): void => {
                if (item.link && !item.disabled) navigate(item.link);
              }}
            >
              <div className="SideBar-card-item-icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="SideBar-card-subtitle">{item.title}</div>
              <div className="SideBar-card-item-arrow" style={{ marginLeft: 'auto' }}>
                <Icon name={EIconName.AngleRight} color={EIconColor.MINE_SHAFT} strokeWidth={6} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="SideBar">
      <div className="SideBar-card flex items-center">
        <div className="SideBar-card-avatar">
          <Avatar image={myProfileState?.avatar} />
        </div>
        <div className="SideBar-card-info">
          <div className="SideBar-card-title">{myProfileState?.name}</div>
          <div className="SideBar-card-description capitalize">
            Hạng: {rankOptions.find((item) => Number(item.value) === myProfileState?.rank)?.label || 'Chưa có'}
          </div>
        </div>
        <div className="SideBar-card-setting flex items-center" style={{ marginLeft: 'auto', columnGap: '.4rem' }}>
          <Icon
            className="cursor-pointer"
            name={EIconName.Setting}
            color={EIconColor.ALUMINIUM}
            onClick={(): void => {
              navigate(`${LayoutPaths.Profile}${Paths.ProfileInformation}`);
            }}
          />
        </div>
      </div>

      {menu}
    </div>
  );
};

export default SideBar;
