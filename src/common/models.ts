export type TUser = {
  id: number;
  role: number;
  status: number;
  amount_spent: number;
  avatar: string;
  created_at: string;
  email: string;
  gender: unknown;
  introducer: unknown;
  name: string;
  phone: string;
  rank: unknown;
  rank_config: TRank;
  ref: string;
  register_link: string;
  updated_at: string;
  username: string;
};

export type TRank = {
  bronze: TRankValue;
  diamond: TRankValue;
  gold: TRankValue;
  member: TRankValue;
  platinum: TRankValue;
  silver: TRankValue;
};

export type TRankValue = { value: number; percent: number; min: number; max: number };

export type TBanner = {
  action: string;
  data: { store_id: number };
  id: number;
  src: string[];
  type: string;
};

export type TCategory = {
  created_at: string;
  icon: string;
  id: number;
  name: string;
  slug: string;
  updated_at: string;
  services?: TService[];
};

export type TService = {
  avatar: string;
  banner: string[];
  created_at: string;
  description: string;
  discount: number;
  discount_percent: number;
  discount_price: number;
  id: number;
  like_number: number;
  move_time: number;
  name: string;
  order_number: number;
  price: number;
  slug: string;
  status: number;
  store_address: string;
  store_distance: number;
  store_name: string;
  updated_at: string;
  vote: unknown;
  vote_number: number;
  work_time: unknown;
  store?: TStore;
};

export type TStore = {
  address: string;
  avatar: string;
  banner: string;
  created_at: string;
  distance: number;
  district_code: number;
  experience_number: number;
  id: number;
  like_number: number;
  move_time: number;
  name: string;
  order_number: number;
  province_code: number;
  slug: string;
  status: number;
  type: number;
  updated_at: string;
  vote: number;
  vote_number: number;
  ward_code: number;
};
