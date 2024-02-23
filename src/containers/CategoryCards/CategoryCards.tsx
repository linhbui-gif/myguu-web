import React, { useState } from 'react';
import { Col, Row, Spin } from 'antd';
import classNames from 'classnames';
import { Link } from '@/utils/router';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';
import ServiceCard from '@/components/ServiceCard';
import Tags from '@/components/Tags';
import GridBanners from '@/containers/GridBanners';

import { TCategoryCardsProps } from './CategoryCards.types.d';
import './CategoryCards.scss';

const CategoryCards: React.FC<TCategoryCardsProps> = ({
  headerIcon,
  headerIconColor,
  title,
  moreLink,
  data = [],
  tagsFilter,
  gridBanners,
  isGridList,
  primaryBackground,
  style,
  valueTagsFilter,
  onTagsFilterChange,
  loading,
}) => {
  const isEmpty = data.length === 0;
  const [isDragging, setIsDragging] = useState<boolean>(false);

  return isEmpty ? (
    <></>
  ) : (
    <div className={classNames('CategoryCards', { 'primary-background': primaryBackground })} style={style}>
      <div className="container">
        <div className="CategoryCards-wrapper">
          <div className="CategoryCards-header flex items-center justify-between">
            <div className="CategoryCards-header-item flex items-center">
              {headerIcon && (
                <div className="CategoryCards-header-item-icon">
                  <Icon name={headerIcon} color={headerIconColor} />
                </div>
              )}

              <h3 className="CategoryCards-header-item-title">{title}</h3>
            </div>
            <div className="CategoryCards-header-item">
              {moreLink && (
                <Link to={moreLink} className="CategoryCards-header-item-more flex items-center">
                  Xem thêm
                  <Icon
                    name={EIconName.AngleRight}
                    color={primaryBackground ? EIconColor.WHITE : EIconColor.MINE_SHAFT}
                    strokeWidth={6}
                  />
                </Link>
              )}
            </div>
          </div>

          {gridBanners?.data && gridBanners.data.length > 0 && <GridBanners {...gridBanners} />}

          {tagsFilter && tagsFilter.length > 0 && (
            <div className="CategoryCards-tags">
              <Tags value={valueTagsFilter} options={tagsFilter} onChange={onTagsFilterChange} carousel />
            </div>
          )}

          {isGridList ? (
            <div className="CategoryCards-main">
              <Spin spinning={loading || false}>
                <Row gutter={[24, 24]}>
                  {data.map((item: any, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Col key={index} span={24} lg={{ span: 12 }}>
                      <div className="CategoryCards-main-item">
                        <ServiceCard {...item} />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Spin>
            </div>
          ) : (
            <div className="CategoryCards-main carousel">
              <Spin spinning={loading || false}>
                <Carousels
                  autoplay={false}
                  infinite={false}
                  slidesToShow={5}
                  arrows={false}
                  dots={false}
                  onDragging={setIsDragging}
                  responsive={[
                    {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                      },
                    },
                  ]}
                >
                  {data.map((item: any, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className="CategoryCards-main-item">
                      <ServiceCard {...item} link={!isDragging ? item.link : undefined} />
                    </div>
                  ))}
                </Carousels>
              </Spin>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
