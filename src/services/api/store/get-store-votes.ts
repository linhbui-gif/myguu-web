import ApiService from '@/services/api';

// TYPES

export type TGetStoreVotesPaths = {
  id: string | number;
};
export type TGetStoreVotesParams = unknown;

export type TGetStoreVotesMaterials = {
  paths?: TGetStoreVotesPaths;
  params?: TGetStoreVotesParams;
};

export type TGetStoreVotesResponse = unknown;

// FUNCTION

export const getStoreVotes = async ({ paths, params }: TGetStoreVotesMaterials): Promise<TGetStoreVotesResponse> => {
  const response = await ApiService.get(`/store/${paths?.id}/vote`, { params });
  return response?.data;
};
