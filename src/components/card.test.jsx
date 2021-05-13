import { render } from '@testing-library/react';

import Card from './card';

it('should render without a title', () => {
  const { container } = render(<Card />);

  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"card___StyledSection-sc-15kfqe2-1 cwDZIm\\"></section>"`
  );
});

it('should render with a title', () => {
  const { container } = render(<Card title="Test title" />);
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"card___StyledSection-sc-15kfqe2-1 cwDZIm\\"><h2 class=\\"card__CardTitle-sc-15kfqe2-0 cSFeTB\\">Test title</h2></section>"`
  );
});

it('should render with children', () => {
  const { container } = render(
    <Card title="Test title">
      <p>test p</p>
    </Card>
  );
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<section class=\\"card___StyledSection-sc-15kfqe2-1 cwDZIm\\"><h2 class=\\"card__CardTitle-sc-15kfqe2-0 cSFeTB\\">Test title</h2><p>test p</p></section>"`
  );
});
