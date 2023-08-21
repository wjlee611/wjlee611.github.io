import Layout from "@/components/common/Layout";
import clsWrapper from "@/utils/class-wrapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [toggle, setToggle] = useState(false);

  return (
    <Layout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <Image
          src="/images/icon_circle.png"
          alt="웅덩이 로고"
          width={180}
          height={180}
          priority
        />
        <div className="relative flex justify-center">
          <button
            className="shadow-md rounded-full text-2xl py-2 px-10"
            onClick={() => setToggle((prev) => !prev)}
          >
            [/blog] 공사중 입니다!
          </button>
          <ul
            className={clsWrapper(
              "absolute bottom-14 mx-auto bg-slate-600 bg-opacity-50 p-5 space-y-3 rounded-md transition-all",
              toggle ? "" : "translate-y-4 opacity-0"
            )}
          >
            <Link href="/">
              <li className="text-lg text-white cursor-pointer w-32 flex justify-between group">
                <span>Home</span>
                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform">
                  &raquo;
                </span>
              </li>
            </Link>

            <Link href="/blog">
              <li className="text-lg text-white cursor-pointer w-32 flex justify-between group">
                <span>Blog</span>
                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform">
                  &raquo;
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
