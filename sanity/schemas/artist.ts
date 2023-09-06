import { defineField, defineType } from "sanity";

export default defineType({
  name: "artist",
  title: "Artists",
  type: "document",
  fields: [
    defineField({
      name: "artistName",
      title: "Artist Name",
      type: "string",
    }),
    defineField({
      name: "realName",
      title: "Real Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "artistName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
    }),
    defineField({
      name: "dob",
      title: "Date of Birth",
      type: "date",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    // TODO change it
    // defineField({
    //   name: "socialMedia",
    //   title: "Social Media",
    //   type: "array",
    //   of: [
    //     {
    //       type: "url",
    //       title: "Instagram",
    //       //   icon
    //     },
    //     {
    //       type: "url",
    //       title: "Twitter",
    //       //   icon
    //     },
    //   ],
    // }),
    defineField({
      name: "spotify",
      title: "Spotify",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "ALT",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "reference",
      to: { type: "label" },
    }),
  ],
});
