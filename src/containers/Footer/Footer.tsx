import React from 'react';
import { Form } from 'antd';
import { Link } from '@reach/router';

import Input from '@/components/Input';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TFooterProps } from './Footer.types.d';
import './Footer.scss';

const Footer: React.FC<TFooterProps> = () => {
  const [form] = Form.useForm();

  const dataUsefulLink = [
    { link: '#', title: 'Giới thiệu' },
    { link: '#', title: 'Tin tức' },
    { link: '#', title: 'Tuyển dụng' },
    { link: '#', title: 'Liên hệ ' },
  ];

  const dataServicesLink = [
    { link: '#', title: 'Make-Up' },
    { link: '#', title: 'Nail-Mi' },
    { link: '#', title: 'Salon' },
    { link: '#', title: 'Spa' },
    { link: '#', title: 'Thẩm Mỹ' },
    { link: '#', title: 'Phòng khám' },
    { link: '#', title: 'Gym' },
  ];

  const dataSocialsLink = [
    { link: 'facebook', iconName: EIconName.Facebook },
    { link: 'instagram', iconName: EIconName.Instagram },
    { link: 'youtube', iconName: EIconName.Youtube },
  ];

  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="container">
          <div className="Footer-wrapper flex items-start flex-wrap">
            <div className="Footer-col">
              <h6 className="Footer-title">Dịch vụ Myguu</h6>
              <ul
                className="Footer-list"
                style={{
                  columnCount: 2,
                }}
              >
                {dataServicesLink.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className="Footer-list-item">
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="Footer-col">
              <h6 className="Footer-title">Địa chỉ công ty</h6>
              <p className="Footer-description" style={{ marginBottom: '1.2rem' }}>
                <strong>Địa chỉ:</strong> Tầng 6, tòa nhà hỗn hợp Sông Đà, Số 131 Trần Phú, P.Văn Quán, Q.Hà Đông, Tp.Hà
                Nội.
              </p>
              <p className="Footer-description" style={{ marginBottom: '1.2rem' }}>
                <strong>Điện thoại:</strong> 0945 180 596
              </p>
              <p className="Footer-description">
                <strong>Email:</strong> myguuhotro@gmail.com
              </p>
            </div>

            <div className="Footer-col">
              <h6 className="Footer-title">Về chúng tôi</h6>
              <ul className="Footer-list">
                {dataUsefulLink.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index} className="Footer-list-item">
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="Footer-col">
              <h6 className="Footer-description">
                Đăng kí để nhận tin tức mới nhất từ <strong>Myguu</strong>
              </h6>
              <Form form={form}>
                <div className="Footer-form flex items-center">
                  <div className="Footer-form-input">
                    <Form.Item name="email">
                      <Input size="small" placeholder="Nhập địa chỉ email của bạn" />
                    </Form.Item>
                  </div>
                  <div className="Footer-form-submit">
                    <Button title="Đăng Ký" size="small" styleType={EButtonStyleType.PRIMARY} />
                  </div>
                </div>
              </Form>
              <div className="Footer-socials flex items-center">
                {dataSocialsLink.map((item, index) => (
                  <a
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="Footer-socials-item flex items-center justify-center"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={item.iconName} color={EIconColor.WHITE} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer-bottom">
        <div className="container">
          <div className="Footer-wrapper flex items-center justify-between">
            <p className="Footer-subtitle">
              Copyright 2023 © 2021 <strong>MYGUU</strong>. All rights reserved
            </p>
            <p className="Footer-description">Design by APSOFT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
