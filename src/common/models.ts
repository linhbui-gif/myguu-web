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
  rank: number;
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
  vote: number;
  vote_number: number;
  work_time: unknown;
  store?: TStore;
  quantity?: number;
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
  description: string;
  ward_code: number;
  experts: TExpert[];
  start_time_week: string;
  start_time_weekend: string;
  end_time_week: string;
  end_time_weekend: string;
  branches: TBranch[];
};

export type TExpert = {
  avatar: string;
  id: number;
  name: string;
  role: string;
  slug: string;
};

export type TBranch = {
  address: string;
  created_at: string;
  district_code: number;
  id: number;
  lat: number;
  lng: number;
  location: { x: number; y: number };
  name: string;
  phone: string;
  province_code: number;
  slug: string;
  store_id: number;
  type: number;
  updated_at: string;
  ward_code: number;
};

export type TAlbum = {
  banner: string;
  created_at: string;
  id: number;
  image_number: number;
  name: string;
  slug: string;
  updated_at: string;
};

export type TVoucher = {
  avatar: string;
  banner: string;
  code: string;
  created_at: string;
  description: string;
  discount_money: number;
  end_date: string;
  exchange_gu: number;
  id: number;
  name: string;
  order_money_min: number;
  saved: boolean;
  slug: string;
  start_date: string;
  store: TStore;
  store_id: number;
  title: string;
  updated_at: string;
  used: number;
  used_limit: number;
};

export type TVote = {
  comment: string;
  created_at: string;
  feedback: unknown;
  id: number;
  images: string[];
  order: TOrder;
  order_services: TOrderService[];
  star: number;
  updated_at: string;
  user: TUser;
};

export type TOrderService = {
  avatar: string;
  banner: string[];
  id: number;
  price: number;
  quantity: number;
  service_id: number;
  name: string;
  slug: string;
  price_discount: number;
  service: TService;
};

export type TProvince = {
  code: number;
  lat: string;
  lng: string;
  name: string;
};

export type TDistrict = {
  code: number;
  lat: string;
  lng: string;
  name: string;
  type: number;
};

export type TOrder = {
  branch: TBranch;
  cancel_reason: string;
  created_at: string;
  date: string;
  exchange_discount: number;
  floor_discount: number;
  id: number;
  name: string;
  note: string;
  number_of_bookings: number;
  order_services: TOrderService[];
  order_users: TOrderUser[];
  process: string;
  qr_code: string;
  rank_discount: number;
  remind: number;
  remind_hour: number;
  slug: string;
  status: number;
  time: string;
  total_money: number;
  total_money_discount: number;
  updated_at: string;
  voucher_discount: number;
};

export type TOrderUser = {
  customer_address: string;
  customer_name: string;
  customer_phone: string;
  id: number;
  user_id: number;
};

export type TAddress = {
  created_at: string;
  detail: string;
  id: number;
  lat: number;
  lng: number;
  location: { x: number; y: number };
  name: string;
  reminiscent_name: unknown;
  slug: string;
  type: unknown;
  updated_at: string;
  user_id: number;
};

export type TAddressGeoCode = {
  address: string;
  address_components: {
    long_name: string;
    short_name: string;
  }[];
  compound: { district: string; commune: string; province: string };
  formatted_address: string;
  geometry: { location: { lat: number; lng: number }; boundary: null };
  name: string;
  place_id: string;
  plus_code: { compound_code: string; global_code: string };
  reference: string;
  types: [];
};
