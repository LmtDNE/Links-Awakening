import { Global } from '@emotion/react';
import GlobalStyles from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
