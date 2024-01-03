import React from 'react';

import { TTimeWorkingProps } from './TimeWorking.types';
import './TimeWorking.scss';

const TimeWorking: React.FC<TTimeWorkingProps> = () => {
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
            <td>8:00 - 21:00</td>
          </tr>
          <tr>
            <td>Thứ 7 - CN</td>
            <td>:</td>
            <td>10:00 - 20:00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TimeWorking;
