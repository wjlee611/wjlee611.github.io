import Layout from "@/components/common/Layout";
import { Post, getAllCategories, getPosts } from "@/libs/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = () => {
  const categories = getAllCategories();

  return {
    paths: categories.map((cat) => "/blog/" + cat.slug.split("/")[0]),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string };
  const posts = getPosts(category);

  return {
    props: {
      posts,
    },
  };
};

interface ICategoryPage {
  posts: Post[];
}

export default function CategoryPage({ posts }: ICategoryPage) {
  return (
    <Layout>
      <div className="flex flex-col py-16">
        <ul className="space-y-3 ml-10 mt-10">
          {posts.map((post, i) => (
            <li key={i}>
              <Link href={`/blog/${post.slug}`}>
                {post.title} - {post.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
