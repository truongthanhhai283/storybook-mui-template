import type { AppProps } from "next/app";
import getConfig from "next/config";
import Head from "next/head";

import AppProgress from "@/components/molecules/AppProgress";
import ErrorBoundary from "@/components/molecules/ErrorBoundary";
import MuiProvider from "@/lib/mui/MuiProvider";
import SWRProvider from "@/lib/swr/SWRProvider";
import type { NextPageWithLayout } from "@/types/layouts";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const { publicRuntimeConfig } = getConfig();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const page = (Component.getLayout ?? ((page) => page))(
    <Component {...pageProps} />
  );

  return (
    <>
      <Head>
        <title>{publicRuntimeConfig.appTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ErrorBoundary>
        <MuiProvider>
          <SWRProvider>{page}</SWRProvider>
        </MuiProvider>
        <AppProgress />
      </ErrorBoundary>
    </>
  );
}
