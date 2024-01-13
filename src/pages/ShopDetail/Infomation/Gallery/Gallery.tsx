/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';

// eslint-disable-next-line import/no-extraneous-dependencies
import Lightbox from 'react-image-lightbox';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-image-lightbox/style.css';
import { useDispatch, useSelector } from 'react-redux';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button, { EButtonStyleType } from '@/components/Button';
import { TAlbum } from '@/common/models';

import { TGalleryProps } from './Gallery.types';
import './Gallery.scss';
import { GetStoreAlbumByIdAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

const Gallery: React.FC<TGalleryProps> = ({ style, isShowLoadMore, total, loading, onLoadMore, data = [] }) => {
  const isEmpty = data.length === 0;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const storeAlbumByIdState =
    useSelector((state: TRootState) => state.storeReducer.getStoreAlbumByIdResponse)?.data || [];
  const images =
    storeAlbumByIdState &&
    storeAlbumByIdState.map((element: any) => {
      return element?.src;
    });

  const onOpenLightBox = (id: any) => {
    if (id) dispatch(GetStoreAlbumByIdAction.request({ paths: { id } }));
    if (typeof images === 'undefined') return;
    setOpen(true);
  };
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
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              <Col
                key={item.value}
                span={24}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                onClick={() => onOpenLightBox(dataAlbum.id)}
              >
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
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onCloseRequest={() => setOpen(false)}
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
          )}
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
