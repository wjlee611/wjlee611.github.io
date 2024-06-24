import Layout from "@/components/common/Layout";
import Background from "@/components/portfolio/Background";
import PortfolioTitle from "@/components/portfolio/PortfolioTitle";
import WaterfallLayout from "@/components/portfolio/WaterfallLayout";
import PortfolioContributes from "@/components/portfolio/contributes/PortfolioContributes";
import PortfolioHistory from "@/components/portfolio/history/PortfolioHistory";
import PortfolioProjects from "@/components/portfolio/projects/PortfolioProjects";
import PortfolioStacks from "@/components/portfolio/stacks/PortfolioStacks";

export default function Home() {
  return (
    <Layout>
      <Background />
      <div className="h-10" />
      <WaterfallLayout title={`Hello world!`} from="blue" to="gold" fixed>
        <PortfolioTitle />
      </WaterfallLayout>
      <WaterfallLayout title={`Projects`} icon="🏆" from="gold" to="gold">
        <PortfolioProjects />
      </WaterfallLayout>
      <WaterfallLayout
        title={`Contributes`}
        icon="🏆"
        from="gold"
        to="yellow"
        slide={false}
      >
        <PortfolioContributes />
      </WaterfallLayout>
      <WaterfallLayout title={`Record`} icon="⭐️" from="yellow" to="red" fixed>
        <PortfolioHistory />
      </WaterfallLayout>
      <WaterfallLayout title={`Stacks`} icon="🔥" from="red" to="yellow">
        <PortfolioStacks />
      </WaterfallLayout>
      <WaterfallLayout title={`Interests`} icon="✨" from="yellow" to="green">
        <span className="text-white ml-10">공사중입니다</span>
      </WaterfallLayout>
      <WaterfallLayout title={`Contacts`} icon="✉️" from="green" to="green">
        <span className="text-white ml-10">공사중입니다</span>
      </WaterfallLayout>
    </Layout>
  );
}
