import { getAllCategories, getAllPosts } from "./posts";

export const getCategories = () => {
  return getAllCategories();
};

export const getPosts = (category: string) => {
  const posts = getAllPosts();

  return posts.filter((v) => v.slug.split("/")[0] === category);
};
