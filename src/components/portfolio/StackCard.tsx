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
import { slideToRight1 } from "@/constants/variants";

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
      className="flex"
      ref={targetRef}
      variants={slideToRight1}
      initial={false}
      animate={isIntersect ? "view" : "notView"}
    >
      <div className="flex items-center space-x-10">
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
          <StackGraphRed type="favor" value={stackMaxVal("favor")} />
          <StackGraphWhite type="favor" value={value.favor} />
          <span className="text-white absolute top-4 -right-1">{BsFire()}</span>
          <StackGraphRed type="skill" value={stackMaxVal("skill")} />
          <StackGraphWhite type="skill" value={value.skill} />
          <span className="text-white absolute bottom-4 -right-1">
            {GoProjectRoadmap()}
          </span>
          <StackGraphRed type="singleProj" value={stackMaxVal("singleProj")} />
          <StackGraphWhite type="singleProj" value={value.singleProj} />
          <span className="text-white absolute -bottom-3">
            {LiaProjectDiagramSolid()}
          </span>
          <StackGraphRed type="teamProj" value={stackMaxVal("teamProj")} />
          <StackGraphWhite type="teamProj" value={value.teamProj} />
          <span className="text-white absolute bottom-4 -left-1">
            {AiOutlineExport()}
          </span>
          <StackGraphRed type="releases" value={stackMaxVal("releases")} />
          <StackGraphWhite type="releases" value={value.releases} />
          <span className="text-white absolute top-4 -left-1">
            {BiGitMerge()}
          </span>
          <StackGraphRed
            type="contributes"
            value={stackMaxVal("contributes")}
          />
          <StackGraphWhite type="contributes" value={value.contributes} />
        </div>
      </div>
    </motion.div>
  );
}
