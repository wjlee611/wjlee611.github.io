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
                    "w-full flex flex-1 group border-2 border-blue-900 bg-blue-500 bg-opacity-70 text-white",
                    isPrevPost ? "" : "col-start-2"
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
                          ? "group-hover:-translate-x-5"
                          : "group-hover:translate-x-5"
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
      <h3 className="mt-5">
        <span className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent font-bold drop-shadow">
          {posts.findLast((post) => post.slug.endsWith("/index"))?.title}
        </span>
        <span>의 다른 글</span>
      </h3>
      <ol>
        {posts
          .filter((post) => !post.slug.endsWith("/index"))
          .map((post, idx) => (
            <li key={idx}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
      </ol>
    </div>
  );
}
