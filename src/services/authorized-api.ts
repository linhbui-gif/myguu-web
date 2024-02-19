import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';

import { EResponseCode } from '@/common/enums';

import Helpers from './helpers';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    APP_CONTEXT: any;
  }
}
const AuthorizedInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  });

  const onRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
    let authBearer = '';
    const isZaloApp = window.APP_CONTEXT;
    if (isZaloApp && isZaloApp === 'zalo-mini-app') {
      authBearer = Helpers.getAccessTokenZaloMiniApp();
    } else {
      authBearer = Helpers.getAccessToken();
    }
    if (authBearer) {
      request.headers.Authorization = `${authBearer}`;
    }

    return request;
  };

  const onResponseSuccess = (response: AxiosResponse): AxiosResponse => response;

  const onResponseError = async (axiosError: AxiosError): Promise<void | AxiosResponse<any>> => {
    const { response } = axiosError;
    const responseStatus = response?.status;
    const originalRequest = axiosError.config;

    if (responseStatus === EResponseCode.UNAUTHORIZED && originalRequest) {
      Helpers.clearTokens();
    }

    return Promise.reject(axiosError);
  };

  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponseSuccess, onResponseError);

  return instance;
};

export default AuthorizedInstance;
