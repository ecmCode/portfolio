import type { PostType } from "@/types/PostType";
import type { AssetFile } from "contentful";
import type { Text } from "@contentful/rich-text-types";

const usePost = (post: PostType) => {
  if (!post || !post.fields) {
    return {
      author: null,
      content: null,
      email: "",
      isAdmin: false,
      name: "",
      slug: "",
      tags: [],
      title: "",
      excerpt: "",
      alt: "",
      url: "",
      height: 0,
      width: 0,
      createdAt: "",
      updatedAt: "",
    };
  }

  const { author, slug, tags, title, content, thumbnail } = post.fields;
  const { createdAt, updatedAt } = post.sys;

  if (!author?.fields || !thumbnail?.fields || !content) {
    return {
      author: null,
      content: null,
      email: "",
      isAdmin: false,
      name: "",
      slug: slug as string,
      tags: tags as string[],
      title: title as string,
      excerpt: "",
      alt: "",
      url: "",
      height: 0,
      width: 0,
      createdAt,
      updatedAt,
    };
  }

  const { email, isAdmin, name } = author.fields;
  const excerpt = (content.content[0].content[0] as Text).value;
  const { file, title: alt } = thumbnail.fields;
  const { url, details } = file as AssetFile;
  const { height, width } = details.image!;
  return {
    author,
    content,
    email,
    isAdmin,
    name,
    slug,
    tags,
    title,
    excerpt,
    alt,
    url,
    height,
    width,
    createdAt,
    updatedAt,
  };
};

export default usePost;
