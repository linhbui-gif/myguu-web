import React from 'react';

import Tabs from '@/components/Tabs';
import AppDownload from '@/containers/AppDownload';
import Breadcrumb from '@/components/Breadcrumb';
import ShopCard from '@/pages/ShopDetail/ShopCard';
import Infomation from '@/pages/ShopDetail/Infomation';
import Services from '@/pages/ShopDetail/Services';
import Benefit from '@/pages/ShopDetail/Benefit';
import Images from '@/pages/ShopDetail/Images';
import Reviews from '@/pages/ShopDetail/Reviews';

const ShopDetail: React.FC = () => {
  const dataShopDetailTabs = [
    {
      key: 'info',
      title: 'Thông Tin',
      children: <Infomation />,
    },
    {
      key: 'service',
      title: 'Dịch Vụ',
      children: <Services />,
    },
    {
      key: 'benefit',
      title: 'Ưu Đãi',
      children: <Benefit />,
    },
    {
      key: 'gallery',
      title: 'Hình Ảnh',
      children: <Images />,
    },
    {
      key: 'review',
      title: 'Đánh Giá',
      children: <Reviews />,
    },
  ];

  return (
    <div className="ShopDetail">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Cửa hàng' },
          { key: '3', title: 'Trang điểm cô dâu' },
        ]}
      />
      <ShopCard />
      <div className="ShopDetail-main" style={{ marginBottom: '-3.2rem' }}>
        <div className="ShopDetail-main-wrapper">
          <Tabs data={dataShopDetailTabs} />
        </div>
      </div>
      <AppDownload />
    </div>
  );
};

export default ShopDetail;
