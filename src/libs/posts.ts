import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import dayjs from "dayjs";
import readingTime from "reading-time";

const BASE_PATH = "posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

type PostMatter = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: string;
};

export type Post = PostMatter & {
  slug: string;
  content: string;
  readingMinutes: number;
  wordCount: number;
};

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: "utf8" });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    if (grayMatter.draft) {
      return;
    }

    return {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format("YYYY-MM-DD"),
      content,
      slug: path.relative(POSTS_PATH, postPath).replace(".mdx", ""),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllPosts = (withIdx: boolean = false) => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const posts = postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;
    if (!withIdx && post.slug.endsWith("index")) return ac;

    return [...ac, post];
  }, []);

  return posts.sort((p1, p2) => (p1.date < p2.date ? 1 : -1));
};

export const getPosts = (
  category: string,
  { withIdx = false }: { withIdx: boolean }
) => {
  const posts = getAllPosts(withIdx);

  return posts.filter((v) => v.slug.split("/")[0] === category);
};

export const getAllCategories = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/index.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;

    return [...ac, post];
  }, []);
};
