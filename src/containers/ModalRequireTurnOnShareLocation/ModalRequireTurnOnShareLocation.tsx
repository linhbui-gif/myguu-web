import React from 'react';

import Modal from '@/components/Modal';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

import { TModalRequireTurnOnShareLocationProps } from './ModalRequireTurnOnShareLocation.types.d';
import './ModalRequireTurnOnShareLocation.scss';

const ModalRequireTurnOnShareLocation: React.FC<TModalRequireTurnOnShareLocationProps> = ({
  visible,
  data,
  onClose,
  onSubmit,
}) => {
  const isUserDeniedGeoLocation = data?.code === 1;

  return (
    <Modal visible={visible} className="ModalRequireTurnOnShareLocation" onClose={onClose} hideFooter closeable={false}>
      <div className="ModalRequireTurnOnShareLocation-wrapper">
        <div className="ModalRequireTurnOnShareLocation-icon">
          <Icon name={EIconName.LocationFill} color={EIconColor.PRIMARY} />
        </div>
        <div className="ModalRequireTurnOnShareLocation-title">Yêu cầu chia sẻ vị trí</div>
        <div className="ModalRequireTurnOnShareLocation-description">
          Hệ thống yêu cầu trình duyệt của bạn chia sẻ vị trí để tiếp tục. Thao tác này giúp cho trải nghiệm tìm kiếm
          dịch vụ của bạn được tốt hơn !
        </div>
        {isUserDeniedGeoLocation ? (
          <></>
        ) : (
          <div className="ModalRequireTurnOnShareLocation-btn flex justify-center">
            <Button title="Bật chia sẻ Vị trí" size="large" styleType={EButtonStyleType.PRIMARY} onClick={onSubmit} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalRequireTurnOnShareLocation;
