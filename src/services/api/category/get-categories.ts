import { TCategory } from '@/common/models';
import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetCategoriesParams = unknown;

export type TGetCategoriesMaterials = {
  params?: TGetCategoriesParams;
};

export type TGetCategoriesResponse = TCommonResponse & {
  data: TCategory[];
};

// FUNCTION

export const getCategories = async ({ params }: TGetCategoriesMaterials): Promise<TGetCategoriesResponse> => {
  const response = await ApiService.get(`/categories`, { params });
  return response?.data;
};
