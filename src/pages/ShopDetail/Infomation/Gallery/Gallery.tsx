import React from 'react';
import { Col, Row } from 'antd';

import ImageGallery1 from '@/assets/images/image-gallery-1.png';
import ImageGallery2 from '@/assets/images/image-gallery-2.png';
import ImageGallery3 from '@/assets/images/image-gallery-3.png';
import ImageGallery4 from '@/assets/images/image-gallery-4.png';
import ImageGallery5 from '@/assets/images/image-gallery-5.png';
import ImageGallery6 from '@/assets/images/image-gallery-6.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';

import { TGalleryProps } from './Gallery.types';
import './Gallery.scss';

const Gallery: React.FC<TGalleryProps> = ({ style }) => {
  const images = [ImageGallery1, ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5, ImageGallery6];

  return (
    <div className="Gallery" style={style}>
      <h5 className="Infomation-title flex items-center">
        Hình ảnh
        <span>10 albums</span>
      </h5>

      <div className="Gallery-list">
        <Row gutter={[24, 24]}>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            const randomImage = images[Math.floor(Math.random() * images.length)];

            return (
              <Col key={item} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <div className="Gallery-list-item">
                  <div className="Gallery-list-item-images">
                    <div className="Gallery-list-item-images-badge flex items-center">
                      10
                      <Icon name={EIconName.Photo} color={EIconColor.WHITE} />
                    </div>
                    <img src={randomImage} alt="" />
                  </div>
                  <div className="Gallery-list-item-title">Make cá nhân</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="Gallery-more flex justify-center">
        <Button title="XEM THÊM" styleType={EButtonStyleType.PRIMARY} />
      </div>
    </div>
  );
};

export default Gallery;
