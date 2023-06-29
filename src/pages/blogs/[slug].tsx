import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import PostPageContent from "@/components/blogs/PostPageContent";
import { useEffect } from "react";
import { PostType } from "@/types/PostType";
import { BlogPostSkeleton } from "@/types/BlogPostSkeleton";
import { client } from "@/client";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await client.getEntries({
    content_type: "blogPost",

    "fields.slug": context.params?.slug,
  });

  return {
    props: {
      post: res.items[0].fields,
    },
  };
};

const PostPage = ({ post }: { post: PostType }) => {
  useEffect(() => {
    console.log(post);
  });
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostPageContent post={post} />
    </>
  );
};

export default PostPage;