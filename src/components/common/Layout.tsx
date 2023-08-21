import { motion, usePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <motion.main
      className="w-full h-full pt-16 px-16"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{
        scale: {
          ease: "circOut",
          duration: 0.2,
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
