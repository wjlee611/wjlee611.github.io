import { sync } from "glob";
import path from "path";

const BASE_PATH = "posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.map((postPath) => {
    const slug = path.relative(POSTS_PATH, postPath).replace(".mdx", "");
    return {
      slug: `${slug}`,
    };
  });
};
