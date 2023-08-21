import { Post, getAllPosts } from "../../../libs/posts";

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
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          {post.title} {post.slug}
        </li>
      ))}
    </ul>
  );
}
