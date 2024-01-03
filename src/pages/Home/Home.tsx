import React from 'react';

import ImageGridBanner from '@/assets/images/image-grid-banner.png';
import ImageGridBanner2 from '@/assets/images/image-grid-banner-2.png';

import Banner from '@/containers/Banner';
import BookingServices from '@/containers/BookingServices';
import CategoryCards from '@/containers/CategoryCards';
import GridBanners from '@/containers/GridBanners';
import { EIconColor, EIconName } from '@/components/Icon';
import AppDownload from '@/containers/AppDownload';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Banner />
      <BookingServices />
      <CategoryCards
        title="Deal Hot"
        primaryBackground
        headerIcon={EIconName.Lightning}
        headerIconColor={EIconColor.WHITE}
        data={[
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <CategoryCards
        title="Thương hiệu"
        headerIcon={EIconName.Verify}
        moreLink="#"
        data={[
          { verify: true, address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { verify: true, address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { verify: true, address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { verify: true, address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { verify: true, address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
        ]}
      />
      <CategoryCards
        title="Cửa hàng gần bạn"
        moreLink="#"
        tagsFilter={[
          { value: '1', label: 'Make-Up' },
          { value: '2', label: 'Spa' },
          { value: '3', label: 'Nail-Mi' },
          { value: '4', label: 'Salon' },
          { value: '5', label: 'Thẩm Mỹ Viện' },
          { value: '6', label: 'Studio' },
        ]}
        data={[
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
        ]}
      />
      <CategoryCards
        title="Đề xuất cho bạn"
        moreLink="#"
        data={[
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
          { border: true, subtitle: 'Lộc hương Spa', discountPercent: 27, sellingPrice: 2250000, retailPrice: 2500000 },
        ]}
      />
      <GridBanners
        data={[
          { key: '1', image: ImageGridBanner },
          { key: '2', image: ImageGridBanner },
        ]}
        span={24}
        lg={{ span: 12 }}
      />
      <CategoryCards
        title="Make-up tại nhà"
        moreLink="#"
        data={[
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
        ]}
      />
      <CategoryCards
        title="Thầm mỹ viện gần nhà"
        moreLink="#"
        data={[
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
          { address: '157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam' },
        ]}
      />
      <CategoryCards
        isGridList
        title="Địa điểm nổi bật"
        moreLink="#"
        gridBanners={{
          data: [{ key: '1', image: ImageGridBanner2 }],
          span: 24,
        }}
        tagsFilter={[
          { value: '1', label: 'Make-Up' },
          { value: '2', label: 'Spa' },
          { value: '3', label: 'Nail-Mi' },
          { value: '4', label: 'Salon' },
          { value: '5', label: 'Thẩm Mỹ Viện' },
          { value: '6', label: 'Studio' },
        ]}
        data={[
          { border: true, vertical: true, address: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
          { border: true, vertical: true, address: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
          { border: true, vertical: true, address: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
          { border: true, vertical: true, address: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
          { border: true, vertical: true, address: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
          { border: true, vertical: true, address: '97-99 Láng Hạ - Đống Đa- Hà Nội' },
        ]}
      />
      <AppDownload />
    </div>
  );
};

export default Home;
