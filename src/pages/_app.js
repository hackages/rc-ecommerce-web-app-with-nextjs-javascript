import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import AuthContextProvider from '../state/AuthContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
