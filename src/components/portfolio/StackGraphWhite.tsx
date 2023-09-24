import clsWrapper from "@/utils/class-wrapper";
import { IStackGraph, rotateConverter } from "./StackGraphRed";
import { stackMaxVal } from "@/constants/stackConst";

export default function StackGraphWhite({ type, value }: IStackGraph) {
  return (
    <div
      className={clsWrapper(
        "absolute w-4 h-10 flex justify-end",
        rotateConverter(type),
        type === "contributes" ? "" : "z-[1]"
      )}
    >
      <div className="w-2 h-10 relative">
        <div className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-40" />
        <div
          className="absolute bottom-0 left-0 w-full bg-white"
          style={{ height: `calc(${(value / stackMaxVal(type)) * 100}%)` }}
        />
      </div>
    </div>
  );
}
