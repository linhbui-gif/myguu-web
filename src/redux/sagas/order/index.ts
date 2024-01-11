import { all, takeLatest } from 'redux-saga/effects';

import { createOrderAction, getOrderAction, getOrdersAction } from '@/redux/actions';

import { createOrderSaga } from './create-order';
import { getOrderSaga } from './get-order';
import { getOrdersSaga } from './get-orders';

export default function* root(): Generator {
  yield all([
    takeLatest(createOrderAction.request.type, createOrderSaga),
    takeLatest(getOrderAction.request.type, getOrderSaga),
    takeLatest(getOrdersAction.request.type, getOrdersSaga),
  ]);
}
