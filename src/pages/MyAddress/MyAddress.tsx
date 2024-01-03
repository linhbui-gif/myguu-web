import React from 'react';

import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressCard from '@/components/AddressCard';
import ModalAddressForm from '@/pages/MyAddress/ModalAddressForm';

import './MyAddress.scss';
import { useModalState } from '@/utils/hooks';

const MyAddress: React.FC = () => {
  const [modalAddressFormState, handleOpenModalAddressForm, handleCloseModalAddressForm] = useModalState();

  return (
    <div className="MyAddress">
      <div className="SideBar-card">
        <div className="MyAddress-card-title flex items-center justify-between">
          Sổ địa chỉ
          <Button
            title="Thêm địa chỉ"
            styleType={EButtonStyleType.PRIMARY}
            iconName={EIconName.Plus}
            iconColor={EIconColor.WHITE}
            onClick={handleOpenModalAddressForm}
          />
        </div>
      </div>

      <div className="SideBar-card">
        <div className="MyAddress-location flex items-center" style={{ marginTop: '-1.6rem' }}>
          <div className="MyAddress-location-icon">
            <Icon name={EIconName.Gps} color={EIconColor.DOVE_GRAY} />
          </div>
          <div className="MyAddress-location-info">
            <div className="MyAddress-location-info-title">Vị trí hiện tại</div>
            <div className="MyAddress-location-info-description">97-99 Láng Hạ, Ba Đình, Hà nội</div>
          </div>
        </div>

        <div className="MyAddress-list">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <AddressCard active={item === 1} key={item} onEdit={handleOpenModalAddressForm} />
          ))}
        </div>
      </div>

      <ModalAddressForm {...modalAddressFormState} onClose={handleCloseModalAddressForm} />
    </div>
  );
};

export default MyAddress;
