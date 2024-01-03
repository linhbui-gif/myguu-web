import React from 'react';

import { EIconColor } from './Icon.enums';
import { TIconProps } from './Icon.types';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.3334 5.12173C17.9325 3.72084 16.0701 2.97038 14.0893 3.00925C13.2318 3.02596 12.5123 3.62435 12.3395 4.46438L11.1759 10.1218L3.91827 17.3793C3.29026 18.0074 3.29026 19.0293 3.91827 19.6574L4.8084 20.5475C5.11262 20.8517 5.51714 21.0193 5.94741 21.0193C6.37768 21.0193 6.7822 20.8517 7.08643 20.5475L14.1961 13.4379C14.2069 13.4365 14.2177 13.4349 14.2284 13.4324L20.0227 12.1304C20.844 11.9459 21.429 11.2292 21.4454 10.3877L21.4458 10.3658C21.4845 8.38504 20.7343 6.52265 19.3334 5.12173ZM6.58921 20.0503C6.41779 20.2217 6.18986 20.3161 5.94741 20.3161C5.70496 20.3161 5.47707 20.2217 5.30565 20.0503L5.05964 19.8043L6.38398 18.48C6.52128 18.3427 6.52132 18.1201 6.38398 17.9827C6.24664 17.8455 6.02407 17.8455 5.88677 17.9827L4.56243 19.3071L4.41549 19.1601C4.06159 18.8063 4.06159 18.2304 4.41549 17.8765L8.26794 14.0241L10.4417 16.1978L6.58921 20.0503ZM10.9389 15.7006L8.76519 13.5269L11.4285 10.8637L13.6021 13.0373L10.9389 15.7006ZM20.7429 10.3521L20.7424 10.3739C20.7323 10.8909 20.373 11.3311 19.8686 11.4444L14.2632 12.704L13.9759 12.4168L16.3838 11.3761C16.562 11.299 16.644 11.0921 16.567 10.9139C16.49 10.7357 16.283 10.6536 16.1048 10.7306L13.4411 11.882L13.2648 11.7057L14.6121 10.3584C14.7494 10.2211 14.7494 9.99848 14.6121 9.86117C14.4748 9.72387 14.2522 9.72387 14.1149 9.86117L12.7676 11.2085L12.5988 11.0397L13.7501 8.37593C13.8272 8.19772 13.7452 7.99076 13.5669 7.91375C13.3887 7.83664 13.1817 7.91875 13.1047 8.097L12.064 10.5048L11.8575 10.2983L13.0282 4.60608C13.1344 4.09011 13.5763 3.72257 14.103 3.7123C15.8919 3.67729 17.5718 4.35459 18.8362 5.61898C20.1006 6.88334 20.7778 8.56431 20.7429 10.3521Z"
        fill={color}
      />
      <path
        d="M15.5494 8.92332C15.484 8.85795 15.3936 8.82031 15.3008 8.82031C15.2083 8.82031 15.1176 8.85792 15.0522 8.92332C14.9868 8.98871 14.9492 9.0794 14.9492 9.17189C14.9492 9.26434 14.9868 9.35506 15.0522 9.42046C15.1176 9.48586 15.2083 9.52346 15.3008 9.52346C15.3932 9.52346 15.484 9.48586 15.5494 9.42046C15.6148 9.35506 15.6524 9.26437 15.6524 9.17189C15.6524 9.0794 15.6148 8.98871 15.5494 8.92332Z"
        fill={color}
      />
      <path
        d="M7.2979 17.0689C7.2325 17.0035 7.14181 16.9658 7.04933 16.9658C6.95688 16.9658 6.86615 17.0034 6.80076 17.0689C6.73536 17.1342 6.69775 17.2249 6.69775 17.3174C6.69775 17.4102 6.73536 17.5006 6.80076 17.5663C6.86615 17.6317 6.95684 17.6693 7.04933 17.6693C7.14178 17.6693 7.2325 17.6318 7.2979 17.5663C7.3633 17.5006 7.40091 17.4103 7.40091 17.3174C7.40091 17.2249 7.3633 17.1342 7.2979 17.0689Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
