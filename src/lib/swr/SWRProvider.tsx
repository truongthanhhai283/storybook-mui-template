import getConfig from "next/config";
import type { ReactNode } from "react";
import type { SWRConfiguration } from "swr";
import { SWRConfig } from "swr";

type Props = {
  children: ReactNode;
};

const { publicRuntimeConfig } = getConfig();
const baseURL: string = publicRuntimeConfig.apiBaseURL;

const options: SWRConfiguration = {
  revalidateOnReconnect: false,
  fetcher: async (resource: string, init?: RequestInit) => {
    const request = resource.includes(baseURL)
      ? resource
      : `${baseURL}/api${resource}`;
    return fetch(request, init).then((response) => response.json());
  },
};

export default function SWRProvider({ children }: Props) {
  return <SWRConfig value={options}>{children}</SWRConfig>;
}
