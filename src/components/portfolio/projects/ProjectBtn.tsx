import useObserver from "@/hooks/useObserver";
import clsWrapper from "@/utils/class-wrapper";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideToRight1, slideToRight2 } from "@/constants/variants";
import ProjectDetail from "./ProjectDetail";

interface IProjectBtn {
  image: StaticImageData;
  name: string;
  period: string;
  isActive?: boolean;
  children?: ReactNode;
  detailChildren?: ReactNode;
}

export default function ProjectBtn({
  image,
  name,
  period,
  isActive = false,
  children,
  detailChildren,
}: IProjectBtn) {
  const [isExpanded, setIsExpanded] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersect = useObserver({
    ref: targetRef,
    threshold: isExpanded ? 0 : 0.8,
  });

  return (
    <motion.div
      className="flex flex-col"
      ref={targetRef}
      variants={slideToRight1}
      initial={false}
      animate={isIntersect ? "view" : "notView"}
    >
      <div className="w-auto flex flex-col ml-10 md:flex-row items-start justify-start space-y-3 md:space-y-0 md:space-x-10">
        <Image
          className="rounded-[2rem] w-[160px] h-[160px] aspect-square object-cover"
          width={160}
          height={160}
          src={image}
          alt={image.src}
        />
        <motion.div
          className="w-full flex flex-col"
          variants={slideToRight2}
          initial={false}
          animate={isIntersect ? "view" : "notView"}
        >
          <div className="flex justify-between">
            <span className="text-white text-2xl font-black">{name}</span>
            {detailChildren != null && (
              <button
                className="border rounded-md px-2 mr-4"
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                {isExpanded ? "접기" : "더보기"}
              </button>
            )}
          </div>
          <div className="flex space-x-2 my-5">
            <span
              className={clsWrapper(
                "text-white px-1 rounded-md flex justify-center items-center",
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
      </div>
      <ProjectDetail
        isIntersect={isIntersect}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      >
        {detailChildren}
      </ProjectDetail>
    </motion.div>
  );
}
