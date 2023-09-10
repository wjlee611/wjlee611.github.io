import CategoryTitle from "@/components/blog/CategoryTitle";
import PostCard from "@/components/blog/PostCard";
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
  const posts = getPosts(category, { withIdx: true });

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
      <div className="flex flex-col mt-8 pb-16">
        <CategoryTitle>
          {`// ${posts.find((post) => post.slug.endsWith("index"))?.title}`}
        </CategoryTitle>
        <ul className="flex flex-col items-center space-y-3">
          {posts
            .reduce<Post[]>((ac, post) => {
              if (post.slug.endsWith("index")) return ac;
              return [...ac, post];
            }, [])
            .map((post, i) => (
              <PostCard post={post} link={`/blog/${post.slug}`} key={i} />
            ))}
        </ul>
      </div>
    </Layout>
  );
}
