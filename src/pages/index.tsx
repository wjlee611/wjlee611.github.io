import Layout from "@/components/common/Layout";
import Background from "@/components/portfolio/Background";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";
import PortfolioStacks from "@/components/portfolio/PortfolioStacks";
import PortfolioTitle from "@/components/portfolio/PortfolioTitle";
import WaterfallLayout from "@/components/portfolio/WaterfallLayout";

export default function Home() {
  return (
    <Layout>
      <Background />
      <div className="h-10" />
      <WaterfallLayout title={`Hello world!`} from="blue" to="gold">
        <PortfolioTitle />
      </WaterfallLayout>
      <WaterfallLayout title={`Projects`} icon="🏆" from="gold" to="red">
        <PortfolioProjects />
      </WaterfallLayout>
      <WaterfallLayout title={`Stacks`} icon="🔥" from="red" to="yellow">
        <PortfolioStacks />
      </WaterfallLayout>
      <WaterfallLayout title={`Interests`} icon="✨" from="yellow" to="green">
        <span className="text-white">공사중입니다</span>
      </WaterfallLayout>
      <WaterfallLayout title={`Contacts`} icon="✉️" from="green" to="green">
        <span className="text-white">공사중입니다</span>
      </WaterfallLayout>
    </Layout>
  );
}
