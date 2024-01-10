import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { Drawer } from 'antd';
import _ from 'lodash';

import Button, { EButtonStyleType } from '@/components/Button';
import DropdownCustom from '@/components/DropdownCustom';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import SearchDropdown from '@/containers/Header/SearchDropdown';
import Input from '@/components/Input';
import Helpers from '@/services/helpers';
import { Paths } from '@/pages/routers';
import FilterTools, { EFilterType } from '@/containers/FilterTools';

import { THeaderSearchProps } from './HeaderSearch.types';
import './HeaderSearch.scss';

const HeaderSearch: React.FC<THeaderSearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);
  const [visibleSearchDropdown, setVisibleSearchDropdown] = useState<boolean>(false);

  const defaultParamsRequest = {
    category_ids: undefined,
    filter_type: EFilterType.NEAR_YOU,
    filter_vote: '',
  };

  const [getParamsRequest, setGetParamsRequest] = useState(defaultParamsRequest);

  const handleSubmit = (searchData?: string, paramsFilter?: any): void => {
    if (searchData || searchValue || paramsFilter) {
      onSearch?.();
      setVisibleSearchDropdown(false);
      setVisibleFilter(false);
      const searchHistories = Helpers.getSearchHistories();

      if (searchData) {
        setSearchValue(searchData);
      }

      Helpers.storeSearchHistories(
        _.uniqBy([{ value: searchData || searchValue, label: searchData || searchValue }, ...searchHistories], 'value'),
      );

      navigate(Paths.Search, {
        state: { search: searchData || searchValue, filter: { ...(paramsFilter || {}) } },
      });
    }
  };

  const renderSearchDropdown = <SearchDropdown visible={visibleSearchDropdown} onClickTag={handleSubmit} />;

  return (
    <>
      <DropdownCustom
        className="HeaderSearch-wrapper"
        visible={visibleSearchDropdown}
        onVisibleChange={setVisibleSearchDropdown}
        overlay={renderSearchDropdown}
        placement="bottomLeft"
      >
        <div className="HeaderSearch flex items-center">
          <div className="HeaderSearch-icon">
            <Icon name={EIconName.Search} color={EIconColor.TAN_HIDE} />
          </div>
          <div className="HeaderSearch-input">
            <Input
              value={searchValue}
              onChange={(search): void => setSearchValue(String(search))}
              placeholder="Nhập từ khoá tìm kiếm..."
              size="small"
              onEnter={(): void => handleSubmit()}
            />
          </div>
          <div className="HeaderSearch-filter">
            <Button
              iconName={EIconName.Filter}
              iconColor={EIconColor.WHITE}
              styleType={EButtonStyleType.PRIMARY}
              size="small"
              onClick={(): void => setVisibleFilter(true)}
            />
          </div>
        </div>
      </DropdownCustom>

      <Drawer
        className="HeaderMobile"
        visible={visibleFilter}
        closeIcon={<Icon name={EIconName.X} color={EIconColor.REGENT_GRAY} />}
        placement="right"
        onClose={(): void => setVisibleFilter(false)}
        zIndex={1052}
      >
        <div style={{ marginTop: '3.6rem' }}>
          <FilterTools
            showFooter
            paramsRequest={getParamsRequest}
            onFilterChange={(dataChanged): void =>
              setGetParamsRequest({
                ...getParamsRequest,
                ...dataChanged,
              })
            }
            onApply={(): void => handleSubmit(searchValue, getParamsRequest)}
            onReset={(): void => setGetParamsRequest(defaultParamsRequest)}
          />
        </div>
      </Drawer>
    </>
  );
};

export default HeaderSearch;
