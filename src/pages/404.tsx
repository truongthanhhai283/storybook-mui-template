import Head from "next/head";

import Center from "@/components/atoms/Center";
import { getDefaultLayout } from "@/components/templates/DefaultLayout";

function Page() {
  return (
    <>
      <Head>
        <title>404 page</title>
      </Head>
      <Center>
        <h1>404 - Page Not Found</h1>
      </Center>
    </>
  );
}

Page.getLayout = getDefaultLayout;

export default Page;
