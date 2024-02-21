import cookie from 'react-cookies';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setStorage, getStorage, removeStorage } from 'zmp-sdk/apis';
import env from '@/env';
import { TSelectOption } from '@/components/Select';
import { TService } from '@/common/models';

const COOKIE_DOMAIN = env.cookie.domain;
const COOKIE_ACCESS_TOKEN = `atk`;
const COOKIE_REFRESH_TOKEN = `rtk`;
const LOCAL_STORAGE_SEARCH_HISTORY = `searchHistories`;
const LOCAL_STORAGE_CART = `cart`;
// const MAXIMUM_EXPIRES_TIME = 2147483647;

const cookieSetting = {
  path: '/',
  domain: COOKIE_DOMAIN,
  // secure: true,
  // httpOnly: true,
  // expires: MAXIMUM_EXPIRES_TIME,
};

const setCookie = (name: string, value: string): void => cookie.save(name, value, cookieSetting);

const getCookie = (name: string): string => cookie.load(name);

const removeCookie = (name: string): void => cookie.remove(name, cookieSetting);

class Helpers {
  getRefreshToken = (): string => getCookie(COOKIE_REFRESH_TOKEN);

  storeRefreshToken = (refreshToken: string): void => setCookie(COOKIE_REFRESH_TOKEN, refreshToken);

  getAccessToken = (): string => getCookie(COOKIE_ACCESS_TOKEN);

  storeAccessToken = (accessToken: string): void => setCookie(COOKIE_ACCESS_TOKEN, accessToken);

  storeAccessTokenZaloApp = (accessToken: string): void => {
    setStorage({
      data: {
        atk: accessToken,
      },
      success: (data) => {
        // xử lý khi gọi api thành công
        const { errorKeys } = data;
      },
      fail: (error: any) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      },
    });
  };

  getAccessTokenZaloMiniApp = async (): Promise<string> => {
    try {
      const { atk } = await getStorage({
        keys: ['atk'],
      });
      return atk;
    } catch (error) {
      console.log(error);
      return '';
    }
  };

  getSearchHistories = (): TSelectOption[] =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEARCH_HISTORY) || `[]`) || [];

  storeSearchHistories = (data: TSelectOption[]): void => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_HISTORY, JSON.stringify(data));
  };

  getCart = (): TService[] => JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART) || `[]`) || [];

  storeCart = (data: TService[]): void => {
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(data));
  };

  clearTokens = (): void => {
    removeCookie(COOKIE_REFRESH_TOKEN);
    removeCookie(COOKIE_ACCESS_TOKEN);
  };

  clearTokensZaloApp = (): void => {
    removeStorage({ keys: 'atk' as any })
      .then((res: any) => {})
      .catch((error: any) => {});
  };
}

const instance = new Helpers();
export default instance;
