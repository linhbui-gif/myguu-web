import moment, { Moment } from 'moment';

import { TSelectOption } from '@/components/Select';
import { EFormat } from '@/common/enums';

export const dataBookingTime = (date?: Moment): TSelectOption[] => [
  {
    value: '08:00:00',
    label: '08:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 08:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '09:00:00',
    label: '09:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 09:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '10:00:00',
    label: '10:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 10:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '11:00:00',
    label: '11:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 11:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '12:00:00',
    label: '12:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 12:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '13:00:00',
    label: '13:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 13:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '14:00:00',
    label: '14:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 14:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '15:00:00',
    label: '15:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 15:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '16:00:00',
    label: '16:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 16:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
  {
    value: '17:00:00',
    label: '17:00',
    data: {
      disabled:
        moment(`${date?.format(EFormat['DD-MM-YYYY'])} - 17:00`, EFormat['DD-MM-YYYY - HH:mm'])?.valueOf() <
        moment().valueOf(),
    },
  },
];
