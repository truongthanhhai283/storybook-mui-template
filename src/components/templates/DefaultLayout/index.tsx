import type { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function DefaultLayout(props: Props) {
  return <div>{props.children}</div>;
}

export function getDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}
