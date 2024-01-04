import React, { useCallback, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { useDispatch } from 'react-redux';

import { TGuestProps } from '@/layouts/Guest/Guest.types';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import { scrollToTop } from '@/utils/functions';
import { getCategoriesAction } from '@/redux/actions';

const Guest: React.FC<TGuestProps> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

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
