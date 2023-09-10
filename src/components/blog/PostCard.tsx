import { Post } from "@/libs/posts";
import Link from "next/link";

interface IPostCard {
  post: Post;
  link: string;
}

export default function PostCard({ post, link }: IPostCard) {
  return (
    <Link
      href={link}
      className="w-full max-w-2xl flex flex-col border border-blue-300 rounded-md py-5 px-5 text-start shadow-md hover:bg-blue-100 hover:shadow-blue-200 transition-colors relative"
    >
      <h4 className="text-xl bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text font-bold text-transparent">
        {post.title}
      </h4>
      <span>{post.description}</span>
      <span className="absolute bottom-0 -right-1 bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text font-bold text-transparent opacity-40 italic px-3">
        {post.date}
      </span>
    </Link>
  );
}
