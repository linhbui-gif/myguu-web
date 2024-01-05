import React from 'react';
import { Col, Row } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import { TAlbum } from '@/common/models';

import { TGalleryProps } from './Gallery.types';
import './Gallery.scss';

const Gallery: React.FC<TGalleryProps> = ({ style, isShowLoadMore, total, loading, onLoadMore, data = [] }) => {
  const isEmpty = data.length === 0;

  return isEmpty ? (
    <></>
  ) : (
    <div className="Gallery" style={style}>
      <h5 className="Infomation-title flex items-center">
        Hình ảnh
        <span>{total || 0} albums</span>
      </h5>

      <div className="Gallery-list">
        <Row gutter={[24, 24]}>
          {data.map((item) => {
            const dataAlbum: TAlbum = item?.data;

            return (
              <Col key={item.value} span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <div className="Gallery-list-item">
                  <div className="Gallery-list-item-images">
                    <div className="Gallery-list-item-images-badge flex items-center">
                      {dataAlbum?.image_number || 0}
                      <Icon name={EIconName.Photo} color={EIconColor.WHITE} />
                    </div>
                    <img src={dataAlbum?.banner} alt="" />
                  </div>
                  <div className="Gallery-list-item-title">{dataAlbum?.name}</div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      {isShowLoadMore && (
        <div className="Gallery-more flex justify-center">
          <Button title="XEM THÊM" styleType={EButtonStyleType.PRIMARY} onClick={onLoadMore} disabled={loading} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
