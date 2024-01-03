import React from 'react';

import Avatar from '@/components/Avatar';
import ImageAvatar from '@/assets/images/image-avatar.png';

import { TMembersProps } from './Members.types';
import './Members.scss';

const Members: React.FC<TMembersProps> = () => {
  return (
    <div className="Members">
      <h5 className="Infomation-title">Đội ngũ chuyên gia</h5>
      <div className="Members-list flex flex-wrap">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="Members-list-item">
            <div className="Members-list-item-avatar">
              <Avatar image={ImageAvatar} />
            </div>
            <div className="Members-list-item-title">Jaquon</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
