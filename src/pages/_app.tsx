import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/common/Header";
import clsWrapper from "@/utils/class-wrapper";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const progress = new ProgressBar({
  size: 2,
  color: "#fe9599",
  className: "bar-of-progress",
  delay: 0,
});

const start = () => {
  if (onProgress) {
    return;
  }
  progress.start();
  onProgress = true;
};

const finish = () => {
  progress.finish();
  onProgress = false;
};

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", start);
Router.events.on("routeChangeComplete", finish);
Router.events.on("routeChangeError", finish);

dayjs.locale("ko");

// timer
let debounceTimer: any = null;
let onProgress: boolean = false;

export default function App({ Component, pageProps, router }: AppProps) {
  const [onTransition, setOnTransition] = useState(false);

  const handleBeforePopState = ({ url, as, options }: any) => {
    start();

    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    // 0.2초간 router 이동이 없을 때 이동함.
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      setOnTransition(true);
      router.push(url, as, options);
    }, 200);

    // Allow the route change
    return false;
  };

  useEffect(() => {
    if (onTransition) {
      setTimeout(() => {
        setOnTransition(false);
      }, 400);
    }
  }, [onTransition]);

  useEffect(() => {
    router.beforePopState(handleBeforePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={clsWrapper(
        inter.className,
        "text-center",
        onTransition ? "w-screen h-screen overflow-hidden scrollbar-hide" : ""
      )}
    >
      <Head>
        <title>웅덩이</title>
      </Head>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}
