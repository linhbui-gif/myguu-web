import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Col, Row } from 'antd';
import moment, { Moment } from 'moment';

import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';
import { formatISODateToDateTime, getRangeMomentBetweenTwoDate } from '@/utils/functions';
import { EFormat } from '@/common/enums';

import { TCalendarSelectProps } from './CalendarSelect.types';
import './CalendarSelect.scss';

const CalendarSelect: React.FC<TCalendarSelectProps> = ({
  className,
  size,
  value,
  rangeDays = 3,
  schedules,
  disabledDate,
  onChange,
  onChangeRange,
  onInit,
}) => {
  const [current, setCurrent] = useState<Moment>(moment().locale('vi'));

  const dayArr = getRangeMomentBetweenTwoDate(
    current.clone().subtract(rangeDays, 'day').valueOf(),
    current.clone().add(rangeDays, 'day').valueOf(),
  );

  useEffect(() => {
    onInit?.({
      fromDate: current.clone().subtract(rangeDays, 'day').format(EFormat['DD-MM-YYYY']),
      toDate: current.clone().add(rangeDays, 'day').format(EFormat['DD-MM-YYYY']),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeDays]);

  return (
    <div className={classNames('CalendarSelect', className)}>
      <div className="CalendarSelect-header flex items-center justify-center">
        <Button
          iconName={EIconName.AngleLeft}
          iconColor={EIconColor.HAVELOCK_BLUE}
          iconStrokeWidth={6}
          styleType={EButtonStyleType.TRANSPARENT}
          onClick={(): void => {
            const dataChanged = current.clone().subtract(rangeDays * 2, 'day');
            setCurrent(dataChanged);
            onChangeRange?.({
              fromDate: dataChanged.clone().subtract(rangeDays, 'day').format(EFormat['DD-MM-YYYY']),
              toDate: dataChanged.clone().add(rangeDays, 'day').format(EFormat['DD-MM-YYYY']),
            });
          }}
        />
        <span>{current.format('MMM, YYYY')}</span>
        <Button
          iconName={EIconName.AngleRight}
          iconColor={EIconColor.HAVELOCK_BLUE}
          iconStrokeWidth={6}
          styleType={EButtonStyleType.TRANSPARENT}
          onClick={(): void => {
            const dataChanged = current.clone().add(rangeDays * 2, 'day');
            setCurrent(dataChanged);
            onChangeRange?.({
              fromDate: dataChanged.clone().subtract(rangeDays, 'day').format(EFormat['DD-MM-YYYY']),
              toDate: dataChanged.clone().add(rangeDays, 'day').format(EFormat['DD-MM-YYYY']),
            });
          }}
        />
      </div>
      <div className="CalendarSelect-body">
        <Row justify="space-between">
          {dayArr.map((item) => {
            const isIncludeSchedules = schedules
              ?.map((orderSchedule) => formatISODateToDateTime(orderSchedule.date, EFormat['DD-MM-YYYY']))
              .includes(item.format(EFormat['DD-MM-YYYY']));

            const isToday = moment().format(EFormat['DD-MM-YYYY']) === item.format(EFormat['DD-MM-YYYY']);
            const isDisabled = disabledDate?.(item);

            return (
              <Col key={item.valueOf()}>
                <div
                  className={classNames('CalendarSelect-item', size, {
                    active: value && value?.format(EFormat['DD/MM/YYYY']) === item.format(EFormat['DD/MM/YYYY']),
                    today: isToday,
                    disabled: isDisabled,
                  })}
                  onClick={(): void => {
                    if (!isDisabled) onChange?.(item);
                  }}
                >
                  <div className="CalendarSelect-item-description">{item.format('ddd')}</div>
                  <div className="CalendarSelect-item-title">{item.format('DD')}</div>
                  {isIncludeSchedules && <div className="CalendarSelect-item-dot" />}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CalendarSelect;
