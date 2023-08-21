import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "../../libs/posts";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slugs: post.slug.split("/") } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `${[...slugs].join("/")}`;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
};

export default function PostPage({ slug }: { slug: string }) {
  return <div>{slug}</div>;
}
