import { render } from '@testing-library/react';

import { HelloWorld } from './hello-world';

describe('HelloWorld', () => {
  it('should render', async () => {
    const { findByText } = render(<HelloWorld />);
    expect(await findByText(/orld/i)).toBeTruthy();
  });
});
