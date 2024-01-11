export type TDropdownMenuProps = {
  className?: string;
  trigger?: ('click' | 'hover' | 'contextMenu')[];
  options?: TDropdownMenuItem[];
  placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'top' | 'bottom';
  disabled?: boolean;
  overlayClassName?: string;
  onVisibleChange?: (visible: boolean) => void;
  onClickMenuItem?: (data: TDropdownMenuItem) => void;
};

export type TDropdownMenuItem = {
  label: string;
  value: string;
  disabled?: boolean;
  link?: string;
  danger?: boolean;
  onClick?: (data: TDropdownMenuItem) => void;
};
