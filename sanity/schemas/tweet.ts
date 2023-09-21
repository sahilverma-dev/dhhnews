import { defineType } from "sanity";

export default defineType({
  name: "tweet",
  type: "object",
  title: "Tweet Embed",
  fields: [
    {
      name: "id",
      type: "string",
      title: "Tweet ID",
    },
  ],
});
