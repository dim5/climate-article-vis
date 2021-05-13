import { render } from '@testing-library/react';

import Spinner from './spinner';

it('should render', () => {
  const { container } = render(<Spinner />);
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"ant-spin ant-spin-lg ant-spin-spinning spinner__Spinner-sc-1ueqsiz-0 iTCAqh\\"><span class=\\"ant-spin-dot ant-spin-dot-spin\\"><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i><i class=\\"ant-spin-dot-item\\"></i></span></div>"`
  );
});
