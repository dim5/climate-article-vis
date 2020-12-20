import React, { useRef, useEffect } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';
import styled from 'styled-components/macro';
import { colorMap } from '../util/constants';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  TimeScale,
  LinearScale,
  Title,
  Legend,
  Tooltip
);

const LineChartContainer = styled.div`
  position: relative;
`;

const lineCharOptions = {
  maintainAspectRatio: false,
  aspectRatio: 2.5,
  scales: {
    x: {
      type: 'time',
      display: true,
      scaleLabel: {
        display: false,
      },
      ticks: {
        major: {
          enabled: true,
        },
        color: (context) => context.tick && context.tick.major && '#FF0000',
        font: function (context) {
          if (context.tick && context.tick.major) {
            return {
              style: 'bold',
            };
          }
        },
      },
      time: {
        minUnit: 'day',
        tooltipFormat: 'MMMM D, YYYY',
      },
    },

    y: {
      ticks: {
        min: 0,
      },
      scaleLabel: {
        display: true,
        labelString: 'Article count',
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
      onClick: undefined,
    },
  },
};

function LineChart({ lines, className }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const createData = (lines) => {
      return {
        labels: lines[0].data.map((d) => d.date),
        datasets: lines.map((line, index) => {
          return {
            label: line.title,
            data: line.data.map((d) => d.value),
            fill: 'none',
            backgroundColor: colorMap[index],
            pointRadius: 2,
            borderColor: colorMap[index],
            borderWidth: 1,
          };
        }),
      };
    };

    if (!!chartRef.current) {
      const chart = chartRef.current;
      if (!lines || lines.length === 0) {
        chart.data.datasets = [];
        chart.update();
      } else {
        chart.data = createData(lines);
        chart.update();
      }
    } else {
      const chart = new Chart(canvasRef.current, {
        type: 'line',
        options: lineCharOptions,
        data: createData(lines),
      });
      chartRef.current = chart;
    }
  }, [lines, chartRef, canvasRef]);

  return (
    <LineChartContainer className={className}>
      <canvas ref={canvasRef} />
    </LineChartContainer>
  );
}

export default LineChart;
