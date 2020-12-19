import NerSumData from '../data/ner-sum.json';

import React from 'react';
import DoughnutChart from './doughnut-chart';

const EntityCounts = ({ entities, className }) => {
  const formatData = (entities) =>
    entities.map((e) => {
      return {
        label: e,
        value: NerSumData[e],
      };
    });

  return (
    <div className={className}>
      <DoughnutChart data={formatData(entities)} title="All-time count" />
    </div>
  );
};

export default EntityCounts;
