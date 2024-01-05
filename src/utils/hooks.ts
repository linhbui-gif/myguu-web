/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { TCommonResponse } from '@/common/types';
import { TSelectOption } from '@/components/Select';
import { TRootState } from '@/redux/reducers';
import { getTotalPage } from '@/utils/functions';

type TScroll = {
  x: number;
  y: number;
  direction: string;
};

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      clearTimeout(handleDebounce);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useScroll = (): TScroll => {
  const [scroll, setScroll] = useState<TScroll>({
    x: document.body.getBoundingClientRect().left,
    y: document.body.getBoundingClientRect().top,
    direction: '',
  });

  const listener = (): void => {
    setScroll((prev: TScroll) => ({
      x: document.body.getBoundingClientRect().left,
      y: -document.body.getBoundingClientRect().top,
      direction: prev.y > -document.body.getBoundingClientRect().top ? 'up' : 'down',
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return (): void => window.removeEventListener('scroll', listener);
  }, []);

  return scroll;
};

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return (): void => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export const useModalState = (): [
  state: { [key: string]: any; visible: boolean },
  onOpen: (data?: { [key: string]: any }, dataKey?: { [key: string]: any }) => void,
  onClose: () => void,
] => {
  const [modalState, setModalState] = useState<any>({ visible: false });

  const handleOpenModal = (data?: { [key: string]: any }, dataKey?: { [key: string]: any }): void => {
    setModalState({ ...dataKey, visible: true, data });
  };

  const handleCloseModal = (): void => {
    setModalState({ visible: false });
  };

  return [modalState, handleOpenModal, handleCloseModal];
};

export const usePaginationLoadMoreOptionTool = (data: {
  actions: any;
  reducer: string;
  response: string;
  loadingAction: string;
  initialParams?: { [key: string]: any };
  initialPaths?: { [key: string]: any };
  availableToCall?: boolean;
}): {
  paramsRequest: {
    page: number;
    limit: number;
    [key: string]: any;
  };
  state: TCommonResponse & { data: any };
  options: TSelectOption[];
  loading?: boolean;
  isLoadMore?: boolean;
  setOptions: (data: TSelectOption[]) => void;
  setParamsRequest: (data: any) => void;
  handleReset: () => void;
  handleLoadMore: () => void;
  handleSearch: (keyword?: string) => void;
} => {
  const dispatch = useDispatch();

  const state = useSelector((state: any) => state?.[data?.reducer]?.[data.response]);
  const total = state?.paging?.total;

  const loading = useSelector((state: TRootState) => state.loadingReducer[data?.loadingAction]);

  const [options, setOptions] = useState<TSelectOption[]>([]);
  const [paramsRequest, setParamsRequest] = useState<{
    page: number;
    limit: number;
    [key: string]: any;
  }>({
    page: DEFAULT_PAGE,
    limit: DEFAULT_PAGE_SIZE,
    ...data?.initialParams,
  });

  const isLoadMore = paramsRequest.page < getTotalPage(total, paramsRequest.limit);

  const handleSearch = (keyword?: string): void => {
    setParamsRequest({
      ...paramsRequest,
      page: DEFAULT_PAGE,
      search: keyword || undefined,
    });
  };

  const handleLoadMore = (): void => {
    if (!loading && isLoadMore) {
      setParamsRequest({
        ...paramsRequest,
        page: paramsRequest.page + 1,
      });
    }
  };

  const handleReset = (): void => {
    setParamsRequest({
      page: DEFAULT_PAGE,
      limit: DEFAULT_PAGE_SIZE,
    });
  };

  const getData = useCallback(() => {
    const typeIsBoolean = typeof data?.availableToCall === 'boolean';

    if (!typeIsBoolean || (typeIsBoolean && data?.availableToCall)) {
      dispatch(
        data?.actions?.request(
          { params: paramsRequest, paths: { ...data?.initialPaths } },
          (fetchingResponse: any): void => {
            const isFirstFetching = paramsRequest.page === DEFAULT_PAGE;
            const dataFetching = fetchingResponse?.data?.map((item: any) => ({
              value: item.id,
              label: item.name,
              data: item,
            }));

            setOptions(isFirstFetching ? dataFetching : [...options, ...dataFetching]);
          },
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, paramsRequest, data?.availableToCall]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    options,
    loading,
    paramsRequest,
    state,
    isLoadMore,
    setOptions,
    setParamsRequest,
    handleReset,
    handleLoadMore,
    handleSearch,
  };
};
