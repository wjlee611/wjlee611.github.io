import Layout from "@/components/common/Layout";
import { Post, getAllPosts } from "../../../libs/posts";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

interface IPostsPage {
  posts: Post[];
}

export default function PostsPage({ posts }: IPostsPage) {
  return (
    <Layout>
      <div className="py-16">
        <h2 className="text-3xl">{"// Posts"}</h2>
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
