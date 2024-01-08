import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import AddressCard from '@/components/AddressCard';
import ModalAddressForm from '@/pages/MyAddress/ModalAddressForm';
import { useModalState } from '@/utils/hooks';
import { EDeleteAddressAction, deleteAddressAction, getMyAddressesAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TAddress } from '@/common/models';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

import './MyAddress.scss';

const MyAddress: React.FC = () => {
  const dispatch = useDispatch();

  const [modalAddressFormState, handleOpenModalAddressForm, handleCloseModalAddressForm] = useModalState();

  const myAddressState = useSelector((state: TRootState) => state.addressReducer.getMyAddressesResponse)?.data;
  const deleteAddressLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EDeleteAddressAction.DELETE_ADDRESS],
  );

  const handleDeleteAddress = (data: TAddress): void => {
    dispatch(deleteAddressAction.request({ paths: { id: data.id } }, handleDeleteSuccess));
  };

  const handleDeleteSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Xoá địa chỉ thành công !');
    getMyAddresses();
  };

  const getMyAddresses = useCallback(() => {
    dispatch(getMyAddressesAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    getMyAddresses();
  }, [getMyAddresses]);

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
          {myAddressState?.map((item) => {
            return (
              <AddressCard
                key={item.id}
                name={item?.name}
                description={item?.detail}
                disabled={deleteAddressLoading}
                onEdit={handleOpenModalAddressForm}
                onDelete={(): void => {
                  handleDeleteAddress(item);
                }}
              />
            );
          })}
        </div>
      </div>

      <ModalAddressForm {...modalAddressFormState} onClose={handleCloseModalAddressForm} onSuccess={getMyAddresses} />
    </div>
  );
};

export default MyAddress;
