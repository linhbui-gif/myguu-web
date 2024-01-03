import React, { useState } from 'react';

import Select, { TSelectOption } from '@/components/Select';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

import { TBranchesProps } from './Branches.types';
import './Branches.scss';

const Branches: React.FC<TBranchesProps> = () => {
  const dataAddress = [
    { value: '1', label: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
    { value: '2', label: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
  ];

  const [currentAddress, setCurrentAddress] = useState<TSelectOption | undefined>(dataAddress[0]);

  return (
    <div className="Branches">
      <h5 className="Infomation-title">Chọn chi nhánh</h5>
      <div className="Branches-select">
        <Select
          value={currentAddress}
          onChange={setCurrentAddress}
          size="large"
          options={dataAddress}
          suffixIcon={EIconName.CaretDown}
          suffixIconColor={EIconColor.TAN_HIDE}
        />
      </div>
      <div className="Branches-map">
        <div className="Branches-map-address flex items-center">
          <Icon name={EIconName.House} color={EIconColor.TAN_HIDE} />
          97-99 Láng Hạ - Đống Đa- Hà Nội
        </div>
        <div className="Branches-map-btn">
          <Button title="Chỉ đường" size="small" styleType={EButtonStyleType.PRIMARY} />
        </div>
        <div className="Branches-map-iframe">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59578.898185656195!2d105.86275766295165!3d21.04544082562173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abebf87e0011%3A0x647af200da508d2b!2sHanoi%20Opera%20House!5e0!3m2!1sen!2s!4v1704033268749!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Branches;
