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
import { Router } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const progress = new ProgressBar({
  size: 2,
  color: "#fe9599",
  className: "bar-of-progress",
  delay: 0,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

dayjs.locale("ko");

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={clsWrapper(inter.className)}>
      <Head>
        <title>웅덩이</title>
      </Head>
      <Header />
      <div className="w-screen h-screen overflow-hidden">
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </div>
  );
}
