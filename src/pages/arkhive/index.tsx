import Layout from "@/components/common/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Arkhive() {
  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-between py-16">
        <Image
          src="/images/icon_circle.png"
          alt="웅덩이 로고"
          width={180}
          height={180}
          priority
        />
        <Link href="/arkhive/privacy">개인정보처리방침</Link>
        <div className="relative flex justify-center">
          <span className="shadow-md rounded-full text-2xl py-2 px-10">
            [/arkhive] 공사중 입니다!
          </span>
        </div>
      </div>
    </Layout>
  );
}
