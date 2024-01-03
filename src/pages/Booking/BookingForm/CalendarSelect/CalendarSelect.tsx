import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import moment, { Moment } from 'moment';

import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { getRangeMomentBetweenTwoDate } from '@/utils/functions';
import { EFormat } from '@/common/enums';

import { TCalendarSelectProps } from './CalendarSelect.types';
import './CalendarSelect.scss';

const CalendarSelect: React.FC<TCalendarSelectProps> = ({
  className,
  onChange,
  size,
  value,
  rangeDays = 3,
  showDot,
}) => {
  const [current, setCurrent] = useState<Moment>(moment().locale('vi'));

  const dayArr = getRangeMomentBetweenTwoDate(
    current.clone().subtract(rangeDays, 'day').valueOf(),
    current.clone().add(rangeDays, 'day').valueOf(),
  );

  useEffect(() => {
    if (!value) onChange?.(moment());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames('CalendarSelect', className)}>
      <div className="CalendarSelect-header flex items-center justify-center">
        <Button
          iconName={EIconName.AngleLeft}
          iconColor={EIconColor.HAVELOCK_BLUE}
          iconStrokeWidth={6}
          styleType={EButtonStyleType.TRANSPARENT}
          onClick={(): void => {
            setCurrent(current.clone().subtract(rangeDays * 2, 'day'));
          }}
        />
        <span>{current.format('MMM, YYYY')}</span>
        <Button
          iconName={EIconName.AngleRight}
          iconColor={EIconColor.HAVELOCK_BLUE}
          iconStrokeWidth={6}
          styleType={EButtonStyleType.TRANSPARENT}
          onClick={(): void => {
            setCurrent(current.clone().add(rangeDays * 2, 'day'));
          }}
        />
      </div>
      <div className="CalendarSelect-body">
        <Row justify="space-between">
          {dayArr.map((item) => (
            <Col key={item.valueOf()}>
              <div
                className={classNames('CalendarSelect-item', size, {
                  active: value?.format(EFormat['DD/MM/YYYY']) === item.format(EFormat['DD/MM/YYYY']),
                })}
                onClick={(): void => onChange?.(item)}
              >
                <div className="CalendarSelect-item-description">{item.format('ddd')}</div>
                <div className="CalendarSelect-item-title">{item.format('DD')}</div>
                {showDot && <div className="CalendarSelect-item-dot" />}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CalendarSelect;
