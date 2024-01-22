import React from 'react';

import ImageAppPreviewDownload from '@/assets/images/image-app-preview-download.png';
import ImageBtnGooglePlay from '@/assets/images/image-btn-google-play.svg';
import ImageBtnAppStore from '@/assets/images/image-btn-app-store.svg';

import { TAppDownloadProps } from './AppDownload.types.d';
import './AppDownload.scss';

const AppDownload: React.FC<TAppDownloadProps> = () => {
  return (
    <div className="AppDownload">
      <div className="container">
        <div className="AppDownload-wrapper flex items-center justify-center">
          <div className="AppDownload-image">
            <img src={ImageAppPreviewDownload} alt="" />
          </div>
          <div className="AppDownload-info flex items-center">
            <div className="AppDownload-info-item">
              <h4 className="AppDownload-info-title">
                Tải App <span>Myguu</span> Tại Đây:
              </h4>
              <p className="AppDownload-info-description">
                User tải app Myguu trên Apple Store và CH Play hoặc bằng mã QR do cửa hàng cung cấp
              </p>
            </div>

            <div className="AppDownload-info-item">
              <div className="AppDownload-downloads">
                <a
                  className="AppDownload-downloads-item"
                  href="https://play.google.com/store/apps/details?id=vn.apsoft.makeup.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ImageBtnGooglePlay} alt="" />
                </a>
                <a
                  className="AppDownload-downloads-item"
                  href="https://apps.apple.com/vn/app/myguu/id6450871446"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ImageBtnAppStore} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
