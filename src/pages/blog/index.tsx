import CategoryTitle from "@/components/blog/CategoryTitle";
import Layout from "@/components/common/Layout";
import { Post, getAllCategories } from "@/libs/posts";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: {
      categories: getAllCategories(),
    },
  };
};

interface IBlog {
  categories: Post[];
}

export default function Blog({ categories }: IBlog) {
  return (
    <Layout>
      <div className="h-full flex flex-col items-start py-16">
        <Link
          href="/blog/posts"
          className="w-full bg-gradient-to-tl from-blue-400 to-blue-200 py-10 text-white text-2xl font-bold bg-opacity-50 rounded-lg shadow-lg hover:shadow-blue-200 transition-colors"
        >
          전체 글 보기
        </Link>
        <CategoryTitle>{"// 카테고리별 모아보기"}</CategoryTitle>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Link
              href={`/blog/${cat.slug.split("/")[0]}`}
              key={i}
              className="w-full border border-blue-300 rounded-md py-5 px-5 text-start shadow-md hover:bg-blue-100 hover:shadow-blue-200 transition-colors"
            >
              <h4 className="text-xl bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text font-bold text-transparent">
                {cat.title}
              </h4>
              <span>{cat.description}</span>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
