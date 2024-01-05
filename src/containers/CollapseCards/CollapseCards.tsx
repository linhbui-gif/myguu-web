import React, { useState } from 'react';
import { Collapse } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';
import ServiceCard from '@/components/ServiceCard';

import { TCollapseCardsProps } from './CollapseCards.types.d';
import './CollapseCards.scss';

const { Panel } = Collapse;

const CollapseCards: React.FC<TCollapseCardsProps> = ({ data = [], herotitle, title, style }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const isEmpty = data.length === 0;

  return isEmpty ? (
    <></>
  ) : (
    <div className="CollapseCards" style={style}>
      <div className="container">
        {herotitle && <h2 className="CollapseCards-herotitle">{herotitle}</h2>}

        <div className="CollapseCards-wrapper">
          <Collapse
            defaultActiveKey={['1']}
            expandIcon={({ isActive }): React.ReactElement => (
              <div className={classNames('CollapseCards-header-arrow', { visible: isActive })}>
                <Icon name={EIconName.CaretDown} color={EIconColor.TAN_HIDE} />
              </div>
            )}
            expandIconPosition="right"
          >
            <Panel
              key="1"
              header={
                <div className="CollapseCards-header flex items-center justify-between">
                  <div className="CollapseCards-header-item">
                    <h4 className="CollapseCards-header-title capitalize">{title}</h4>
                  </div>
                  <div className="CollapseCards-header-item flex items-center">
                    <strong>{data.length}</strong>
                    dịch vụ
                  </div>
                </div>
              }
            >
              <div className="CollapseCards-main">
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
                        slidesToShow: 4,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 575,
                      settings: {
                        slidesToShow: 2,
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
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default CollapseCards;
