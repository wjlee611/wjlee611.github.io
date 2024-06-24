import useObserver from "@/hooks/useObserver";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fade } from "@/constants/variants";
import ContributeCommitCard from "./ContributeCommitCard";
import { IContributeConst } from "@/constants/contributeConst";

interface IContributeCard {
  contribute: IContributeConst;
}

export default function ContributeCard({ contribute }: IContributeCard) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersect = useObserver({ ref: targetRef, threshold: 1 });

  return (
    <motion.div
      className="relative"
      ref={targetRef}
      variants={fade}
      initial={false}
      animate={isIntersect ? "view" : "notView"}
    >
      <div className="absolute top-[7px] -left-[7px] flex items-center">
        <div className="w-3 h-3 rounded-full border-2 border-yellow-400" />
        <div className="w-8 h-[2px] bg-yellow-400" />
      </div>
      <div className="flex flex-col ml-9">
        <a
          className="w-fit text-lg text-black bg-yellow-400 rounded-lg px-2"
          href={contribute.packageLink.toString()}
          target="_blank"
        >
          {contribute.packageName}
        </a>
        <ol className="relative flex flex-col items-start ml-5 pt-5 space-y-3">
          {contribute.commits.map((commit, i) => (
            <ContributeCommitCard key={i} commit={commit} />
          ))}
        </ol>
      </div>
    </motion.div>
  );
}
