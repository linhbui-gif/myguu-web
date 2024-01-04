import { createReducer } from 'deox';

import { TGetCategoriesResponse } from '@/services/api/category';
import { getCategoriesAction } from '@/redux/actions';
import { getCategoriesUpdateState } from './get-categories';

export type TCategoryState = {
  getCategoriesResponse?: TGetCategoriesResponse;
};

const initialState: TCategoryState = {
  getCategoriesResponse: undefined,
};

const CategoryReducer = createReducer(initialState, (handleAction) => [
  handleAction(getCategoriesAction.success, getCategoriesUpdateState),
]);

export default CategoryReducer;
