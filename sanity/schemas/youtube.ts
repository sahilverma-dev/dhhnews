import { defineType } from "sanity";

export default defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
});
