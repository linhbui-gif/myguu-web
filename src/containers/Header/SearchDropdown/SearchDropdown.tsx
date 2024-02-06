import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Helpers from '@/services/helpers';
import Button, { EButtonStyleType } from '@/components/Button';
import Tags from '@/components/Tags';
import { EIconColor, EIconName } from '@/components/Icon';
import { getStoresTrendingAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { TSelectOption } from '@/components/Select';

import { TSearchDropdownProps } from './SearchDropdown.types';
import './SearchDropdown.scss';

const SearchDropdown: React.FC<TSearchDropdownProps> = ({ visible, onClickTag }) => {
  const dispatch = useDispatch();

  const storesTrendingState = useSelector((state: TRootState) => state.storeReducer.getStoresTrendingResponse)?.data;

  const [searchHistoryOptions, setSearchHistoryOptions] = useState<TSelectOption[]>([]);
  const storesTrendingOptions =
    storesTrendingState
      ?.filter((item) => item.slug)
      ?.map((item) => ({
        label: item.slug,
        value: item.slug,
      })) || [];

  const isEmptyStoresTrending = storesTrendingOptions.length === 0;
  const isEmptySearchHistoies = searchHistoryOptions.length === 0;

  const handleRemoveSearchHistory = (dataRemove: TSelectOption): void => {
    const newData = searchHistoryOptions.filter((option) => option.value !== dataRemove.value);
    setSearchHistoryOptions(newData);
    Helpers.storeSearchHistories(newData);
  };

  const handleRemoveAllSearchHistory = (): void => {
    const newData: TSelectOption[] = [];
    setSearchHistoryOptions(newData);
    Helpers.storeSearchHistories(newData);
  };

  const getStoresTrending = useCallback(() => {
    dispatch(getStoresTrendingAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    getStoresTrending();
  }, [getStoresTrending]);

  useEffect(() => {
    if (visible) {
      setSearchHistoryOptions(Helpers.getSearchHistories());
    }
  }, [visible]);

  return (
    <div className="SearchDropdown">
      <div className="SearchDropdown-wrapper">
        {!isEmptySearchHistoies && (
          <>
            <div className="SearchDropdown-title flex items-center justify-between">
              Tìm kiếm gần đây
              <Button
                title="Xóa lịch sử"
                size="small"
                styleType={EButtonStyleType.PRIMARY_TEXT}
                onClick={handleRemoveAllSearchHistory}
              />
            </div>
            <div className="SearchDropdown-tags">
              <Tags
                onChange={(option): void => onClickTag?.(String(option.value))}
                options={searchHistoryOptions.map((item) => ({
                  ...item,
                  data: {
                    reverse: true,
                    iconName: EIconName.X,
                    iconColor: EIconColor.MINE_SHAFT,
                    onClickIcon: (): void => handleRemoveSearchHistory(item),
                  },
                }))}
              />
            </div>
          </>
        )}

        {!isEmptyStoresTrending && (
          <>
            <div
              className="SearchDropdown-title flex items-center justify-between"
              style={{ color: EIconColor.PRIMARY }}
            >
              Xu Hướng
            </div>
            <div className="SearchDropdown-tags popular">
              <Tags options={storesTrendingOptions} onChange={(option): void => onClickTag?.(String(option.value))} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
