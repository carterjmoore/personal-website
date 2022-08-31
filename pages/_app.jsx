import Header from '../components/layout/Header';
import { MobileContextProvider } from '../context/MobileContext';
import { ModalContextProvider } from '../context/ModalContext';
import { ScrollContextProvider } from '../context/ScrollContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ScrollContextProvider>
      <ModalContextProvider>
        <MobileContextProvider>
          <Header />
          <Component {...pageProps} />
        </MobileContextProvider>
      </ModalContextProvider>
    </ScrollContextProvider>
  );
}

export default MyApp;
