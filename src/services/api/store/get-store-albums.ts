import { TAlbum } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoreAlbumsPaths = {
  id: string | number;
};
export type TGetStoreAlbumsParams = {
  page: number;
  limit: number;
};

export type TGetStoreAlbumsMaterials = {
  paths?: TGetStoreAlbumsPaths;
  params?: TGetStoreAlbumsParams;
};

export type TGetStoreAlbumsResponse = TCommonResponse & {
  data: TAlbum[];
};

// FUNCTION

export const getStoreAlbums = async ({ paths, params }: TGetStoreAlbumsMaterials): Promise<TGetStoreAlbumsResponse> => {
  const response = await ApiService.get(`/store/${paths?.id}/album`, { params });
  return response?.data;
};
