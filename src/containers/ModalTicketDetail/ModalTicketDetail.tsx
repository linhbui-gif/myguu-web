import React from 'react';

import Modal from '@/components/Modal';
import ImageTicket from '@/assets/images/image-content-2.png';
import ImageShop from '@/assets/images/image-avatar-shop-detail.png';
import Button, { EButtonStyleType } from '@/components/Button';
import Avatar from '@/components/Avatar';

import { TModalTicketDetailProps } from './ModalTicketDetail.types.d';
import './ModalTicketDetail.scss';

const ModalTicketDetail: React.FC<TModalTicketDetailProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} closeable={false} width={472} className="ModalTicketDetail" onClose={onClose}>
      <div className="ModalTicketDetail-wrapper">
        <div className="ModalTicketDetail-image">
          <img src={ImageTicket} alt="" />
        </div>

        <div className="ModalTicketDetail-ticket">
          <div className="ModalTicketDetail-ticket-btn flex justify-center">
            <Button title="Lấy Mã" styleType={EButtonStyleType.PRIMARY} size="small" />
          </div>
          <div className="ModalTicketDetail-ticket-title">Giảm 50% gội dưỡng sinh</div>
          <div className="ModalTicketDetail-ticket-description">HSD:24-4-2023</div>
          <div className="ModalTicketDetail-ticket-shop flex items-center">
            <Avatar image={ImageShop} />
            Thiên vân spa
          </div>
        </div>

        <div className="ModalTicketDetail-content">
          <h3>Sử dụng mã</h3>
          <p>Thanh toán tại cửa hàng:</p>
          <ol>
            <li>Đặt lịch qua ứng dụng</li>
            <li>Chọn mã ưu đãi trong phần đặt lịch</li>
            <li>Đưa mã cho nhân viên khi thanh toán</li>
          </ol>

          <p>Lưu ý khi sử dụng</p>
          <ul>
            <li>Giảm 50% hóa đơn khi gội đầu dưỡng sinh</li>
            <li>Áp dụng 01 voucher/hóa đơn</li>
            <li>Không áp dụng với các CTKM khác</li>
            <li>Không quy đổi thành tiền mặt hoặc hoàn lại tiền thừa</li>
          </ul>
        </div>

        <div className="ModalTicketDetail-btn flex justify-center">
          <Button title="Sử dụng" styleType={EButtonStyleType.PRIMARY} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalTicketDetail;
