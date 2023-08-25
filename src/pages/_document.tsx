import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/icon_circle.png" />
        <meta name="description" content="웅덩이" />
        <meta name="apple-mobile-web-app-title" content="웅덩이" />
        <meta name="application-name" content="웅덩이" />
        <meta name="theme-color" content="#009c39" />
      </Head>
      <body className="scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
