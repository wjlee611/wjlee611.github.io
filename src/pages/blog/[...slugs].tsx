import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "../../libs/posts";
import { serializeMdx } from "@/libs/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slugs: post.slug.split("/") } })),
    fallback: false,
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
      mdx,
    },
  };
};

export default function PostPage({ mdx }: { mdx: MDXRemoteSerializeResult }) {
  return <MDXRemote {...mdx} />;
}
