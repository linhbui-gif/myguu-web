/* eslint-disable no-useless-escape */
import { SyntheticEvent } from 'react';
import { notification } from 'antd';
import { Rule } from 'antd/lib/form';
import moment, { Moment } from 'moment';

import { EFormat, ETypeNotification } from '@/common/enums';
import { REGEX } from '@/common/constants';
import ApiService from '@/services/api';
import env from '@/env';

export const removeAccents = (str: string): string => {
  let strConverted = str;
  if (strConverted) {
    strConverted = strConverted.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    strConverted = strConverted.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    strConverted = strConverted.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    strConverted = strConverted.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    strConverted = strConverted.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    strConverted = strConverted.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    strConverted = strConverted.replace(/đ/g, 'd');
    strConverted = strConverted.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    strConverted = strConverted.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    strConverted = strConverted.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    strConverted = strConverted.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    strConverted = strConverted.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    strConverted = strConverted.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    strConverted = strConverted.replace(/Đ/g, 'D');

    strConverted = strConverted.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    strConverted = strConverted.replace(/\u02C6|\u0306|\u031B/g, '');
    // Remove extra spaces
    strConverted = strConverted.replace(/ + /g, ' ');
    strConverted = strConverted.trim();
    // Remove punctuations
    strConverted = strConverted.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' ',
    );
    return strConverted;
  }

  return '';
};

export const showNotification = (type: ETypeNotification, description: string): void => {
  const options = {
    message: '',
    description,
    className: 'Notification',
  };

  switch (type) {
    case ETypeNotification.SUCCESS:
      notification.success(options);
      break;
    case ETypeNotification.WARNING:
      notification.warning(options);
      break;
    case ETypeNotification.ERROR:
      notification.error(options);
      break;
    case ETypeNotification.INFO:
      notification.info(options);
      break;
    default:
      notification.open(options);
  }
};

export const searchString = (target: string | string[], searchValue: string): boolean => {
  const searchKey = searchValue.toLowerCase();
  const searchTarget = target instanceof Array ? target.map((str) => str.toLowerCase()) : target.toLowerCase();
  const searchResult =
    searchTarget instanceof Array
      ? !!searchTarget.filter((str) => removeAccents(str).includes(removeAccents(searchKey))).length
      : removeAccents(searchTarget).includes(removeAccents(searchKey));
  return searchResult;
};

export const getTotalPage = (totalItem: number, pageSize: number): number => {
  return Math.ceil(totalItem / pageSize);
};

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};

export const validationRules = {
  required: (message?: string): Rule => ({
    required: true,
    message: message || 'Vui lòng nhập thông tin trường này !',
  }),
  min: (min: number, message?: string): Rule => ({
    validator: (rule: any, value: number): Promise<void> => {
      if (typeof value !== 'number' || value >= min) return Promise.resolve();
      return Promise.reject(message || `Vui lòng nhập số lớn hơn hoặc bằng ${formatCurrency({ amount: min })} !`);
    },
  }),
  max: (max: number, message?: string): Rule => ({
    validator: (rule: any, value: number): Promise<void> => {
      if (typeof value !== 'number' || value <= max) return Promise.resolve();
      return Promise.reject(message || `Vui lòng nhập số nhỏ hơn hoặc bằng ${formatCurrency({ amount: max })} !`);
    },
  }),
  minLength: (length = 2, message?: string): Rule => ({
    min: length,
    message: message || `Vui lòng nhập nhiều hoặc bằng ${length} ký tự !`,
  }),
  maxLength: (length = 10, message?: string): Rule => ({
    max: length,
    message: message || `Vui lòng nhập ít hoặc bằng ${length} ký tự !`,
  }),
  email: (message?: string): Rule => ({
    type: 'email',
    message: message || 'Vui lòng nhập email hợp lệ !',
  }),
  noSpecialKey: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || !REGEX.onlySpecialKey.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng không nhập ký tự đặc biệt !');
    },
  }),
  onlyAlphabetic: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || REGEX.alphabetic.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphabetic characters are entered !');
    },
  }),
  onlyNumeric: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || REGEX.numeric.test(value)) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only numeric characters are entered !');
    },
  }),
  onlyAlphanumerial: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || REGEX.alphanumerial.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng chỉ nhập các ký tự là chữ cái hoặc số !');
    },
  }),
  domain: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || REGEX.domain.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng nhập tên miền hợp lệ !');
    },
  }),
  url: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || REGEX.url.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng nhập đường dẫn liên kết hợp lệ !');
    },
  }),
  confirmPassword: (confirmPasswordValue: string, message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || value === confirmPasswordValue) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng nhập chính xác mật khẩu bên trên !');
    },
  }),
  // phoneNumberVietnam: (message?: string): Rule => ({
  //   validator: (rule: any, value: string): Promise<void> => {
  //     if (!value || REGEX.phoneNumberVietnam.test(value)) return Promise.resolve();
  //     return Promise.reject(message || 'Vui lòng nhập số điện thoại hợp lệ !');
  //   },
  // }),
  // fileImages: (size = MAX_FILE_IMAGE_SIZE, message?: string): Rule => ({
  //   validator: (rule: any, value: File): Promise<void> => {
  //     const isValidExt = ['image/png', 'image/jpeg', 'image/jpg'].includes(value?.type);
  //     const isValidSize = value?.size <= size;

  //     if (!value || !(value instanceof File) || (isValidExt && isValidSize)) return Promise.resolve();
  //     return Promise.reject(message || 'Vui lòng chọn ảnh có định dạng .png, .jpeg hoặc .jpg và kích thước <= 5MB !');
  //   },
  // }),
};

export const formatAbbreviationsName = (value: string): string => {
  const arrayString = value.trim().split(' ');
  const onlyOneWord = arrayString.length === 1;

  if (onlyOneWord) {
    const firstLetter = arrayString[0].trim().charAt(0);
    return `${firstLetter}`.toUpperCase();
  }

  const firstLastWordFirstLetter = arrayString[arrayString.length - 2].trim().charAt(0);
  const secondLastWordFirstLetter = arrayString[arrayString.length - 1].trim().charAt(0);

  return `${firstLastWordFirstLetter}${secondLastWordFirstLetter}`.toUpperCase();
};

export const formatISODateToDateTime = (time: string, format?: string): string => {
  return moment(time).format(format || EFormat['DD/MM/YYYY - HH:mm']);
};

export const formatCurrency = (config: {
  amount: number | string;
  uppercaseUnit?: boolean;
  showSuffix?: boolean;
}): string => {
  const separateMoney = Intl.NumberFormat('vi-VN').format(Number(config.amount));
  const unit = config.uppercaseUnit ? 'Đ' : 'đ';
  return `${separateMoney} ${config.showSuffix ? unit : ''}`;
};

export const copyText = (text: string): void => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const handleErrorImageUrl = (e: SyntheticEvent<HTMLImageElement, Event>): void => {
  const { currentTarget } = e;
  currentTarget.onerror = null; // prevents looping
  currentTarget.src = 'YOUR URL IMAGE ERROR';
};

export const getQueryParam = (param: string): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};

export const urlSafe = (text: string): string => {
  const url = text
    .replace(/[^a-zA-Z0-9- ]/g, '') // remove invalid characters
    .replace(/\s\s+/g, ' ') // trim whitespace
    .replace(/ /g, '-') // replace space with -
    .toLowerCase();
  return url;
};

export const truncateStringByCharaters = (content: string, maxLength: number): string => {
  const contentLength = content.length;
  return `${content.slice(0, contentLength > maxLength ? maxLength : contentLength)}${
    contentLength > maxLength ? '...' : ''
  }`;
};

export const truncateStringByWords = (content: string, maxWords: number): string => {
  const contentSplited = content.split(' ');
  if (maxWords >= contentSplited.length) {
    return content;
  }
  const contentSplitedOptimized = contentSplited.filter((_, index) => index < maxWords);
  const contentTruncated = contentSplitedOptimized.join(' ');
  return `${contentTruncated}...`;
};

export const createImageByFileBlob = (file: File | Blob): string => {
  const imageBlob = new Blob([file]);
  return URL.createObjectURL(imageBlob);
};

export const parseObjectToFormData = (data: { [key: string]: any }): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'undefined') return;
    formData.append(key, data[key]);
  });
  return formData;
};

export const getArrayFrom0To = (numb: number): number[] =>
  Array(numb)
    .fill('')
    .map((_, i) => i);

export const isObject = (object: Record<string, unknown> | any): boolean => {
  return object != null && typeof object === 'object';
};

export const deepEqualObj = (
  object1: Record<string, unknown> | any,
  object2: Record<string, unknown> | any,
): boolean => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqualObj(val1 as Record<string, unknown>, val2 as Record<string, unknown>)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};

export const getPages = (pages: number[], numberOfPages: number, value: number): number[] => {
  const firstPages = pages.filter((_, i) => i < numberOfPages);
  const lastPages = pages.filter((_, i) => i > pages.length - numberOfPages - 1);
  const numberOfPagesAroundASide = (numberOfPages - 1) / 2;
  const pagesAtHead = pages.filter((_, i) => i < numberOfPagesAroundASide);
  const pagesAtTail = pages.filter((_, i) => i > pages.length - numberOfPagesAroundASide - 1);
  if (pagesAtHead.includes(value)) return firstPages;
  if (pagesAtTail.includes(value)) return lastPages;

  const pagesAtLeftSide = Array(numberOfPagesAroundASide)
    .fill('')
    .map((_, i) => value - (i + 1))
    .reverse();
  const pagesAtRightSide = Array(numberOfPagesAroundASide)
    .fill('')
    .map((_, i) => value + (i + 1));
  return [...pagesAtLeftSide, value, ...pagesAtRightSide];
};

export const splitArrayPerChunk = (inputArray: Array<any>, perChunk: number): Array<any> => {
  const result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
};

export const groupDataByField = (inputArray: any[], keyGroup: string): Array<{ key: string; children: any[] }> => {
  const groupsArray: { key: string; children: any[] }[] = Object.values(
    inputArray.reduce((r: any, e: any) => {
      const { [keyGroup]: group } = e;
      // eslint-disable-next-line no-param-reassign
      if (!r[group]) r[group] = { key: group, children: [e] };
      else r[group].children.push(e);
      return r;
    }, {}),
  );

  return groupsArray;
};

export const formatNumberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getRangeMomentBetweenTwoDate = (
  startDate: string | number,
  endDate: string | number,
  type = 'days',
): Moment[] => {
  const fromDate = moment(startDate);
  const toDate = moment(endDate);
  const diff = toDate.diff(fromDate, type as any);
  const range = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= diff; i++) {
    range.push(moment(startDate).add(i, type as any));
  }
  return range;
};

export const uploadSingleFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await ApiService.post(`${env.api.baseUrl.service}/user/upload-file`, formData);

  return response?.data?.data?.download_link;
};
