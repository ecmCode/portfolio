import type { EntryFieldTypes } from "contentful";

export type BlogPostSkeleton = {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol<string>>;
    content: EntryFieldTypes.RichText;
    author: {
      fields: {
        name: EntryFieldTypes.Text;
        isAdmin: EntryFieldTypes.Boolean;
        email: EntryFieldTypes.Text;
      };
    };
    thumbnail: {
      fields: {
        file: {
          details: {
            image: {
              width: EntryFieldTypes.Number;
              height: EntryFieldTypes.Number;
            };
          };
          url: EntryFieldTypes.Text;
          title: EntryFieldTypes.Text;
        };
      };
    };
  };
};
