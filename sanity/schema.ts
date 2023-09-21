import { type SchemaTypeDefinition } from "sanity";

// schemas
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import news from "./schemas/news";
import author from "./schemas/author";
import label from "./schemas/label";
import skill from "./schemas/skill";
import artist from "./schemas/artist";
import youtube from "./schemas/youtube";
import instagram from "./schemas/instagram";
import featured from "./schemas/featured";
import contact from "./schemas/contact";
import tweet from "./schemas/tweet";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
    author,
    category,
    blockContent,
    label,
    skill,
    artist,
    youtube,
    instagram,
    tweet,
    featured,
    contact,
  ],
};
