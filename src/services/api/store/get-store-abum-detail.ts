import { TAlbumImage } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetStoreAlbumByIdPaths = {
  id: string | number;
};
export type TGetStoreAlbumByIdParams = {
  page: number;
  limit: number;
};

export type TGetStoreAlbumByIdMaterials = {
  paths?: TGetStoreAlbumByIdPaths;
};

export type TGetStoreAlbumByIdResponse = TCommonResponse & {
  data: TAlbumImage[];
};

// FUNCTION

export const GetStoreAlbumById = async ({
  paths,
}: TGetStoreAlbumByIdMaterials): Promise<TGetStoreAlbumByIdResponse> => {
  const response = await ApiService.get(`/store/album/${paths?.id}/image`);
  return response?.data;
};
