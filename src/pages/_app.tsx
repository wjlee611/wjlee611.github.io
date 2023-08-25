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

dayjs.locale("ko");

// timer
let debounceTimer: any = null;
let onProgress: boolean = false;

export default function App({ Component, pageProps, router }: AppProps) {
  const [onTransition, setOnTransition] = useState(false);

  const start = () => {
    if (onProgress) {
      return;
    }
    progress.start();
    setOnTransition(true);
    onProgress = true;
  };

  const finish = () => {
    progress.finish();
    onProgress = false;

    setTimeout(() => {
      setOnTransition(false);
    }, 410);
  };

  const handleBeforePopState = ({ url, as, options }: any) => {
    start();

    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }

    // 0.2초간 router 이동이 없을 때 이동함.
    debounceTimer = setTimeout(() => {
      debounceTimer = null;
      router.push(url, as, options);
    }, 210);

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
  }, [router]);

  return (
    <div
      className={clsWrapper(
        inter.className,
        "text-center transition-all",
        onTransition ? "w-screen h-screen overflow-hidden" : ""
      )}
    >
      <Head>
        <title>웅덩이</title>
      </Head>
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        presenceAffectsLayout
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  );
}
