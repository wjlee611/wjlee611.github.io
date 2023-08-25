import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import { Router } from "next/router";
import clsWrapper from "@/utils/class-wrapper";

let onProgress: boolean = false;

export default function Document() {
  const start = () => {
    if (onProgress) {
      return;
    }
    onProgress = true;
  };

  const finish = () => {
    onProgress = false;
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", finish);
    Router.events.on("routeChangeError", finish);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", finish);
      Router.events.off("routeChangeError", finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router]);

  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/icon_circle.png" />
        <meta name="description" content="웅덩이" />
        <meta name="apple-mobile-web-app-title" content="웅덩이" />
        <meta name="application-name" content="웅덩이" />
        <meta name="theme-color" content="#009c39" />
      </Head>
      <body
        className={clsWrapper(
          onProgress ? "scrollbar-hide overflow-hidden" : ""
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
