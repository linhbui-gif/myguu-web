import React from 'react';

import SideBar from '@/containers/SideBar';

const Account: React.FC = () => {
  return (
    <div className="Account">
      <div className="container">
        <div className="Account-wrapper" style={{ paddingBottom: '3.2rem' }}>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Account;
