import { createReducer } from 'deox';

import { TCreateOrderResponse, TGetOrdersResponse } from '@/services/api/order';
import { createOrderAction, getOrdersAction } from '@/redux/actions';
import { createOrderUpdateState } from './create-order';
import { getOrdersUpdateState } from './get-orders';

export type TOrderState = {
  createOrderResponse?: TCreateOrderResponse;
  getOrdersResponse?: TGetOrdersResponse;
};

const initialState: TOrderState = {
  createOrderResponse: undefined,
  getOrdersResponse: undefined,
};

const OrderReducer = createReducer(initialState, (handleAction) => [
  handleAction(createOrderAction.success, createOrderUpdateState),
  handleAction(getOrdersAction.success, getOrdersUpdateState),
]);

export default OrderReducer;
