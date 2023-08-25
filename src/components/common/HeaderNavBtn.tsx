import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import clsWrapper from "@/utils/class-wrapper";

interface IHeaderNavBtn {
  href: string;
  text: string;
  onClick?: () => void;
}

export default function HeaderNavBtn({ href, text, onClick }: IHeaderNavBtn) {
  const router = useRouter();

  const isSelect = () => {
    if (href === "/") return router.asPath === href;
    if (router.asPath.startsWith(href)) return true;

    return false;
  };

  return (
    <li className="h-full flex items-center list-none relative select-none">
      <Link
        className={clsWrapper(
          "h-full w-full md:w-auto flex items-center transition-colors py-2 md:my-0",
          isSelect() ? "text-mypink" : "",
          router.asPath === href ? "pointer-events-none" : ""
        )}
        href={href}
        onClick={onClick}
      >
        {text}
      </Link>
      {isSelect() ? (
        <motion.div
          layoutId="nav_bar"
          className="hidden md:flex w-full h-[2px] bg-mypink absolute bottom-0 left-0 blur-[2px]"
        />
      ) : null}
    </li>
  );
}
