export type TAddressCardProps = {
  active?: boolean;
  name?: string;
  description?: string;
  disabled?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};
