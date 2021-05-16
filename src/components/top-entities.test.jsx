import { render } from '@testing-library/react';

import TopEntities from './top-entities';

it('should render', () => {
  const { container } = render(<TopEntities />);
  expect(container.innerHTML).toMatchSnapshot();
});
