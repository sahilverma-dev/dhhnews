import { groq } from "next-sanity";

import { client } from "../lib/client";
import { News } from "@/interfaces";

export const getNewsWithSlug: (slug: string) => Promise<News> = async (
  slug
) => {
  const result = await client.fetch(
    groq`*[_type == 'news' && slug.current == $slug]{
      _id,
      _createdAt,
      title,
      description,
      'slug': slug.current,
      'poster': {
          'src': poster.asset->url,
          'alt': poster.alt,
          'caption': poster.caption
      },
      'author':author->{
          name,
          'slug': slug.current,
          'image': {
            'src': image.asset->url,
            'alt': image.alt
        },
      },
      'categories': categories[]->{
          title,
          'slug': slug.current
      },
      'artists': artists[]->{
          artistName,
          'slug': slug.current,
          'image': {
              'src': image.asset->url,
              'alt': image.alt
          }
      },
      content
  }`,
    {
      slug,
      next: {
        revalidate: 60,
      },
    }
  );

  return result[0];
};
