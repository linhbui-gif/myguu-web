import { EOrderProcess, EOrderStatus, EVoucherType } from '@/common/enums';
import { EIconColor } from '@/components/Icon';

/* eslint-disable no-useless-escape */
export const REGEX = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i,
  domain: /^[a-zA-Z0-9](?:[a-zA-Z0-9-.]*[a-zA-Z0-9])?$/i,
  alphabetic: /^[a-z\s]+$/i,
  alphanumerial: /^[a-z0-9\s]+$/i,
  numeric: /^\d+$/i,
  onlySpecialKey: /[$&+,:;=?@#|'<>.^*()%`~_!\-"\]\[\\}{'/]/i,
  phoneNumberVietnam: /[\w\W]{1,10}/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i,
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const dataVoucherTypeOptions = [
  { value: EVoucherType.APP, label: 'Voucher Sàn' },
  { value: EVoucherType.STORE, label: 'Voucher Shop' },
  { value: EVoucherType.OTHER, label: 'Voucher Đổi Thưởng' },
];

export const dataOrderStatusOptions = [
  { value: EOrderStatus.SCHEDULE, label: 'Lịch Hẹn' },
  { value: EOrderStatus.IN_COMMING, label: 'Sắp Tới' },
  { value: EOrderStatus.PENDING, label: 'Đang chờ nhận' },
  { value: EOrderStatus.COMPLETE, label: 'Đã Hoàn Thành' },
  { value: EOrderStatus.CANCELED, label: 'Đã Huỷ' },
];

export const dataOrderProcessOptions = [
  { value: EOrderProcess.PENDING, label: 'Đang Chờ Nhận', data: { color: EIconColor.PRIMARY } },
  { value: EOrderProcess.CONFIRMED, label: 'Đã Nhận', data: { color: EIconColor.HAVELOCK_BLUE } },
  { value: EOrderProcess.COMPLETE, label: 'Hoàn Thành', data: { color: EIconColor.MOUNTAIN_MEADOW } },
  { value: EOrderProcess.CANCEL, label: 'Đã Huỷ', data: { color: EIconColor.POMEGRANATE } },
];

export const ZALO_MINI_APP_BASE_PATH = '/zapps/1057838639345963674';
