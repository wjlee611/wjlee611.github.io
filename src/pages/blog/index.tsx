import Layout from "@/components/common/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
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
        <Link href="/blog/posts">posts</Link>
        <div className="relative flex justify-center">
          <span className="shadow-md rounded-full text-2xl py-2 px-10">
            [/blog] 공사중 입니다!
          </span>
        </div>
      </div>
    </Layout>
  );
}
