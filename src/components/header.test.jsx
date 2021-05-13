import { render } from '@testing-library/react';

import Header from './header';

it('should render', () => {
  const { container } = render(<Header />);
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<header class=\\"header__StyledHeader-ay7a2v-1 nMiYK\\"><div class=\\"header__LogoContainer-ay7a2v-2 iQwcpR\\"><h1 class=\\"title__Title-go6zyz-0 header___StyledTitle-ay7a2v-3 dlNAgZ fWfNVo\\">Climate Article Analysis</h1><svg title=\\"Earth\\" class=\\"header__StyledLogo-ay7a2v-0 gAucao\\">logo.svg</svg></div><section class=\\"header___StyledSection-ay7a2v-4 cKAORi\\">I collected and analyzed <em>(using various NLP methods)</em> more than 16 000 articles about climate change and global warming from November 2019 to August 2020.<wbr> On this page, you can view some of the results.</section></header>"`
  );
});
