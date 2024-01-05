import { TSelectOption } from '@/components/Select';

export type TImagesProps = {
  dataAlbums?: TSelectOption[];
  isShowAlbumsLoadMore?: boolean;
  totalAlbums?: number;
  loadingAlbums?: boolean;
  onLoadMore?: () => void;
};
