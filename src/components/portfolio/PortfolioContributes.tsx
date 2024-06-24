import ProjectBtn from "./projects/ProjectBtn";
import iconArkhive from "@/../public/images/icon_arkhive.png";
import iconEcosim from "@/../public/images/icon_ecosim.png";
import iconHonbab from "@/../public/images/icon_honbab.png";
import iconKiosk from "@/../public/images/icon_talk_kiosk.png";
import iconKwangSaeng from "@/../public/images/icon_kwang_saeng.png";
import iconKiddyMarket from "@/../public/images/icon_kiddy_market.png";
import iconImotionForest from "@/../public/images/icon_emotion_forest.png";
import KiddyMarketDetail from "./projects/kiddy_market/KiddyMarketDetail";
import KiddyMarketTxt from "./projects/kiddy_market/KiddyMarketTxt";
import ArkhiveDetail from "./projects/arkhive/ArkhiveDetail";
import ArkhiveTxt from "./projects/arkhive/ArkhiveTxt";
import ImotionForestDetail from "./projects/imotion_forest/ImotionForestDetail";
import ImotionForestTxt from "./projects/imotion_forest/ImotionForestTxt";
import EcosimTxt from "./projects/ecosim/EcosimTxt";
import EcosimDetail from "./projects/ecosim/EcosimDetail";
import HonbabSignalTxt from "./projects/honbab_signal/HonbabSignalTxt";
import HonbabSignalDetail from "./projects/honbab_signal/HonbabSignalDetail";
import TalkKioskTxt from "./projects/talk_kiosk/TalkKioskTxt";
import KwangSaengDetail from "./projects/kwang_saeng/KwangSaengDetail";
import KwangSaengTxt from "./projects/kwang_saeng/KwangSaengTxt";

export default function PortfolioContributes() {
  return (
    <div className="space-y-20">
      <ProjectBtn
        image={iconKwangSaeng}
        name="광생"
        isActive
        period="2024.05 ~"
        detailChildren={<KwangSaengDetail />}
      >
        <KwangSaengTxt />
      </ProjectBtn>

      <ProjectBtn
        image={iconKiddyMarket}
        name="키디마켓"
        period="2024.03 ~ 2024.06"
        detailChildren={<KiddyMarketDetail />}
      >
        <KiddyMarketTxt />
      </ProjectBtn>

      <ProjectBtn
        image={iconImotionForest}
        name="감정의 숲"
        period="2024.01 ~ 2024.05"
        detailChildren={<ImotionForestDetail />}
      >
        <ImotionForestTxt />
      </ProjectBtn>

      <ProjectBtn
        image={iconArkhive}
        name="Arkhive"
        isActive
        period="2023.01 ~ "
        detailChildren={<ArkhiveDetail />}
      >
        <ArkhiveTxt />
      </ProjectBtn>

      <ProjectBtn
        image={iconEcosim}
        name="Ecosim"
        isActive
        period="2023.06 ~ "
        detailChildren={<EcosimDetail />}
      >
        <EcosimTxt />
      </ProjectBtn>

      <ProjectBtn
        image={iconHonbab}
        name="혼밥시그널"
        period="2022.06 ~ 2024.01"
        detailChildren={<HonbabSignalDetail />}
      >
        <HonbabSignalTxt />
      </ProjectBtn>

      <ProjectBtn
        image={iconKiosk}
        name="말하는 사이에 주문 완료!"
        period="2022.08 ~ 2022.12"
      >
        <TalkKioskTxt />
      </ProjectBtn>
    </div>
  );
}
