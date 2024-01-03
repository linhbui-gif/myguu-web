import React, { useState } from 'react';
import { Col, Drawer, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';

import Breadcrumb from '@/components/Breadcrumb';
import ServiceCard from '@/components/ServiceCard';
import Pagination from '@/components/Pagination';
import FilterTools from '@/containers/FilterTools';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import './Search.scss';

const Search: React.FC = () => {
  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);
  const isTablet = useMediaQuery({ maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <div className="Search">
      <Breadcrumb
        options={[
          { key: '1', title: 'Trang chủ' },
          { key: '2', title: 'Cửa hàng' },
          { key: '3', title: 'Trang điểm cô dâu' },
        ]}
      />
      <div className="Search-main" style={{ padding: '4.8rem 0 6.4rem' }}>
        <div className="container">
          <div className="Search-main-wrapper">
            <Row gutter={[24, 24]}>
              <Col span={24} lg={{ span: 6 }}>
                {isTablet ? (
                  <div className="flex">
                    <Button
                      title="Bộ Lọc"
                      styleType={EButtonStyleType.PRIMARY}
                      iconName={EIconName.Filter}
                      iconColor={EIconColor.WHITE}
                      onClick={(): void => setVisibleFilter(true)}
                    />
                  </div>
                ) : (
                  <FilterTools />
                )}
              </Col>
              <Col span={24} lg={{ span: 18 }}>
                <div className="Search-total flex items-center justify-between">
                  <div className="Search-total-title">
                    Kết quả tìm kiếm <strong>“Salon tóc”</strong>
                  </div>
                  <div className="Search-total-subtitle">16 kết quả</div>
                </div>
                <Row gutter={isMobile ? [16, 16] : [24, 24]}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                    <Col key={item} span={12} md={{ span: 8 }}>
                      <ServiceCard address="157 B Chùa Láng, Q.Đống Đa, Hà Nội, Việt Nam" border />
                    </Col>
                  ))}
                </Row>

                <div className="Search-pagination flex justify-center" style={{ marginTop: '2rem' }}>
                  <Pagination page={1} pageSize={10} total={44} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {isTablet && (
        <Drawer
          className="HeaderMobile"
          visible={visibleFilter}
          closeIcon={<Icon name={EIconName.X} color={EIconColor.REGENT_GRAY} />}
          placement="left"
          onClose={(): void => setVisibleFilter(false)}
        >
          <div style={{ marginTop: '3.6rem' }}>
            <FilterTools />
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default Search;
