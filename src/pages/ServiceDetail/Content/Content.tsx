import React from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@/redux/reducers';

import { TContentProps } from './Content.types';
import './Content.scss';

const Content: React.FC<TContentProps> = () => {
  const serviceState = useSelector((state: TRootState) => state.serviceReducer.getServiceResponse)?.data;

  return (
    <div className="Content">
      <div className="container">
        {/* eslint-disable-next-line react/no-danger */}
        <div className="Content-wrapper" dangerouslySetInnerHTML={{ __html: serviceState?.description || '' }} />
      </div>
    </div>
  );
};

export default Content;
