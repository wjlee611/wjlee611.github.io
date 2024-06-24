import { slideToLeft1 } from "@/constants/variants";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface IProjectDetail {
  isIntersect: boolean;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export default function ProjectDetail({
  isIntersect,
  isExpanded,
  setIsExpanded,
  children,
}: IProjectDetail) {
  return (
    <motion.div
      className="w-full flex flex-col mt-5"
      variants={slideToLeft1}
      initial={false}
      animate={isIntersect ? "view" : "notView"}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="flex flex-col items-start overflow-hidden relative"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              height: {
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
          >
            <div className="absolute top-0 left-0 w-10 h-full border-x-yellow-400 border-y-yellow-500 rounded-tr-md rounded-br-md border-t-2 border-r-2 border-b-2" />
            <div className="flex flex-col items-start ml-20 py-10 space-y-5">
              {children}
              <button
                className="border rounded-md px-2"
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                {isExpanded ? "접기" : "더보기"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
