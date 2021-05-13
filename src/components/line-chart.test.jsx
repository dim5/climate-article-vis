import { render } from '@testing-library/react';
import './__mocks__/resize-observer.mock.js';
import LineChart from './line-chart';

const testData = [
  { title: 'test 1', data: [{ date: new Date('2021-01-01'), value: 23 }] },
  { title: 'test 2', data: [{ date: new Date('2021-01-02'), value: 46 }] },
];

it('should render a canvas', async () => {
  const { container } = render(<LineChart lines={testData} />);
  expect(container).toContainHTML('canvas');
});
