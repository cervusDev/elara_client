import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/global';
import { MiddlewareProviders } from '../providers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MiddlewareProviders>
      <GlobalStyles />
      <Component {...pageProps} />
    </MiddlewareProviders>
  );
}

export default MyApp;
