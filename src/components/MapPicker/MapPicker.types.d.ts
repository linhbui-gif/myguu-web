export type TMapPickerProps = {
  value?: TMapPickerData;
  onChange?: (data: TMapPickerData) => void;
};

export type TMapPickerData = { lat: number; lng: number };
