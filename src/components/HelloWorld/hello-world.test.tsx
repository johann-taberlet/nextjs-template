import { render } from '@testing-library/react';

import HelloWorld from './hello-world';

describe('HelloWorld', () => {
  it('should render', () => {
    const { getByText } = render(<HelloWorld />);
    expect(getByText(/orld/)).toBeTruthy();
  });
});
