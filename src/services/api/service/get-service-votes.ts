import { TVote } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetServiceVotesParams = {
  page: number;
  limit: number;
};

export type TGetServiceVotesPaths = {
  id: string | number;
};

export type TGetServiceVotesMaterials = {
  paths?: TGetServiceVotesPaths;
  params?: TGetServiceVotesParams;
};

export type TGetServiceVotesResponse = TCommonResponse & {
  data: TVote[];
};

// FUNCTION

export const getServiceVotes = async ({
  paths,
  params,
}: TGetServiceVotesMaterials): Promise<TGetServiceVotesResponse> => {
  const response = await ApiService.get(`/service/${paths?.id}/vote`, { params });
  return response?.data;
};
