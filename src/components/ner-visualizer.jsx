import NerSumData from '../data/ner-sum.json';

import React, { useState } from 'react';
import { Select, Spin } from 'antd';
import styled from 'styled-components/macro';

import TimeSeries from './time-series';
import NerCounts from './ner-count';

const VisContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 80% 20%;
  align-content: center;
`;

const SelectMenu = styled(Select)`
  grid-row: 0;
  grid-column-start: span 2;
  justify-self: center;
  min-width: 40%;
`;

const LazyGraph = React.lazy(() => import('./ner-graph'));

const NerVisualizer = () => {
  const [selectedEntities, setSelectedEntityList] = useState([
    'AUSTRALIA',
    'CALIFORNIA',
  ]);

  const handleSelectChange = (value) => {
    if (value.length > 5) return;
    setSelectedEntityList(value);
  };

  const selectLabels = Object.keys(NerSumData);

  return (
    <VisContainer>
      <SelectMenu
        showSearch
        placeholder="Select a named entity"
        value={selectedEntities}
        onChange={handleSelectChange}
        optionFilterProp="children"
        mode="multiple"
        showArrow={true}
        className="menu"
      >
        {selectLabels.map((value) => (
          <Select.Option value={value} key={value}>
            {value}
          </Select.Option>
        ))}
      </SelectMenu>
      <TimeSeries
        entities={selectedEntities}
        css={`
          align-self: center;
        `}
      />
      <NerCounts
        entities={selectedEntities}
        css={`
          align-self: center;
        `}
      />

      <React.Suspense
        fallback={
          <Spin
            css={`
              grid-column-start: span 2;
            `}
          />
        }
      >
        <LazyGraph
          css={`
            grid-column-start: span 2;
          `}
        />
      </React.Suspense>
    </VisContainer>
  );
};

export default NerVisualizer;
