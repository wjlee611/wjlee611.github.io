import { StackCategoty } from "@/constants/stackConst";
import { MdFavoriteBorder } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { AiOutlineExport } from "react-icons/ai";
import { BiGitMerge } from "react-icons/bi";

interface IStackStateCard {
  cat: StackCategoty;
  max?: number;
  value: number;
}

export default function StackStatCard({ cat, max, value }: IStackStateCard) {
  return (
    <div className="flex items-center justify-between w-60 bg-black bg-opacity-30 py-1 px-2 rounded-md">
      <span className="flex items-center space-x-3">
        <span>
          {cat === "favor"
            ? MdFavoriteBorder()
            : cat === "skill"
            ? BsFire()
            : cat === "singleProj"
            ? GoProjectRoadmap()
            : cat === "teamProj"
            ? LiaProjectDiagramSolid()
            : cat === "releases"
            ? AiOutlineExport()
            : BiGitMerge()}
        </span>
        <span className="text-white">
          {cat === "favor"
            ? `Favor`
            : cat === "skill"
            ? `Skill`
            : cat === "singleProj"
            ? `Single projects`
            : cat === "teamProj"
            ? `Team projects`
            : cat === "releases"
            ? `Releases`
            : `Contributes`}
        </span>
      </span>
      <span className="text-white">
        {value} {max ? ` / ${max}` : ""}
      </span>
    </div>
  );
}
