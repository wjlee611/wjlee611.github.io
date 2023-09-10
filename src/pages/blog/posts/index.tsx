import Layout from "@/components/common/Layout";
import { Post, getAllPosts } from "../../../libs/posts";
import Link from "next/link";
import CategoryTitle from "@/components/blog/CategoryTitle";
import PostCard from "@/components/blog/PostCard";

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
      <div className="flex flex-col mt-8 pb-16">
        <CategoryTitle>{`// 전체 포스트`}</CategoryTitle>
        <ul className="flex flex-col items-center space-y-3">
          {posts.map((post, i) => (
            <PostCard post={post} link={`/blog/${post.slug}`} key={i} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
