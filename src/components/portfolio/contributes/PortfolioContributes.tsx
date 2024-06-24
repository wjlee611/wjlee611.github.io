import { blocConst, gyroProviderConst } from "@/constants/contributeConst";
import ContributeCard from "./ContributeCard";

export default function PortfolioContributes() {
  return (
    <div className="space-y-20">
      <ContributeCard contribute={blocConst} />
      <ContributeCard contribute={gyroProviderConst} />
    </div>
  );
}
