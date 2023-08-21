import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import clsWrapper from "@/utils/class-wrapper";

interface IHeaderNavBtn {
  href: string;
  text: string;
}

export default function HeaderNavBtn({ href, text }: IHeaderNavBtn) {
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
          "h-full flex items-center transition-colors",
          isSelect() ? "text-mypink" : "",
          router.asPath === href ? "pointer-events-none" : ""
        )}
        href={href}
      >
        {text}
      </Link>
      {isSelect() ? (
        <motion.div
          layoutId="nav_bar"
          className="w-full h-[2px] bg-mypink absolute bottom-0 left-0 blur-[2px]"
        />
      ) : null}
    </li>
  );
}
