/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useEffect, useState } from 'react';

import GoogleMapPicker from 'react-google-map-picker';

import { TMapPickerProps } from './MapPicker.types.d';
import './MapPicker.scss';

const MapPicker: React.FC<TMapPickerProps> = ({ value, onChange }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 1000);
  }, []);

  return (
    <div className="MapPicker">
      {isShow && (
        <GoogleMapPicker
          defaultLocation={value}
          zoom={16}
          mapTypeId="roadmap"
          style={{ height: 164 }}
          onChangeLocation={(lat, lng): void => onChange?.({ lat, lng })}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
        />
      )}
    </div>
  );
};

export default MapPicker;
