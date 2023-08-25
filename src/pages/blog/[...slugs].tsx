import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllPosts } from "../../libs/posts";
import { serializeMdx } from "@/libs/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "@/components/common/Layout";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slugs: post.slug.split("/") } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `${[...slugs].join("/")}`;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: {
      post,
      mdx,
    },
  };
};

interface IPostPage {
  post: Post;
  mdx: MDXRemoteSerializeResult;
}

export default function PostPage({ post, mdx }: IPostPage) {
  return (
    <Layout>
      <div className="prose flex flex-col py-16 ">
        <h1>{post.title}</h1>
        <h3>{post.description}</h3>
        <span>{post.date}</span>
        <span>est. {post.readingMinutes} min</span>
        <MDXRemote {...mdx} />
        <ul className="flex space-x-3">
          {post.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
