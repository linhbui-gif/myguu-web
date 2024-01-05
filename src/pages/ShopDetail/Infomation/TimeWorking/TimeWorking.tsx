import React from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@/redux/reducers';

import { TTimeWorkingProps } from './TimeWorking.types';
import './TimeWorking.scss';

const TimeWorking: React.FC<TTimeWorkingProps> = () => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;

  return (
    <div className="TimeWorking">
      <h5 className="Infomation-title" style={{ marginBottom: '0.8rem' }}>
        Giờ làm việc
      </h5>
      <div className="TimeWorking-table">
        <table>
          <tr>
            <td>Thứ 2 - Thứ 6</td>
            <td>:</td>
            <td>
              {storeState?.start_time_week} - {storeState?.end_time_week}
            </td>
          </tr>
          <tr>
            <td>Thứ 7 - CN</td>
            <td>:</td>
            <td>
              {storeState?.start_time_weekend} - {storeState?.end_time_weekend}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TimeWorking;
