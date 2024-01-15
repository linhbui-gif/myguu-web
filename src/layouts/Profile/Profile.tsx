import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';
import { useMediaQuery } from 'react-responsive';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import SideBar from '@/containers/SideBar';
import { scrollToTop } from '@/utils/functions';
import MobileFooter from '@/containers/MobileFooter';
import MobileHeader from '@/containers/MobileHeader';

import { TProfileProps } from './Profile.types';
import './Profile.scss';

const Profile: React.FC<TProfileProps> = ({ children }) => {
  const location = useLocation();
  const isTablet = useMediaQuery({ maxWidth: 991 });

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="Profile">
      <div className="Profile-header">{isTablet ? <MobileHeader /> : <Header />}</div>
      <div className="Profile-main">
        <div className="container">
          <div className="Profile-main-wrapper flex">
            {!isTablet && (
              <div className="Profile-sidebar">
                <SideBar />
              </div>
            )}

            <div className="Profile-body">{children}</div>
          </div>
        </div>
      </div>
      <div className="Profile-footer">
        <Footer />
      </div>
      <MobileFooter />
    </div>
  );
};

export default Profile;
