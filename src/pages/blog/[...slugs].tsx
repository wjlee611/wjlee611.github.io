import { GetStaticPaths, GetStaticProps } from "next";
import { Post, getAllPosts, getPosts } from "../../libs/posts";
import { parseToc, serializeMdx } from "@/libs/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "@/components/common/Layout";
import BlogToc, { Section } from "@/components/blog/BlogToc";
import Giscus from "@/components/blog/Giscus";
import YT from "@/components/blog/YT";
import OtherPosts from "@/components/blog/OtherPosts";

const components = { YT };

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
  const posts = getPosts(slug.split("/")[0], { withIdx: true });

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: {
      post,
      posts,
      mdx,
      toc: parseToc(post.content),
    },
  };
};

interface IPostPage {
  post: Post;
  posts: Post[];
  mdx: MDXRemoteSerializeResult;
  toc: Section[];
}

export default function PostPage({ post, posts, mdx, toc }: IPostPage) {
  return (
    <Layout>
      <div className="flex flex-col items-start pb-16">
        <header className="flex w-full flex-col items-center my-10">
          <h1 className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent text-3xl font-bold mb-5 drop-shadow">
            {post.title}
          </h1>
          <span className="text-blue-500 text-lg">{post.description}</span>
          <span className="space-x-10 mt-5 text-blue-400 text-sm">
            읽는데
            <span className="text-blue-500 text-xl font-semibold">
              {" "}
              {post.readingMinutes}
            </span>
            분 정도 걸려요.
          </span>
        </header>
        <section className="w-full flex justify-between space-x-5">
          <div className="w-full flex flex-col items-start prose dark:prose-dark max-w-full lg:max-w-2xl 2xl:max-w-4xl">
            <MDXRemote {...mdx} components={components} />
          </div>
          <BlogToc toc={toc} />
        </section>
        <footer className="w-full flex flex-col mt-10">
          <span className="text-blue-400 italic text-start">
            {post.date} 에 작성을 시작했어요.
          </span>
          <div className="w-full flex items-start mt-5 mb-10 space-x-5">
            <span>Tag</span>
            <ul className="w-full flex list-none m-0 flex-wrap gap-1">
              {post.tags.map((tag, i) => (
                <li
                  key={i}
                  className="bg-gradient-to-br from-blue-500 to-blue-400 px-3 text-white rounded-md shadow-md whitespace-nowrap"
                >
                  # {tag}
                </li>
              ))}
            </ul>
          </div>
          <OtherPosts post={post} posts={posts} />
          <Giscus />
        </footer>
      </div>
    </Layout>
  );
}
