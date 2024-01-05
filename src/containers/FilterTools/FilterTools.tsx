import React, { useCallback, useEffect } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Button, { EButtonStyleType } from '@/components/Button';
import RadioGroup from '@/components/RadioGroup';
import { EIconColor, EIconName } from '@/components/Icon';
import Select from '@/components/Select';
import Tags from '@/components/Tags';
import CheckboxGroup from '@/components/CheckboxGroup';
import { TRootState } from '@/redux/reducers';
import { dataFilterTypeOptions, dataFilterVoteOptions } from '@/containers/FilterTools/FilterTools.data';
import { getDistrictsAction, getProvincesAction } from '@/redux/actions';

import { TFilterToolsProps } from './FilterTools.types.d';
import './FilterTools.scss';

const FilterTools: React.FC<TFilterToolsProps> = ({ paramsRequest, onFilterChange }) => {
  const dispatch = useDispatch();
  const categoriesState = useSelector((state: TRootState) => state.categoryReducer.getCategoriesResponse)?.data || [];

  const provincesState = useSelector((state: TRootState) => state.addressReducer.getProvincesResponse)?.data;
  const provinceOptions = provincesState?.map((option) => ({
    value: option.code,
    label: option.name,
  }));

  const districtsState = useSelector((state: TRootState) => state.addressReducer.getDistrictsResponse)?.data;
  const districtOptions = districtsState?.map((option) => ({
    value: option.code,
    label: option.name,
  }));

  const dataServices = categoriesState?.map((item) => ({
    value: item.id,
    label: item.name,
    data: item,
  }));

  const getProvinces = useCallback(() => {
    dispatch(getProvincesAction.request({}));
  }, [dispatch]);

  const getDistricts = useCallback(() => {
    if (paramsRequest?.province_code)
      dispatch(getDistrictsAction.request({ params: { province_code: paramsRequest?.province_code } }));
  }, [dispatch, paramsRequest]);

  useEffect(() => {
    getProvinces();
  }, [getProvinces]);

  useEffect(() => {
    getDistricts();
  }, [getDistricts]);

  return (
    <div className="FilterTools">
      <Button className="FilterTools-btn" title="Bộ lọc" styleType={EButtonStyleType.PRIMARY} />

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Chọn danh mục</div>
        <div className="FilterTools-card-main">
          <CheckboxGroup
            value={dataServices.filter((service) => paramsRequest?.category_ids?.includes(service.value))}
            options={dataServices?.map((service) => ({
              value: service?.value,
              label: (
                <div className="FilterTools-label flex items-center">
                  <div className="FilterTools-label-icon">
                    <img src={service?.data?.icon} alt="" />
                  </div>
                  {service?.label}
                </div>
              ),
            }))}
            onChange={(options): void => {
              onFilterChange?.({ category_ids: options.map((option) => option.value) });
            }}
          />
        </div>
      </div>

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Đánh giá</div>
        <div className="FilterTools-card-main">
          <Tags
            value={dataFilterVoteOptions.find((option) => option.value === paramsRequest?.filter_vote)}
            options={dataFilterVoteOptions}
            onChange={(option): void => {
              onFilterChange?.({ filter_vote: option.value });
            }}
          />
        </div>
      </div>

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Tỉnh thành, quận huyện</div>
        <div className="FilterTools-card-main">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="FilterTools-subtitle">Thành phố</div>
              <Select
                value={provinceOptions?.find((option) => option.value === paramsRequest?.province_code)}
                suffixIcon={EIconName.CaretDown}
                suffixIconColor={EIconColor.REGENT_GRAY}
                allowClear
                showSearch
                options={provinceOptions}
                onChange={(option): void => {
                  onFilterChange?.({ province_code: option?.value });
                  if (!option) {
                    dispatch(getDistrictsAction.success(undefined));
                    onFilterChange?.({ province_code: undefined, district_code: undefined });
                  }
                }}
              />
            </Col>
            <Col span={24}>
              <div className="FilterTools-subtitle">Quận huyện</div>
              <Select
                value={districtOptions?.find((option) => option.value === paramsRequest?.district_code)}
                suffixIcon={EIconName.CaretDown}
                suffixIconColor={EIconColor.REGENT_GRAY}
                allowClear
                showSearch
                options={districtOptions}
                onChange={(option): void => {
                  onFilterChange?.({ district_code: option?.value });
                }}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="FilterTools-card">
        <div className="FilterTools-card-title">Lọc theo</div>
        <div className="FilterTools-card-main">
          <RadioGroup
            value={dataFilterTypeOptions.find((option) => option.value === paramsRequest?.filter_type)}
            options={dataFilterTypeOptions}
            onChange={(option): void => {
              onFilterChange?.({ filter_type: option.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterTools;
