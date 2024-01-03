import { ColSize } from 'antd/lib/grid';

export type TGridBannersProps = {
  data?: TGridBanner[];
  span?: number;
  lg?: ColSize;
};

export type TGridBanner = {
  key: string;
  image: any;
};
