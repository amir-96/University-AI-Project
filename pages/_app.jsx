import { GraphDataProvider } from "@/context/GraphContext";
import { SlidebarStatusProvider } from "@/context/SlidebarStatus";
import "@/styles/globals.css";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <GraphDataProvider>
      <SlidebarStatusProvider>
        <div className="font-yekanBakh">
          <Component {...pageProps} />
        </div>
      </SlidebarStatusProvider>
    </GraphDataProvider>
  );
}

export default MyApp;
