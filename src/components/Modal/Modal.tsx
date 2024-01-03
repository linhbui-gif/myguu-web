import React from 'react';
import { Modal as AntdModal } from 'antd';
import classNames from 'classnames';

import { TModalProps } from '@/components/Modal/Modal.types';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Modal.scss';

const Modal: React.FC<TModalProps> = ({
  visible,
  cancelButton,
  confirmButton,
  centered,
  width,
  wrapClassName,
  className,
  closeable,
  hideFooter,
  children,
  onClose,
  onSubmit,
}) => {
  return (
    <AntdModal
      footer={null}
      title={null}
      closable={closeable}
      visible={visible}
      width={width}
      centered={centered}
      onCancel={onClose}
      wrapClassName={classNames('Modal-wrapper', wrapClassName)}
      className={classNames('Modal', className)}
      closeIcon={<Icon name={EIconName.X} color={EIconColor.GRAY_CHATEAU} />}
    >
      <div className="Modal-body">{children}</div>

      {!hideFooter && (
        <div
          className={classNames('Modal-footer flex justify-center', {
            single: (confirmButton && !cancelButton) || (!confirmButton && cancelButton),
          })}
        >
          {cancelButton && <Button onClick={onClose} styleType={EButtonStyleType.PRIMARY_OUTLINE} {...cancelButton} />}
          {confirmButton && <Button onClick={onSubmit} styleType={EButtonStyleType.PRIMARY} {...confirmButton} />}
        </div>
      )}
    </AntdModal>
  );
};

export default Modal;
