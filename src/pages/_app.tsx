import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Layout from "~/components/Layout";

const inter = Inter({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
    </Layout>

  );
};

export default api.withTRPC(MyApp);
