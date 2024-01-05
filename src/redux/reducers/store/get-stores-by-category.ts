import { TStoreState } from '@/redux/reducers/store';
import { TGetStoresByCategorySuccess } from '@/redux/actions/store';

export const getStoresByCategoryUpdateState = (
  state: TStoreState,
  action: TGetStoresByCategorySuccess,
): TStoreState => ({
  ...state,
  getStoresByCategoryResponse: action.payload.response,
});
