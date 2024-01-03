import React from 'react';
import { Col, Row } from 'antd';

import Button, { EButtonStyleType } from '@/components/Button';
import RadioGroup from '@/components/RadioGroup';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Select from '@/components/Select';
import Tags from '@/components/Tags';
import CheckboxGroup from '@/components/CheckboxGroup';

import { TFilterToolsProps } from './FilterTools.types.d';
import './FilterTools.scss';

const FilterTools: React.FC<TFilterToolsProps> = () => {
  return (
    <div className="FilterTools">
      <Button className="FilterTools-btn" title="Bộ lọc" styleType={EButtonStyleType.PRIMARY} />

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Chọn danh mục</div>
        <div className="FilterTools-card-main">
          <CheckboxGroup
            value={[{ value: 'makeup', label: <></> }]}
            options={[
              {
                value: 'makeup',
                label: (
                  <div className="FilterTools-label flex items-center">
                    <Icon
                      style={{ width: '2.4rem', height: '2.4rem' }}
                      name={EIconName.MakeUp}
                      color={EIconColor.MIRAGE}
                    />
                    Makeup
                  </div>
                ),
              },
              {
                value: 'nail',
                label: (
                  <div className="FilterTools-label flex items-center">
                    <Icon
                      style={{ width: '2.4rem', height: '2.4rem' }}
                      name={EIconName.Lamp}
                      color={EIconColor.MIRAGE}
                    />
                    Nail - Mi
                  </div>
                ),
              },
              {
                value: 'salon',
                label: (
                  <div className="FilterTools-label flex items-center">
                    <Icon
                      style={{ width: '2.4rem', height: '2.4rem' }}
                      name={EIconName.Scissors}
                      color={EIconColor.MIRAGE}
                    />
                    Salon
                  </div>
                ),
              },
              {
                value: 'spa',
                label: (
                  <div className="FilterTools-label flex items-center">
                    <Icon
                      style={{ width: '2.4rem', height: '2.4rem' }}
                      name={EIconName.Spa}
                      color={EIconColor.MIRAGE}
                    />
                    Spa
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Đánh giá</div>
        <div className="FilterTools-card-main">
          <Tags
            value={{ value: 'all', label: '' }}
            options={[
              { value: 'all', label: 'Tất cả', data: { iconName: EIconName.StarFill } },
              { value: '5', label: '5', data: { iconName: EIconName.StarFill } },
              { value: '4', label: '4', data: { iconName: EIconName.StarFill } },
              { value: '3', label: '3', data: { iconName: EIconName.StarFill } },
              { value: '2', label: '2', data: { iconName: EIconName.StarFill } },
              { value: '1', label: '1', data: { iconName: EIconName.StarFill } },
            ]}
          />
        </div>
      </div>

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Tỉnh thành, quận huyện</div>
        <div className="FilterTools-card-main">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="FilterTools-subtitle">Thành phố</div>
              <Select options={[]} suffixIcon={EIconName.CaretDown} suffixIconColor={EIconColor.REGENT_GRAY} />
            </Col>
            <Col span={24}>
              <div className="FilterTools-subtitle">Quận huyện</div>
              <Select options={[]} suffixIcon={EIconName.CaretDown} suffixIconColor={EIconColor.REGENT_GRAY} />
            </Col>
          </Row>
        </div>
      </div>

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Lọc theo</div>
        <div className="FilterTools-card-main">
          <RadioGroup
            value={{ value: 'near-me', label: <></> }}
            options={[
              {
                value: 'near-me',
                label: 'Gần tôi',
              },
              {
                value: 'popular',
                label: 'Độ phổ biến',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTools;
