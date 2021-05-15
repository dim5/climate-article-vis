import { render } from '@testing-library/react';
import './__mocks__/resize-observer.mock.js';

import TimeSeries from './time-series';

const entities = ['AUSTRALIA', 'CALIFORNIA'];

it('should render', () => {
  const { container } = render(<TimeSeries entities={entities} />);
  expect(container.innerHTML).toMatchSnapshot();
});
