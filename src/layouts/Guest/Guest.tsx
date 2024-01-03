import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import { scrollToTop } from '@/utils/functions';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="Guest">
      <div className="Guest-header">
        <Header />
      </div>
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Guest;
