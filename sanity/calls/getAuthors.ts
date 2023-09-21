import { groq } from "next-sanity";

import { client } from "../lib/client";
import { Author } from "@/interfaces";

export const getAuthors: () => Promise<Author[]> = async () => {
  const results = await client.fetch(
    groq`*[_type == 'author']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': {
          'src': image.asset->url,
          'alt': image.alt,
      },
      
  }`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  return results;
};
