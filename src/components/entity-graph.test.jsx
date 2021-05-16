import { render } from '@testing-library/react';

import EntityGraph from './entity-graph';

jest.mock('react-force-graph-3d', () => () => <div />);
jest.mock('react-force-graph-2d', () => () => <div />);

it('should render', () => {
  const { container } = render(<EntityGraph />);

  expect(container.innerHTML).toMatchSnapshot();
});
