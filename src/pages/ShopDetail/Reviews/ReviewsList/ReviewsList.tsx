import React from 'react';
import { Col, Progress, Row } from 'antd';

import Icon, { EIconName } from '@/components/Icon';
import Rate from '@/components/Rate';
import ReviewComment from '@/components/ReviewComment';

import { TReviewsListProps } from './ReviewsList.types';
import './ReviewsList.scss';

const ReviewsList: React.FC<TReviewsListProps> = ({ style }) => {
  return (
    <div className="ReviewsList" style={style}>
      <div className="ReviewsList-overview">
        <div className="ReviewsList-overview-wrapper flex items-center justify-between">
          <div className="ReviewsList-overview-item">
            <div className="ReviewsList-overview-title">5.0</div>
            <Rate allowHalf disabled value={5} />
            <div className="ReviewsList-overview-description">(100 lượt đánh giá)</div>
          </div>
          <div className="ReviewsList-overview-item">
            <div className="ReviewsList-overview-process flex items-center">
              <strong className="ReviewsList-overview-process-text">1</strong>
              <Icon name={EIconName.StarFill} />
              <Progress percent={50} showInfo={false} />
              <span className="ReviewsList-overview-process-text">50</span>
            </div>
            <div className="ReviewsList-overview-process flex items-center">
              <strong className="ReviewsList-overview-process-text">2</strong>
              <Icon name={EIconName.StarFill} />
              <Progress percent={80} showInfo={false} />
              <span className="ReviewsList-overview-process-text">80</span>
            </div>
            <div className="ReviewsList-overview-process flex items-center">
              <strong className="ReviewsList-overview-process-text">3</strong>
              <Icon name={EIconName.StarFill} />
              <Progress percent={40} showInfo={false} />
              <span className="ReviewsList-overview-process-text">40</span>
            </div>
            <div className="ReviewsList-overview-process flex items-center">
              <strong className="ReviewsList-overview-process-text">4</strong>
              <Icon name={EIconName.StarFill} />
              <Progress percent={100} showInfo={false} />
              <span className="ReviewsList-overview-process-text">100</span>
            </div>
            <div className="ReviewsList-overview-process flex items-center">
              <strong className="ReviewsList-overview-process-text">5</strong>
              <Icon name={EIconName.StarFill} />
              <Progress percent={66} showInfo={false} />
              <span className="ReviewsList-overview-process-text">66</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ReviewsList-comments">
        <Row gutter={[24, 24]}>
          {[1, 2, 3].map((item) => (
            <Col key={item} span={24}>
              <ReviewComment />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ReviewsList;
