import React from 'react';
import { Col, Progress, Row } from 'antd';

import Icon, { EIconName } from '@/components/Icon';
import Rate from '@/components/Rate';
import ReviewComment from '@/components/ReviewComment';

import { TReviewsListProps } from './ReviewsList.types';
import './ReviewsList.scss';

const ReviewsList: React.FC<TReviewsListProps> = ({ dataVoteState, style }) => {
  const totalVotes = dataVoteState?.paging?.total || 0;

  const total5Stars = dataVoteState?.data?.filter((item) => item.star === 5)?.length || 0;
  const percent5Stars = (total5Stars / totalVotes) * 100;

  const total4Stars = dataVoteState?.data?.filter((item) => item.star === 4)?.length || 0;
  const percent4Stars = (total4Stars / totalVotes) * 100;

  const total3Stars = dataVoteState?.data?.filter((item) => item.star === 3)?.length || 0;
  const percent3Stars = (total3Stars / totalVotes) * 100;

  const total2Stars = dataVoteState?.data?.filter((item) => item.star === 2)?.length || 0;
  const percent2Stars = (total2Stars / totalVotes) * 100;

  const total1Stars = dataVoteState?.data?.filter((item) => item.star === 1)?.length || 0;
  const percent1Stars = (total1Stars / totalVotes) * 100;

  const dataListVotes = [
    { star: 5, total: total5Stars, percent: percent5Stars },
    { star: 4, total: total4Stars, percent: percent4Stars },
    { star: 3, total: total3Stars, percent: percent3Stars },
    { star: 2, total: total2Stars, percent: percent2Stars },
    { star: 1, total: total1Stars, percent: percent1Stars },
  ];

  const totalAverage = (): number => {
    if (totalVotes > 0) {
      return (
        (dataVoteState?.data || [])
          ?.map((item) => item.star)
          ?.reduce((result, item) => {
            return result + item;
          }, 0) / totalVotes
      );
    }

    return 0;
  };

  return (
    <div className="ReviewsList" style={style}>
      <div className="ReviewsList-overview">
        <div className="ReviewsList-overview-wrapper flex items-center justify-between">
          <div className="ReviewsList-overview-item">
            <div className="ReviewsList-overview-title">{totalAverage().toFixed(1)}</div>
            <Rate allowHalf disabled value={5} />
            <div className="ReviewsList-overview-description">({dataVoteState?.paging?.total || 0} lượt đánh giá)</div>
          </div>
          <div className="ReviewsList-overview-item">
            {dataListVotes.map((item) => (
              <div className="ReviewsList-overview-process flex items-center">
                <strong className="ReviewsList-overview-process-text">{item.star}</strong>
                <Icon name={EIconName.StarFill} />
                <Progress percent={item.percent} showInfo={false} />
                <span className="ReviewsList-overview-process-text">{item.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ReviewsList-comments">
        <Row gutter={[24, 24]}>
          {dataVoteState?.data?.map((item) => (
            <Col key={item.id} span={24}>
              <ReviewComment
                avatar={item?.user?.avatar}
                name={item?.user?.name}
                star={item?.star}
                content={item?.comment}
                createDate={item?.created_at}
                images={item?.images}
                orderServices={item?.order_services}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ReviewsList;
