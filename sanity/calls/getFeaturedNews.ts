import { groq } from "next-sanity";

import { client } from "../lib/client";
import { News } from "@/interfaces";

export const getFeaturedNews: () => Promise<News[]> = async () => {
  const result = await client.fetch(
    groq`*[_type == 'featured']{
      'news': news[]->{
        _id,
        _createdAt,
        title,
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
    },
  }`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  return result[0].news as News[];
};
