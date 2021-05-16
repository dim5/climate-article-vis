import { render } from '@testing-library/react';
import './__mocks__/resize-observer.mock.js';
import DoughnutChart from './doughnut-chart';

const testData = [
  { label: 'test 1', value: 23 },
  { label: 'test 2', value: 42 },
];

it('should render a canvas', async () => {
  const { container } = render(<DoughnutChart data={testData} title="Test" />);
  expect(container).toContainHTML('canvas');
});
