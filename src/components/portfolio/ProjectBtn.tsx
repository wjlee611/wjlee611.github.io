import useObserver from "@/hooks/useObserver";
import clsWrapper from "@/utils/class-wrapper";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { slideToRight1, slideToRight2 } from "@/utils/variants";

interface IProjectBtn {
  image: StaticImageData;
  name: string;
  period: string;
  isActive?: boolean;
  children?: ReactNode;
}

export default function ProjectBtn({
  image,
  name,
  period,
  isActive = false,
  children,
}: IProjectBtn) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersect = useObserver({ ref: targetRef });

  return (
    <motion.div
      className="flex flex-col md:flex-row items-start justify-start space-y-3 md:space-y-0 md:space-x-10"
      ref={targetRef}
      variants={slideToRight1}
      initial={false}
      animate={isIntersect ? "view" : "notView"}
    >
      <Image
        className="rounded-[2rem] w-[160px] h-[160px] aspect-square object-cover"
        width={160}
        height={160}
        src={image}
        alt={image.src}
      />
      <motion.div
        className="flex flex-col"
        variants={slideToRight2}
        initial={false}
        animate={isIntersect ? "view" : "notView"}
      >
        <span className="text-white text-2xl font-black">{name}</span>
        <div className="flex space-x-2 my-5">
          <span
            className={clsWrapper(
              "text-white px-1 rounded-md",
              isActive ? "bg-green-500" : "bg-slate-400"
            )}
          >
            {isActive ? "Active" : "Deprecated"}
          </span>
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-bold">
            {period}
          </span>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}
