import { AnimatePresence } from "framer-motion";
import HeaderNavBtn from "./HeaderNavBtn";
import Link from "next/link";

export default function Header() {
  return (
    <AnimatePresence>
      <header className="fixed top-0 left-0 w-screen h-16 flex px-20 backdrop-blur bg-white bg-opacity-20 z-10">
        <Link
          href="/"
          className="h-16 aspect-square flex justify-center items-center text-3xl mr-20 select-none cursor-pointer"
        >
          💦
        </Link>
        <nav className="h-full flex space-x-8 overflow-hidden">
          <HeaderNavBtn href="/" text="Portfolio" />
          <HeaderNavBtn href="/blog" text="Blog" />
        </nav>
      </header>
    </AnimatePresence>
  );
}
