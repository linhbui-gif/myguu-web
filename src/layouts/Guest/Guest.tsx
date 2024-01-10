import React, { useCallback, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import { scrollToTop } from '@/utils/functions';
import { getCategoriesAction } from '@/redux/actions';
import MobileHeader from '@/containers/MobileHeader';
import MobileFooter from '@/containers/MobileFooter';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isTablet = useMediaQuery({ maxWidth: 991 });

  const getCategories = useCallback(() => {
    dispatch(getCategoriesAction.request({}));
  }, [dispatch]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="Guest">
      <div className="Guest-header">{isTablet ? <MobileHeader /> : <Header />}</div>
      <div className="Guest-body">{children}</div>
      <div className="Guest-footer">
        <Footer />
      </div>
      {isTablet && <MobileFooter />}
    </div>
  );
};

export default Guest;
