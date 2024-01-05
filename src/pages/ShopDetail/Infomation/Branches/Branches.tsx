import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Select, { TSelectOption } from '@/components/Select';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';

import { TBranchesProps } from './Branches.types';
import './Branches.scss';

const Branches: React.FC<TBranchesProps> = () => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;

  const dataAddressOptions =
    storeState?.branches?.map((item) => ({
      value: item.id,
      label: item.name,
      data: item,
    })) || [];

  const isEmpty = dataAddressOptions.length === 0;

  const [currentAddress, setCurrentAddress] = useState<TSelectOption>();

  useEffect(() => {
    if (storeState) setCurrentAddress(dataAddressOptions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeState]);

  return isEmpty ? (
    <></>
  ) : (
    <div className="Branches">
      <h5 className="Infomation-title">Chọn chi nhánh</h5>
      <div className="Branches-select">
        <Select
          value={currentAddress}
          onChange={setCurrentAddress}
          size="large"
          options={dataAddressOptions}
          suffixIcon={EIconName.CaretDown}
          suffixIconColor={EIconColor.TAN_HIDE}
        />
      </div>
      <div className="Branches-map">
        <div className="Branches-map-address flex items-center">
          <Icon name={EIconName.House} color={EIconColor.TAN_HIDE} />
          {currentAddress?.label}
        </div>
        {/* <div className="Branches-map-btn">
          <Button title="Chỉ đường" size="small" styleType={EButtonStyleType.PRIMARY} />
        </div> */}
        {currentAddress?.data?.lat && currentAddress?.data?.lng && (
          <div className="Branches-map-iframe">
            <iframe
              title="map"
              src={`https://maps.google.com/maps?q=${currentAddress?.data?.lat}, ${currentAddress?.data?.lng}&z=15&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Branches;
