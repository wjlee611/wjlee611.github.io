import Layout from "@/components/common/Layout";
import { getCategories } from "@/libs/categories";
import { Post } from "@/libs/posts";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: {
      categories: getCategories(),
    },
  };
};

interface IBlog {
  categories: Post[];
}

export default function Blog({ categories }: IBlog) {
  return (
    <Layout>
      <div className="h-full flex flex-col items-center space-y-10 py-16">
        <div className="relative flex justify-center">
          <span className="shadow-md rounded-full text-2xl py-2 px-10">
            [/blog] 공사중 입니다!
          </span>
        </div>
        <Link href="/blog/posts">posts</Link>
        <div className="space-y-5">
          <h3>Categories</h3>
          <ul className=" space-y-2">
            {categories.map((cat, i) => (
              <li key={i}>
                <Link href={`/blog/${cat.slug.split("/")[0]}`}>
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
