import Layout from "@/components/common/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-between py-16">
        <Image
          src="/images/icon_circle.png"
          alt="웅덩이 로고"
          width={180}
          height={180}
          placeholder="blur"
          priority
        />
        <div className="relative flex justify-center">
          <span className="shadow-md rounded-full text-2xl py-2 px-10">
            [/] 공사중 입니다!
          </span>
        </div>
      </div>
    </Layout>
  );
}
