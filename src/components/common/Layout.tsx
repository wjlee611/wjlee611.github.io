import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <motion.main
      className="inline-block w-full relative pt-16 px-8 md:px-16 max-w-4xl 2xl:max-w-5xl"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{
        scale: {
          ease: "circOut",
          duration: 0.18,
        },
        opacity: {
          duration: 0.1,
        },
      }}
    >
      {children}
    </motion.main>
  );
}
