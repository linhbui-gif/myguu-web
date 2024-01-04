import { TStoreState } from '@/redux/reducers/store';
import { TGetStoresMakeupAtHomeSuccess } from '@/redux/actions/store';

export const getStoresMakeupAtHomeUpdateState = (
  state: TStoreState,
  action: TGetStoresMakeupAtHomeSuccess,
): TStoreState => ({
  ...state,
  getStoresMakeupAtHomeResponse: action.payload.response,
});
