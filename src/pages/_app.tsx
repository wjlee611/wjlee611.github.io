import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import type { AppProps } from "next/app";
import { Nanum_Gothic } from "next/font/google";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/common/Header";
import clsWrapper from "@/utils/class-wrapper";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

const progress = new ProgressBar({
  size: 2,
  color: "#3b82f6",
  className: "bar-of-progress",
  delay: 0,
});

dayjs.locale("ko");

// timer
let debounceTimer: any = null;
let transitionTimer: any = null;
let onProgress: boolean = false;

export default function App({ Component, pageProps, router }: AppProps) {
  const [onTransition, setOnTransition] = useState(false);

  const start = () => {
    window.scroll(0, 0);
    if (onProgress) {
      return;
    }

    progress.start();
    onProgress = true;
    setOnTransition(true);
    clearTimeout(transitionTimer);
  };

  const finish = () => {
    progress.finish();
    onProgress = false;

    transitionTimer = setTimeout(() => {
      setOnTransition(false);
    }, 400);
  };

  const handleBeforePopState = ({ url, as, options }: any) => {
    start();

    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    // 0.2초간 router 이동이 없을 때 이동함.
    debounceTimer = setTimeout(() => {
      if (onTransition) {
        clearTimeout(debounceTimer);
        debounceTimer = null;
        return;
      }
      debounceTimer = null;
      router.push(url, as, options);
    }, 200);

    // Allow the route change
    return false;
  };

  useEffect(() => {
    router.beforePopState(handleBeforePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", finish);
    router.events.on("routeChangeError", finish);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", finish);
      router.events.off("routeChangeError", finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <ThemeProvider attribute="class">
      <div
        className={clsWrapper(
          nanumGothic.className,
          "text-center transition-all NanumSquareNeo",
          onTransition ? "w-screen h-screen overflow-x-hidden" : ""
        )}
      >
        <Head>
          <title>웅덩이</title>
          <link
            rel="canonical"
            href={`https://wjlee611.github.io${router.asPath}`}
            key="canonical"
          />
        </Head>
        <Header />
        <AnimatePresence
          mode="wait"
          initial={false}
          presenceAffectsLayout={true}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
