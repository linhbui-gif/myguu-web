import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';
import { TRootState } from '@/redux/reducers';

import BookingForm from '@/pages/Booking/BookingForm';
import ConfirmBooking from '@/pages/Booking/ConfirmBooking';
import Success from '@/pages/Booking/Success';
import { scrollToTop } from '@/utils/functions';
import { createOrderAction, getStoreAction, uiActions } from '@/redux/actions';
import { EFormat } from '@/common/enums';

import { EBookingStep } from './Booking.enums';
import './Booking.scss';

const Booking: React.FC = () => {
  const dispatch = useDispatch();
  const { storeId } = useParams();
  const [stepState, setStepState] = useState<{ key?: EBookingStep; data?: any }>({ key: EBookingStep.BOOKING });

  const cartState = useSelector((state: TRootState) => state.uiReducer.cart);

  const handleSubmit = (values: any): void => {
    const body = {
      date: values?.date?.format(EFormat['DD-MM-YYYY']),
      time: values?.time?.value,
      branch_id: values?.branch?.value,
      voucher_id: values?.voucher?.id,
      note: values?.note,
      customer_name: values?.customer_name,
      customer_phone: values?.customer_phone,
      services: cartState?.map((service) => ({
        id: service.id,
        quantity: service.quantity,
      })),
      wallet_voucher_id: undefined,
      customer_address: undefined,
    };

    dispatch(createOrderAction.request({ body }, handleSubmitSuccess));
  };

  const handleSubmitSuccess = (): void => {
    dispatch(uiActions.setCart([]));
    setStepState({ key: EBookingStep.SUCCESS });
  };

  const getStore = useCallback(() => {
    if (storeId) dispatch(getStoreAction.request({ paths: { id: storeId } }));
  }, [dispatch, storeId]);

  useEffect(() => {
    getStore();
  }, [getStore]);

  useEffect(() => {
    return (): void => {
      dispatch(getStoreAction.success(undefined));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Booking">
      <div className="container">
        <div className="Booking-wrapper">
          {stepState.key === EBookingStep.BOOKING && (
            <BookingForm
              onNext={(values): void => {
                setStepState({ key: EBookingStep.CONFIRM, data: { ...stepState?.data, ...values } });
                scrollToTop();
              }}
            />
          )}
          {stepState.key === EBookingStep.CONFIRM && (
            <ConfirmBooking
              data={stepState?.data}
              onNext={(values): void => {
                handleSubmit({ ...stepState?.data, ...values });
              }}
            />
          )}
          {stepState.key === EBookingStep.SUCCESS && <Success />}
        </div>
      </div>
    </div>
  );
};

export default Booking;
