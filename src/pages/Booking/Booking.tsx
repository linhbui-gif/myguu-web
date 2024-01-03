import React, { useState } from 'react';

import BookingForm from '@/pages/Booking/BookingForm';
import ConfirmBooking from '@/pages/Booking/ConfirmBooking';
import Success from '@/pages/Booking/Success';
import { scrollToTop } from '@/utils/functions';

import { EBookingStep } from './Booking.enums';

import './Booking.scss';

const Booking: React.FC = () => {
  const [stepState, setStepState] = useState<{ key?: EBookingStep; data?: any }>({ key: EBookingStep.BOOKING });

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
              onNext={(values): void => {
                setStepState({ key: EBookingStep.SUCCESS, data: { ...stepState?.data, ...values } });
                scrollToTop();
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
