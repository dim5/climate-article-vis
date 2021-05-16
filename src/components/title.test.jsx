import { render } from '@testing-library/react';

import Title from './title';

it('should render', () => {
  const { container } = render(<Title>Test title</Title>);

  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<h1 class=\\"title__Title-go6zyz-0 eVtdgJ\\">Test title</h1>"`
  );
});
