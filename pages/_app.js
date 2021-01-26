import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />

      <GlobalStyles />
    </div>
  )
}

export default MyApp
