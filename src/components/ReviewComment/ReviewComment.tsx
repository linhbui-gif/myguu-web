import React from 'react';

import Avatar from '@/components/Avatar';
import Rate from '@/components/Rate';
import { EIconColor } from '@/components/Icon';
import { formatISODateToDateTime } from '@/utils/functions';
import { EFormat } from '@/common/enums';

import { TReviewCommentProps } from './ReviewComment.types.d';
import './ReviewComment.scss';

const ReviewComment: React.FC<TReviewCommentProps> = ({
  avatar,
  name,
  star,
  content,
  images,
  createDate,
  orderServices,
}) => {
  return (
    <div className="ReviewComment">
      <div className="ReviewComment-wrapper flex items-start">
        <div className="ReviewComment-avatar">
          <Avatar size={34} image={avatar} />
        </div>
        <div className="ReviewComment-info">
          <div className="ReviewComment-info-title">{name}</div>
          <div className="ReviewComment-info-rating">
            <Rate disabled value={star} />
          </div>
          <div className="ReviewComment-info-description">{content}</div>

          <div className="ReviewComment-images flex flex-wrap">
            {images?.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="ReviewComment-images-item">
                <img src={item} alt="" />
              </div>
            ))}
          </div>

          {orderServices?.map((item) => (
            <div className="ReviewComment-booked flex items-center">
              <div className="ReviewComment-booked-image">
                {item?.banner?.[0] && <img src={item?.banner?.[0]} alt="" />}
              </div>
              <div className="ReviewComment-booked-info">
                <div className="ReviewComment-info-description" style={{ margin: 0 }}>
                  {item?.name}
                </div>
                <div
                  className="ReviewComment-info-description"
                  style={{ fontSize: '1.2rem', color: EIconColor.TAN_HIDE, margin: 0 }}
                >
                  Đã đặt lịch
                </div>
              </div>
            </div>
          ))}

          {createDate && (
            <div className="ReviewComment-info-description" style={{ color: EIconColor.HEATHER }}>
              {formatISODateToDateTime(createDate, EFormat['DD-MM-YYYY - HH:mm'])}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewComment;
