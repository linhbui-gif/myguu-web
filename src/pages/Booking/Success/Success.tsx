import React from 'react';
import { Col, Row } from 'antd';

import Icon, { EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import { LayoutPaths, Paths } from '@/pages/routers';

import { TSuccessProps } from './Success.types';
import './Success.scss';

const Success: React.FC<TSuccessProps> = () => {
  return (
    <div className="Success">
      <div className="Success-icon">
        <Icon name={EIconName.CheckCircle} />
      </div>
      <div className="Success-title">Đặt lịch thành công</div>
      <div className="Success-description">
        Bạn đã đặt lịch cuộc hẹn với Minh Vân Makeup thành công.
        <br />
        Cửa hàng sẽ sớm liên hệ lại!
      </div>
      <div className="Success-btn">
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Button title="Trang chủ" styleType={EButtonStyleType.PRIMARY_OUTLINE} link={Paths.Home} />
          </Col>
          <Col span={12}>
            <Button
              title="Xem lịch hẹn"
              styleType={EButtonStyleType.PRIMARY}
              link={`${LayoutPaths.Profile}${Paths.MySchedules}`}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Success;
