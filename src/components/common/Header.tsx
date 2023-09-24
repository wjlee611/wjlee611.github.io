import { AnimatePresence } from "framer-motion";
import HeaderNavBtn from "./HeaderNavBtn";
import Link from "next/link";
import { BsListNested } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import clsWrapper from "@/utils/class-wrapper";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const resize = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <AnimatePresence>
      <header className="fixed top-0 left-0 right-0 mx-anuo w-screen h-16 flex justify-between items-center px-10 backdrop-blur bg-blue-200 bg-opacity-20 z-50">
        <div className="h-full flex items-center">
          <Link
            onClick={() => setIsOpen(false)}
            href="/"
            className="h-16 aspect-square flex justify-center items-center text-3xl select-none cursor-pointer"
          >
            🫧
          </Link>
          <nav className="h-full hidden md:flex space-x-8 overflow-hidden ml-10">
            <HeaderNavBtn href="/" text="Portfolio" />
            <HeaderNavBtn href="/blog" text="Blog" />
            <HeaderNavBtn href="/arkhive" text="Arkhive" />
          </nav>
        </div>
        <div className="flex items-center">
          <ThemeSwitch />
          <button
            className={clsWrapper(
              "flex md:hidden items-center justify-center w-16 h-16 text-2xl",
              router.asPath === "/"
                ? "text-white"
                : "text-black dark:text-white"
            )}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? RxCross2() : BsListNested()}
          </button>
        </div>
      </header>
      {isOpen ? (
        <motion.div
          onClick={() => setIsOpen(false)}
          className="w-screen h-screen fixed top-0 right-0 z-10 bg-black bg-opacity-20"
          key="header_nav_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      ) : null}
      {isOpen ? (
        <motion.nav
          className="w-80 flex flex-col fixed right-0 left-0 mx-auto backdrop-blur bg-white bg-opacity-20 rounded-md px-4 divide-y divide-white border-2 border-white border-opacity-30 z-20"
          key="header_nav"
          initial={{ top: "2rem", opacity: 0 }}
          animate={{ top: "5rem", opacity: 1 }}
          exit={{ top: "2rem", opacity: 0 }}
        >
          <HeaderNavBtn
            href="/"
            text="Portfolio"
            onClick={() => setIsOpen(false)}
          />
          <HeaderNavBtn
            href="/blog"
            text="Blog"
            onClick={() => setIsOpen(false)}
          />
          <HeaderNavBtn
            href="/arkhive"
            text="Arkhive"
            onClick={() => setIsOpen(false)}
          />
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
