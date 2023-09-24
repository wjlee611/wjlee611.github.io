import { stackConsts } from "@/constants/stackConst";
import StackCard from "./StackCard";
import flutterIcon from "@/../public/images/icon_flutter.png";
import reactIcon from "@/../public/images/icon_react.png";
import nextIcon from "@/../public/images/icon_next.png";

export default function PortfolioStacks() {
  return (
    <div className="space-y-20">
      <StackCard
        image={flutterIcon}
        name="Flutter"
        value={stackConsts.flutter}
      />
      <StackCard image={reactIcon} name="React" value={stackConsts.react} />
      <StackCard image={nextIcon} name="Next JS" value={stackConsts.next} />
    </div>
  );
}
