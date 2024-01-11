import { createReducer } from 'deox';

import { TCreateOrderResponse, TGetOrderResponse, TGetOrdersResponse } from '@/services/api/order';
import { createOrderAction, getOrderAction, getOrdersAction } from '@/redux/actions';
import { createOrderUpdateState } from './create-order';
import { getOrderUpdateState } from './get-order';
import { getOrdersUpdateState } from './get-orders';

export type TOrderState = {
  createOrderResponse?: TCreateOrderResponse;
  getOrderResponse?: TGetOrderResponse;
  getOrdersResponse?: TGetOrdersResponse;
};

const initialState: TOrderState = {
  createOrderResponse: undefined,
  getOrderResponse: undefined,
  getOrdersResponse: undefined,
};

const OrderReducer = createReducer(initialState, (handleAction) => [
  handleAction(createOrderAction.success, createOrderUpdateState),
  handleAction(getOrderAction.success, getOrderUpdateState),
  handleAction(getOrdersAction.success, getOrdersUpdateState),
]);

export default OrderReducer;
