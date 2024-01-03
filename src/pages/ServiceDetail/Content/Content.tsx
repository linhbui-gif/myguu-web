import React from 'react';
import { Col, Row } from 'antd';

import ImageContent1 from '@/assets/images/image-content-1.png';
import ImageContent2 from '@/assets/images/image-content-2.png';
import ImageContent3 from '@/assets/images/image-content-3.png';
import ImageContent4 from '@/assets/images/image-content-4.png';

import { TContentProps } from './Content.types';
import './Content.scss';

const Content: React.FC<TContentProps> = () => {
  return (
    <div className="Content">
      <div className="container">
        <div className="Content-wrapper">
          <p>
            Chỉ từ 900k bao gồm make up, làm tóc, phụ kiện, (đi theo dặm phấn, son, đổi kiểu tóc và hỗ trợ cô dâu thay
            váy cưới + 400k). Bên cạnh đó Ốc Bông còn trang điểm cho mẹ cô dâu, bà xui, khách tiệc 400k/1 người.
          </p>
          <Row gutter={[16, 16]}>
            <Col span={24} md={{ span: 12 }}>
              <img src={ImageContent1} alt="" />
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <img src={ImageContent2} alt="" />
            </Col>
          </Row>
          <p>
            Chỉ từ 900k bao gồm make up, làm tóc, phụ kiện, (đi theo dặm phấn, son, đổi kiểu tóc và hỗ trợ cô dâu thay
            váy cưới + 400k). Bên cạnh đó Ốc Bông còn trang điểm cho mẹ cô dâu, bà xui, khách tiệc 400k/1 người.
          </p>
          <Row gutter={[16, 16]}>
            <Col span={24} md={{ span: 12 }}>
              <img src={ImageContent3} alt="" />
            </Col>
            <Col span={24} md={{ span: 12 }}>
              <img src={ImageContent4} alt="" />
            </Col>
          </Row>
          <p>
            Chỉ từ 900k bao gồm make up, làm tóc, phụ kiện, (đi theo dặm phấn, son, đổi kiểu tóc và hỗ trợ cô dâu thay
            váy cưới + 400k). Bên cạnh đó Ốc Bông còn trang điểm cho mẹ cô dâu, bà xui, khách tiệc 400k/1 người.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
