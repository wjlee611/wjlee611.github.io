import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <motion.div
      initial={{ scale: 1.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.3, opacity: 0 }}
      transition={{
        scale: {
          ease: "circOut",
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
