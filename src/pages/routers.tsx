import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import Helpers from '@/services/helpers';
import Loading from '@/components/Loading';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): any =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Home = lazy(() => retryLoadComponent(() => import('@/pages/Home')));
const ShopDetail = lazy(() => retryLoadComponent(() => import('@/pages/ShopDetail')));
const ServiceDetail = lazy(() => retryLoadComponent(() => import('@/pages/ServiceDetail')));
const Category = lazy(() => retryLoadComponent(() => import('@/pages/Category')));
const Search = lazy(() => retryLoadComponent(() => import('@/pages/Search')));
const Booking = lazy(() => retryLoadComponent(() => import('@/pages/Booking')));
const MySchedules = lazy(() => retryLoadComponent(() => import('@/pages/MySchedules')));
const ProfileInformation = lazy(() => retryLoadComponent(() => import('@/pages/ProfileInformation')));
const FavoritesShop = lazy(() => retryLoadComponent(() => import('@/pages/FavoritesShop')));
const Vouchers = lazy(() => retryLoadComponent(() => import('@/pages/Vouchers')));
const Notifications = lazy(() => retryLoadComponent(() => import('@/pages/Notifications')));
const MyAddress = lazy(() => retryLoadComponent(() => import('@/pages/MyAddress')));
const Account = lazy(() => retryLoadComponent(() => import('@/pages/Account')));
const MyScheduleDetail = lazy(() => retryLoadComponent(() => import('@/pages/MyScheduleDetail')));
const Services = lazy(() => retryLoadComponent(() => import('@/pages/Services')));
const Shops = lazy(() => retryLoadComponent(() => import('@/pages/Shops')));

export const LayoutPaths = {
  Guest: '/',
  Profile: '/tai-khoan',
  Auth: '/auth',
  Admin: '/admin',
};

export const ModulePaths = {};

export const Paths = {
  Home: '/',
  ShopDetail: (id?: string, slug?: string): string => `/cua-hang/${slug || ':slug'}/${id || ':id'}`,
  ServiceDetail: (id?: string, slug?: string): string => `/dich-vu/${slug || ':slug'}/${id || ':id'}`,
  Category: (id?: string, slug?: string): string => `/danh-muc/${slug || ':slug'}/${id || ':id'}`,
  Search: '/tim-kiem',
  Booking: (storeId?: string): string => `/dat-lich/${storeId || ':storeId'}`,
  MySchedules: '/lich-cua-toi',
  MyScheduleDetail: (id?: string): string => `/lich-cua-toi/${id || ':id'}`,
  ProfileInformation: '/thong-tin',
  FavoritesShop: '/danh-sach-cua-hang-yeu-thich',
  Vouchers: '/vouchers',
  Notifications: '/thong-bao',
  MyAddress: '/danh-sach-dia-chi',
  Account: '/dieu-huong',
  Services: '/tat-ca-dich-vu',
  Shops: '/tat-ca-cua-hang',

  Rest: '*',
};

export const Pages = {
  Home,
  ShopDetail,
  ServiceDetail,
  Category,
  Search,
  Booking,
  MySchedules,
  ProfileInformation,
  FavoritesShop,
  Vouchers,
  Notifications,
  MyAddress,
  Account,
  MyScheduleDetail,
  Services,
  Shops,
};

interface IRouteProps extends RouteComponentProps {
  component: React.FC;
}

export const AuthRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = Helpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense fallback={<Loading />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = Helpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<Loading />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Auth} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Loading />}>
    <Component {...rest} />
  </Suspense>
);
