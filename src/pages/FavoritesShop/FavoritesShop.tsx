import React from 'react';
import { Col, Row } from 'antd';

import Tags from '@/components/Tags';
import ShopAddressCard from '@/components/ShopAddressCard';

import './FavoritesShop.scss';

const FavoritesShop: React.FC = () => {
  return (
    <div className="FavoritesShop">
      <div className="SideBar-card">
        <div className="FavoritesShop-card-title" style={{ marginBottom: '1.6rem' }}>
          Danh sách yêu thích
        </div>
        <div className="FavoritesShop-status">
          <Tags
            value={{ value: '1', label: 'Cửa Hàng' }}
            size="middle"
            options={[
              { value: '1', label: 'Cửa Hàng' },
              { value: '2', label: 'Dịch Vụ' },
            ]}
          />
        </div>
      </div>

      <div className="FavoritesShop-main">
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Col key={item} span={24} lg={{ span: 12 }}>
              <ShopAddressCard favorited />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FavoritesShop;
