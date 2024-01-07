import { all, takeLatest } from 'redux-saga/effects';

import { createOrderAction, getOrdersAction } from '@/redux/actions';

import { createOrderSaga } from './create-order';
import { getOrdersSaga } from './get-orders';

export default function* root(): Generator {
  yield all([
    takeLatest(createOrderAction.request.type, createOrderSaga),
    takeLatest(getOrdersAction.request.type, getOrdersSaga),
  ]);
}
