import Image, { StaticImageData } from "next/image";
import StackGraphRed from "./StackGraphRed";
import StackGraphWhite from "./StackGraphWhite";
import { motion } from "framer-motion";
import { ITechConsts, stackMaxVal } from "@/constants/stackConst";
import { MdFavoriteBorder } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { AiOutlineExport } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";
import { useRef } from "react";
import useObserver from "@/hooks/useObserver";
import { slideToRight1, slideToRight2 } from "@/constants/variants";
import StackStatCard from "./StackStatCard";

interface IStackCard {
  image: StaticImageData;
  name: string;
  value: ITechConsts;
}

export default function StackCard({ image, name, value }: IStackCard) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isIntersect = useObserver({ ref: targetRef });

  return (
    <motion.div
      className="flex md:flex-row flex-col md:space-x-14 space-y-5 md:space-y-0 items-start"
      ref={targetRef}
      variants={slideToRight1}
      initial={false}
      animate={isIntersect ? "view" : "notView"}
    >
      <div className="flex items-center space-x-10 mt-5">
        <Image
          className="flex w-[100px] h-[100px]"
          width={100}
          height={100}
          src={image}
          alt={image.src}
        />
        <div className="w-24 h-24 relative flex items-center justify-center">
          <span className="text-white absolute -top-3">
            {MdFavoriteBorder()}
          </span>
          <StackGraphRed
            isView={isIntersect}
            type="favor"
            value={stackMaxVal("favor")}
          />
          <StackGraphWhite
            isView={isIntersect}
            type="favor"
            value={value.favor}
          />
          <span className="text-white absolute top-4 -right-1">{BsFire()}</span>
          <StackGraphRed
            isView={isIntersect}
            type="skill"
            value={stackMaxVal("skill")}
          />
          <StackGraphWhite
            isView={isIntersect}
            type="skill"
            value={value.skill}
          />
          <span className="text-white absolute bottom-4 -right-1">
            {GoProjectRoadmap()}
          </span>
          <StackGraphRed
            isView={isIntersect}
            type="singleProj"
            value={stackMaxVal("singleProj")}
          />
          <StackGraphWhite
            isView={isIntersect}
            type="singleProj"
            value={value.singleProj}
          />
          <span className="text-white absolute -bottom-3">
            {LiaProjectDiagramSolid()}
          </span>
          <StackGraphRed
            isView={isIntersect}
            type="teamProj"
            value={stackMaxVal("teamProj")}
          />
          <StackGraphWhite
            isView={isIntersect}
            type="teamProj"
            value={value.teamProj}
          />
          <span className="text-white absolute bottom-4 -left-1">
            {AiOutlineExport()}
          </span>
          <StackGraphRed
            isView={isIntersect}
            type="releases"
            value={stackMaxVal("releases")}
          />
          <StackGraphWhite
            isView={isIntersect}
            type="releases"
            value={value.releases}
          />
          <span className="text-white absolute top-4 -left-1">
            {BiGitMerge()}
          </span>
          <StackGraphRed
            isView={isIntersect}
            type="contributes"
            value={stackMaxVal("contributes")}
          />
          <StackGraphWhite
            isView={isIntersect}
            type="contributes"
            value={value.contributes}
          />
        </div>
      </div>
      <motion.div
        className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2"
        variants={slideToRight2}
        initial={false}
        animate={isIntersect ? "view" : "notView"}
      >
        <div className="lg:col-span-2 text-white border-b border-red-500 flex items-start">
          <span className="bg-red-500 py-1px px-3 rounded-t-sm">{name}</span>
        </div>
        <StackStatCard
          cat="favor"
          value={value.favor}
          max={stackMaxVal("favor")}
        />
        <StackStatCard
          cat="skill"
          value={value.skill}
          max={stackMaxVal("skill")}
        />
        <StackStatCard cat="singleProj" value={value.singleProj} />
        <StackStatCard cat="teamProj" value={value.teamProj} />
        <StackStatCard cat="releases" value={value.releases} />
        <StackStatCard cat="contributes" value={value.contributes} />
      </motion.div>
    </motion.div>
  );
}
