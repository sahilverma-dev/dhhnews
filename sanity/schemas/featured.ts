import { defineField, defineType } from "sanity";

export default defineType({
  name: "featured",
  title: "Featured",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "news",
      title: "News",
      type: "array",
      of: [{ type: "reference", to: { type: "news" } }],
    }),
  ],
});
