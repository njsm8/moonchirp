import { type AppType } from 'next/app';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';

import { api } from '~/utils/api';

import '~/styles/globals.css';
import Layout from '~/components/Layout';
import store from '~/redux/store';

const inter = Inter({
  subsets: ['latin'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
};

export default api.withTRPC(MyApp);
