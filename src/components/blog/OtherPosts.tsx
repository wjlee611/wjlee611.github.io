import { Post } from "@/libs/posts";
import clsWrapper from "@/utils/class-wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface IOtherPosts {
  post: Post;
  posts: Post[];
}

export default function OtherPosts({ post, posts }: IOtherPosts) {
  const [postIndex, setPostIndex] = useState(-1);

  useEffect(() => {
    posts.forEach((postItem, idx) => {
      if (postItem.slug == post.slug) {
        setPostIndex(idx);
      }
    });
  }, [post.slug, posts]);

  return (
    <div className="flex flex-col items-center mb-5">
      {postIndex != -1 && (
        <ol className="w-full flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-1">
          {posts
            .filter((_, idx) => Math.abs(postIndex - idx) == 1)
            .filter((post) => !post.slug.endsWith("/index"))
            .reverse()
            .map((post, idx) => {
              const isPrevPost = postIndex - posts.indexOf(post) < 0;

              return (
                <li
                  key={idx}
                  className={clsWrapper(
                    "w-full flex flex-1 group from-transparent to-blue-500 text-white",
                    isPrevPost
                      ? "bg-gradient-to-l rounded-l-lg"
                      : "bg-gradient-to-r rounded-r-lg col-start-2"
                  )}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className={clsWrapper(
                      "w-full flex items-center py-2 px-1",
                      isPrevPost ? "" : "flex-row-reverse flex-wrap-reverse"
                    )}
                  >
                    <span
                      className={clsWrapper(
                        "text-3xl px-5 transition-transform",
                        isPrevPost
                          ? "group-hover:-translate-x-3"
                          : "group-hover:translate-x-3"
                      )}
                    >
                      {isPrevPost ? IoIosArrowBack() : IoIosArrowForward()}
                    </span>
                    <div
                      className={clsWrapper(
                        "flex flex-col",
                        isPrevPost ? "" : "items-end"
                      )}
                    >
                      <span>{isPrevPost ? "이전 글" : "다음 글"}</span>
                      <span>{post.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ol>
      )}
      <div className="w-full bg-gradient-to-br from-blue-400 to-blue-950 mt-5 rounded-md overflow-hidden">
        <h3 className="bg-black bg-opacity-50 px-1 py-3">
          <span className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold drop-shadow">
            {posts.findLast((post) => post.slug.endsWith("/index"))?.title}
          </span>
          <span className="text-white">의 다른 글</span>
        </h3>
        <ol className="w-full p-1 space-y-1">
          {posts
            .filter((post) => !post.slug.endsWith("/index"))
            .map((postItem, idx) => (
              <li
                key={idx}
                className={clsWrapper(
                  "w-full",
                  post.slug == postItem.slug
                    ? "bg-black bg-opacity-20 rounded-md"
                    : ""
                )}
              >
                <Link
                  href={`/blog/${postItem.slug}`}
                  className={clsWrapper(
                    "w-full flex justify-center text-white",
                    post.slug == postItem.slug
                      ? "before:content-['🫧'] before:mr-2 after:content-['🫧'] after:ml-2"
                      : ""
                  )}
                >
                  {postItem.title}
                </Link>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
