import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import "nprogress/nprogress.css";

export default function AppProgress() {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({
      template:
        '<div class="bar" role="bar" style="z-index: 1500; height: 4px;"><div class="peg"></div></div><div class="spinner" role="spinner" style="z-index: 1500;"><div class="spinner-icon" style="height: 20px; width: 20px;"></div></div>',
    });

    const handleStart = (url: string) => {
      const nextUrl = new URL(
        url,
        `${window.location.protocol}//${window.location.host}`
      );

      if (nextUrl.pathname !== router.pathname) {
        NProgress.start();
      }
    };

    const handleEnd = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);
    router.events.on("routeChangeError", handleEnd);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleEnd);
      router.events.off("routeChangeError", handleEnd);
    };
  }, [router.events, router.pathname]);

  return null;
}
