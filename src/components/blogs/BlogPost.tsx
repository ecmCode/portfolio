import Link from "next/link";
import style from "./BlogPost.module.css";
import Image from "next/image";
import type { PostType } from "@/types/PostType";
import usePost from "@/hooks/usePost";
import Suspense from "@/hooks/Suspense";
import { format } from "date-fns";

const ImgSkeleton = () => {
  return (
    <div className="animate-pulse bg-slate-400/40 aspect-video w-full"></div>
  );
};

const ContentSkeleton = () => {
  return (
    <>
      <div className="animate-pulse bg-slate-400/50 w-full h-8"></div>
      <div className="animate-pulse bg-slate-600/50 w-1/3 h-6"></div>
      <div>
        <div className="animate-pulse bg-slate-400/50 w-full h-6 mt-1"></div>
        <div className="animate-pulse bg-slate-400/50 w-full h-6 mt-1"></div>
        <div className="animate-pulse bg-slate-400/50 w-full h-6 mt-1"></div>
        <div className="animate-pulse bg-slate-400/50 w-2/3 h-6 mt-1"></div>
      </div>
      <div className="flex justify-end">
        <div className="animate-pulse bg-slate-600/50 w-full lg:w-1/3 h-10"></div>
      </div>
    </>
  );
};

const BlogPost = ({ post }: { post: PostType }) => {
  const {
    alt,
    excerpt,
    height,
    width,
    url,
    name,
    isAdmin,
    title,
    slug,
    createdAt,
  } = usePost(post);

  if (!post || !post.fields || !title || !url) {
    return null;
  }

  return (
    <li className="card card-blog">
      <div className={style.box}>
        <div className="card">
          <Suspense fallback={<ImgSkeleton />} delay={2000}>
            <Image
              width={width}
              height={height}
              src={`https:${url}`}
              alt={alt as string}
              className="object-cover aspect-video"
            />
          </Suspense>
        </div>
        <Suspense fallback={<ContentSkeleton />}>
          <>
            <div className={style.body}>
              <h2 className={style.title}>{title}</h2>

              <div className="flex flex-wrap sm:flex-row gap-2 justify-between ">
                <p>
                  by: {name} {isAdmin && "(Admin)"}
                </p>
                <p>{format(Date.parse(createdAt), "MMM dd yyyy hh:mm")}</p>
              </div>

              <p className={style.excerpt}>{excerpt}</p>
            </div>

            <div className="flex justify-end">
              <Link
                href={"/blogs/" + slug}
                className="btn btn-action w-full lg:w-auto"
              >
                Read More
              </Link>
            </div>
          </>
        </Suspense>
      </div>
    </li>
  );
};

export default BlogPost;
