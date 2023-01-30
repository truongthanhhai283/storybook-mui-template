import type { ReactElement, ReactNode } from "react";

import PageLoading from "@/components/molecules/PageLoading";

type Props = {
  children: ReactNode;
};

const isAuthenticated = false;

function AuthenticatedLayout(props: Props) {
  if (!isAuthenticated) return <PageLoading />;

  return <div>{props.children}</div>;
}

export function getAuthenticatedLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
}
