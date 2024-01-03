import React from 'react';

import Avatar from '@/components/Avatar';
import ImageAvatar from '@/assets/images/image-avatar.png';
import Rate from '@/components/Rate';
import { EIconColor } from '@/components/Icon';
import ImageReview from '@/assets/images/image-service-card-1.png';

import { TReviewCommentProps } from './ReviewComment.types.d';
import './ReviewComment.scss';

const ReviewComment: React.FC<TReviewCommentProps> = () => {
  return (
    <div className="ReviewComment">
      <div className="ReviewComment-wrapper flex items-start">
        <div className="ReviewComment-avatar">
          <Avatar size={34} image={ImageAvatar} />
        </div>
        <div className="ReviewComment-info">
          <div className="ReviewComment-info-title">Thu Hằng</div>
          <div className="ReviewComment-info-rating">
            <Rate disabled value={5} />
          </div>
          <div className="ReviewComment-info-description">Dịch vụ chất lượng tuyệt vời hết nước chấm!</div>

          <div className="ReviewComment-images flex flex-wrap">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="ReviewComment-images-item">
                <img src={ImageReview} alt="" />
              </div>
            ))}
          </div>

          <div className="ReviewComment-booked flex items-center">
            <div className="ReviewComment-booked-image">
              <img src={ImageReview} alt="" />
            </div>
            <div className="ReviewComment-booked-info">
              <div className="ReviewComment-info-description" style={{ margin: 0 }}>
                Trang điểm cô dâu
              </div>
              <div
                className="ReviewComment-info-description"
                style={{ fontSize: '1.2rem', color: EIconColor.TAN_HIDE, margin: 0 }}
              >
                Đã đặt lịch
              </div>
            </div>
          </div>
          <div className="ReviewComment-info-description" style={{ color: EIconColor.HEATHER }}>
            16-05-2023 18:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComment;
