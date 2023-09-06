import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "color",
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "color",
    }),
  ],
});
