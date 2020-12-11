import React, { useRef, useEffect } from 'react';
import {
  Chart,
  DoughnutController,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { colorMap } from '../util/constants';

Chart.register(DoughnutController, Legend, Title, Tooltip, ArcElement);

const DoughnutChart = ({ data, title }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!!chartRef.current) {
      const chart = chartRef.current;
      chart.data.labels = data.map((d) => d.label);
      chart.data.datasets[0].data = data.map((d) => d.value);
      chart.options.plugins.title.text = title;
      chart.update();
    } else {
      const chart = new Chart(canvasRef.current, {
        type: 'doughnut',
        data: {
          labels: data.map((d) => d.label),
          datasets: [
            {
              data: data.map((d) => d.value),
              backgroundColor: colorMap,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: title,
            },
          },
        },
      });
      chartRef.current = chart;
    }
  }, [data, title]);

  return <canvas ref={canvasRef} />;
};

export default DoughnutChart;
