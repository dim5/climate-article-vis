import { render } from '@testing-library/react';

import Footer from './footer';

it('should render', () => {
  const { container } = render(<Footer />);

  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<footer class=\\"footer__StyledFooter-wbh7sb-0 gkaqoC\\">© 2020 <a href=\\"https://marczin.dev\\">marczin.dev</a></footer>"`
  );
});
