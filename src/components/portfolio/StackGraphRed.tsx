import { StackCategoty } from "@/constants/stackConst";
import clsWrapper from "@/utils/class-wrapper";

export interface IStackGraph {
  type: StackCategoty;
  value: number;
}

export const rotateConverter = (type: StackCategoty) => {
  switch (type) {
    case "favor":
      return "top-2";
    case "skill":
      return "top-5 right-6 rotate-[60deg]";
    case "singleProj":
      return "bottom-5 right-6 rotate-[120deg]";
    case "teamProj":
      return "bottom-2 rotate-[180deg]";
    case "releases":
      return "bottom-5 left-6 rotate-[240deg]";
    case "contributes":
      return "top-5 left-6 rotate-[300deg]";
  }
};

export default function StackGraphRed({ type }: IStackGraph) {
  return (
    <div
      className={clsWrapper(
        "absolute w-4 h-10 flex justify-start, z-[2]",
        rotateConverter(type)
      )}
    >
      <div className="w-2 h-10 relative">
        <div className="absolute bottom-0 left-0 w-full h-full bg-red-600 bg-opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-red-600" />
      </div>
    </div>
  );
}
