import IconSidebar1 from '@/assets/icons/icon-sidebar-1.svg';
import IconSidebar2 from '@/assets/icons/icon-sidebar-2.svg';
import IconSidebar3 from '@/assets/icons/icon-sidebar-3.svg';
import IconSidebar4 from '@/assets/icons/icon-sidebar-4.svg';
import IconSidebar5 from '@/assets/icons/icon-sidebar-5.svg';
import IconSidebar6 from '@/assets/icons/icon-sidebar-6.svg';
import IconSidebar7 from '@/assets/icons/icon-sidebar-7.svg';
import IconSidebar8 from '@/assets/icons/icon-sidebar-8.svg';
import IconSidebar9 from '@/assets/icons/icon-sidebar-9.svg';
import IconSidebar10 from '@/assets/icons/icon-sidebar-10.svg';
import { LayoutPaths, Paths } from '@/pages/routers';

export const dataSidebarAccount = [
  {
    key: '1',
    title: 'Lịch Hẹn Của Tôi',
    icon: IconSidebar1,
    link: `${LayoutPaths.Profile}${Paths.MySchedules}`,
    activePaths: [`${LayoutPaths.Profile}${Paths.MySchedules}`],
  },
  {
    key: '2',
    title: 'Điểm Gu',
    icon: IconSidebar2,
    disabled: true,
  },
  {
    key: '3',
    title: 'Yêu Thích',
    icon: IconSidebar3,
    link: `${LayoutPaths.Profile}${Paths.FavoritesShop}`,
    activePaths: [`${LayoutPaths.Profile}${Paths.FavoritesShop}`],
  },
  {
    key: '4',
    title: 'Ví Voucher',
    icon: IconSidebar4,
    link: `${LayoutPaths.Profile}${Paths.Vouchers}`,
    activePaths: [`${LayoutPaths.Profile}${Paths.Vouchers}`],
  },
  // {
  //   key: '5',
  //   title: 'Sổ Địa Chỉ',
  //   icon: IconSidebar5,
  //   link: `${LayoutPaths.Profile}${Paths.MyAddress}`,
  //   activePaths: [`${LayoutPaths.Profile}${Paths.MyAddress}`],
  // },
  {
    key: '6',
    title: 'Đổi Mật Khẩu',
    icon: IconSidebar6,
    disabled: true,
  },
];

export const dataSidebarSetting = [
  {
    key: '7',
    title: 'Quy Chế Hoạt Động',
    icon: IconSidebar7,
    disabled: true,
    link: ``,
    activePaths: [],
  },
  {
    key: '8',
    title: 'Chính Sách Bảo Mật',
    icon: IconSidebar8,
    disabled: false,
    link: `${Paths.Policy}`,
    activePaths: [`${LayoutPaths.Policy}${Paths.Policy}`],
  },
  {
    key: '9',
    title: 'Yêu Cầu Xoá Tài Khoản',
    icon: IconSidebar9,
    disabled: true,
    link: ``,
    activePaths: [],
  },
  {
    key: '10',
    title: 'Liên Hệ Admin',
    icon: IconSidebar10,
    disabled: true,
    link: ``,
    activePaths: [],
  },
];
