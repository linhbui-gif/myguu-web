import React from 'react';

import AppDownload from '@/containers/AppDownload';
import CollapseCards from '@/containers/CollapseCards';
import Reviews from '@/pages/ShopDetail/Reviews';
import Tabs, { ETabsStyleType } from '@/components/Tabs';
import Content from '@/pages/ServiceDetail/Content';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceDetailCard from '@/pages/ServiceDetail/ServiceDetailCard';

const ServiceDetail: React.FC = () => {
  const dataServiceDetailTabs = [
    {
      key: 'info',
      title: 'Chi tiết dịch vụ',
      children: <Content />,
    },
    {
      key: 'review',
      title: 'Đánh giá dịch vụ',
      children: <Reviews />,
    },
  ];

  return (
    <div className="ServiceDetail">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Cửa hàng' },
          { key: '3', title: 'Trang điểm cô dâu' },
        ]}
      />
      <ServiceDetailCard />

      <div className="ServiceDetail-main" style={{ marginBottom: '-3.2rem' }}>
        <div className="ServiceDetail-main-wrapper">
          <Tabs data={dataServiceDetailTabs} styleType={ETabsStyleType.LINE} />
        </div>
      </div>

      <CollapseCards
        style={{ marginTop: '3.2rem' }}
        herotitle="Dịch vụ liên quan"
        title="Trang điểm"
        data={[
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <CollapseCards
        title="Gội đầu"
        data={[
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { showQuantity: true, discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <AppDownload />
    </div>
  );
};

export default ServiceDetail;
