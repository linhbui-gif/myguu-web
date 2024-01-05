import { TSelectOption } from '@/components/Select';

export type TInfomationProps = {
  dataAlbums?: TSelectOption[];
  isShowAlbumsLoadMore?: boolean;
  totalAlbums?: number;
  loadingAlbums?: boolean;
  onLoadMore?: () => void;
};
