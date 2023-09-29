import { groq } from "next-sanity";

import { client } from "../lib/client";
import { Artist } from "@/interfaces";

export const getArtists: () => Promise<Artist[]> = async () => {
  const results = await client.fetch(
    groq`*[_type == 'artist']{
      _id,
      _createdAt,
      artistName,
      realName,
      'slug': slug.current,
      'image': {
          'src': image.asset->url,
          'alt': image.alt,
      },
      
  }`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return results;
};
