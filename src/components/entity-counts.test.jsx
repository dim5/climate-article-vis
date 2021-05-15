import { render } from '@testing-library/react';
import './__mocks__/resize-observer.mock.js';

import EntityCounts from './entity-counts';

const data = ['AUSTRALIA', 'CALIFORNIA'];

it('should render', async () => {
  const { container } = render(<EntityCounts entities={data} />);
  expect(container).toMatchSnapshot();
});
