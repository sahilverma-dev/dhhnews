import { defineType } from "sanity";

export default defineType({
  name: "instagram",
  type: "object",
  title: "Instagram Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Instagram post/reel URL",
    },
  ],
});
