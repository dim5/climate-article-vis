import DailyData from '../data/date-cnts-day.json';
import WeeklyData from '../data/date-cnts-week.json';
import MonthlyData from '../data/date-cnts-month.json';

import React, { useState } from 'react';
import { Radio } from 'antd';
import styled from 'styled-components/macro';
import LineChart from './line-chart';

const timeOptions = [
  { label: 'Daily', value: 'day' },
  { label: 'Weekly', value: 'week' },
  { label: 'Monthly', value: 'month' },
];

const StyledMenu = styled(Radio.Group)`
  margin-top: 10px;
`;

const TimeSeriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TimeSeries = ({ entities }) => {
  const [timeSlice, setTime] = useState(timeOptions[1].value);

  const store = {
    day: DailyData,
    week: WeeklyData,
    month: MonthlyData,
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const formatData = (timeSlice, entities) => {
    return entities.map((e) => {
      return {
        title: e,
        data: Object.entries(store[timeSlice][e]).map((e) => {
          return { date: new Date(e[0]), value: e[1] };
        }),
      };
    });
  };

  return (
    <TimeSeriesContainer>
      <LineChart
        lines={formatData(timeSlice, entities)}
        css={`
          min-height: 300px;
          height: 100%;
          width: 100%;
        `}
      />
      <StyledMenu
        options={timeOptions}
        onChange={handleTimeChange}
        optionType="button"
        buttonStyle="solid"
        value={timeSlice}
      />
    </TimeSeriesContainer>
  );
};

export default TimeSeries;
