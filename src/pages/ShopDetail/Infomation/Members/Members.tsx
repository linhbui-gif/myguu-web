import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '@/components/Avatar';
import { TRootState } from '@/redux/reducers';

import { TMembersProps } from './Members.types';
import './Members.scss';

const Members: React.FC<TMembersProps> = () => {
  const storeState = useSelector((state: TRootState) => state.storeReducer.getStoreResponse)?.data;
  const isEmpty = storeState?.experts?.length === 0;

  return isEmpty ? (
    <></>
  ) : (
    <div className="Members">
      <h5 className="Infomation-title">Đội ngũ chuyên gia</h5>
      <div className="Members-list flex flex-wrap">
        {storeState?.experts.map((item) => (
          <div key={item.id} className="Members-list-item">
            <div className="Members-list-item-avatar">
              <Avatar image={item?.avatar} />
            </div>
            <div className="Members-list-item-title">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
