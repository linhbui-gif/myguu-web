import { EIconName } from '@/components/Icon';
import { EFilterType } from '@/containers/FilterTools/FilterTools.enums';

export const dataFilterTypeOptions = [
  { value: EFilterType.NEAR_YOU, label: 'Gần bạn' },
  { value: EFilterType.PROMINENT, label: 'Phổ biến' },
];

export const dataFilterVoteOptions = [
  { value: '', label: 'Tất cả', data: { iconName: EIconName.StarFill } },
  { value: 5, label: '5', data: { iconName: EIconName.StarFill } },
  { value: 4, label: '4', data: { iconName: EIconName.StarFill } },
  { value: 3, label: '3', data: { iconName: EIconName.StarFill } },
  { value: 2, label: '2', data: { iconName: EIconName.StarFill } },
  { value: 1, label: '1', data: { iconName: EIconName.StarFill } },
];
