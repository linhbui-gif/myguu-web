import React from 'react';
import { Col, Row } from 'antd';

import { TGridBannersProps } from './GridBanners.types.d';
import './GridBanners.scss';

const GridBanners: React.FC<TGridBannersProps> = ({ data = [], lg, span }) => {
  return (
    <div className="GridBanners">
      <div className="container">
        <div className="GridBanners-wrapper">
          <Row gutter={[24, 24]}>
            {data.map((item) => (
              <Col key={item.key} span={span} lg={lg}>
                <div className="GridBanners-item">
                  <img src={item.image} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default GridBanners;
