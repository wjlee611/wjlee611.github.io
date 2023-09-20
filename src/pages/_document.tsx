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
        <meta
          name="google-site-verification"
          content="vhQ9DaDdUJcSBHKI_U6tAtE61zwz2i2pLQXyZ62GRLk"
        />
        <meta
          name="naver-site-verification"
          content="07764cc1a8eda55b4bdf78cf846d6811d042b9ee"
        />
      </Head>
      <body className="text-primary transition-[background] bg-white dark:bg-[#1A1C23]">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const theme = localStorage.getItem("theme");
            const getUserTheme = () => {
             if(theme){
              return theme
             } 
             return window.matchMedia('(prefers-color-scheme: dark)').matches
             ? 'dark'
             : 'light'
          }
          document.body.dataset.theme = getUserTheme();
          `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
