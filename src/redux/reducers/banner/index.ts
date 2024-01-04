import { createReducer } from 'deox';

import { TGetBannersResponse } from '@/services/api/banner';
import { getBannersAction } from '@/redux/actions';
import { getBannersUpdateState } from './get-banners';

export type TBannerState = {
  getBannersResponse?: TGetBannersResponse;
};

const initialState: TBannerState = {
  getBannersResponse: undefined,
};

const BannerReducer = createReducer(initialState, (handleAction) => [
  handleAction(getBannersAction.success, getBannersUpdateState),
]);

export default BannerReducer;
