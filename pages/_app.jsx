import Header from '../components/layout/Header';
import { MobileContextProvider } from '../context/MobileContext';
import { ModalContextProvider } from '../context/ModalContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <MobileContextProvider>
        <Header />
        <Component {...pageProps} />
      </MobileContextProvider>
    </ModalContextProvider>
  );
}

export default MyApp;
