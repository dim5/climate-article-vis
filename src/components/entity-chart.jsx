import NerSumData from '../data/ner-sum.json';

import React, { useState } from 'react';
import { Select } from 'antd';
import styled from 'styled-components/macro';

import TimeSeries from './time-series';
import EntityCounts from './entity-counts';

const VisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: minmax(240px, 4fr) minmax(240px, 1fr);
  }
`;

const SelectMenu = styled(Select)`
  grid-row: 0;
  grid-column-start: span 2;
  justify-self: center;
  min-width: 40%;
`;

const EntityChart = () => {
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
      <EntityCounts
        entities={selectedEntities}
        css={`
          align-self: center;
        `}
      />
    </VisContainer>
  );
};

export default EntityChart;
