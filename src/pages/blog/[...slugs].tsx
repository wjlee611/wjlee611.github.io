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
      <div className="prose dark:prose-dark flex flex-col items-start pb-16">
        <header className="flex w-full flex-col items-center mb-10">
          <h1 className="text-blue-500">{post.title}</h1>
          <span className="text-blue-500 text-lg">{post.description}</span>
          <span className="space-x-10 mt-7 text-blue-400">
            읽는데
            <span className="text-blue-500 text-2xl">
              {" "}
              {post.readingMinutes}
            </span>
            분 정도 걸려요.
          </span>
        </header>
        <MDXRemote {...mdx} />
        <footer className="flex flex-col mt-10">
          <span className="text-blue-400 italic">
            {post.date} 에 작성되었어요.
          </span>
          <div className="flex items-center">
            <span>Tag</span>
            <ul className="flex space-x-3 list-none m-0">
              {post.tags.map((tag, i) => (
                <li key={i} className="bg-blue-400 px-3 text-white rounded-md">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
