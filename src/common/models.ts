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
