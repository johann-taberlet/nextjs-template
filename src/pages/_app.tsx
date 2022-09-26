import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import React from 'react';

import reportAccessibility from '@/utils/report-accessibility';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

reportAccessibility(React);

export default MyApp;
