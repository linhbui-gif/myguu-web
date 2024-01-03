import React from 'react';

import Branches from '@/pages/ShopDetail/Infomation/Branches';
import TimeWorking from '@/pages/ShopDetail/Infomation/TimeWorking/TimeWorking';
import Members from '@/pages/ShopDetail/Infomation/Members';
import Gallery from '@/pages/ShopDetail/Infomation/Gallery/Gallery';

import { TInfomationProps } from './Infomation.types';
import './Infomation.scss';

const Infomation: React.FC<TInfomationProps> = () => {
  return (
    <div className="Infomation">
      <div className="container">
        <p className="Infomation-description" style={{ marginBottom: '3.2rem' }}>
          Bạn hiểu makeup là gì? Học makeup là được học những gì? Nhiều bạn vẫn hiểu rằng, makeup là bôi bôi, trét trét
          mỹ phẩm lòe loẹt lên mặt. Đây là suy nghĩ bị ảnh hưởng từ những thế hệ trước.
          <br />
          Hiện nay, với thời đại phát triển, xã hội phát triển. Việc này đòi hỏi con người cũng phát triển. Nhu cầu làm
          đẹp của con người thông qua việc makeup ngày càng tăng. Vì vậy, những sai lầm trong cách nghĩ về makeup cũng
          thay đổi rất nhiều.
          <br />
          Makeup là nghề sử dụng mỹ phẩm để cải thiện sắc đẹp của mọi người. Thường sẽ thay đổi về khuôn mặt. Che đi
          những khuyết điểm, tạo điểm nhấn và làm nổi bật các nét đẹp thông qua việc vẽ, tạo khối khuôn mặt.
        </p>

        <Branches />

        <TimeWorking />

        <Members />

        <Gallery />
      </div>
    </div>
  );
};

export default Infomation;
