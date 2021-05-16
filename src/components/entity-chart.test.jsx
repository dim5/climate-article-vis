import { render } from '@testing-library/react';
import './__mocks__/resize-observer.mock.js';
import EntityChart from './entity-chart';

it('should render', async () => {
  const { container } = render(<EntityChart title="Test" />);
  expect(container).toMatchSnapshot();
});
