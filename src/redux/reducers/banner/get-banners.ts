import { TBannerState } from '@/redux/reducers/banner';
import { TGetBannersSuccess } from '@/redux/actions/banner';

export const getBannersUpdateState = (state: TBannerState, action: TGetBannersSuccess): TBannerState => ({
  ...state,
  getBannersResponse: action.payload.response,
});
