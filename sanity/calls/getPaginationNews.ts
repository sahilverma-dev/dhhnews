import { groq } from "next-sanity";
import { client } from "../lib/client";
import { News } from "@/interfaces";

type Type = (page: number | string) => Promise<{ news: News[]; total: number }>;

export const getPaginationNews: Type = async (page) => {
  const pageSize = 10;
  const start = (Number(page) - 1) * pageSize;

  const newsQuery = groq`
    *[_type == 'news']
    | order(_id) [${start}...${start + pageSize}] {
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
        'author': author->{
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
      }
  `;

  const totalQuery = groq`count(*[_type == 'news'])`;

  try {
    const [news, total] = await Promise.all([
      client.fetch(newsQuery, {
        next: {
          revalidate: 60,
        },
      }),
      client.fetch(totalQuery, {
        next: {
          revalidate: 60,
        },
      }),
    ]);

    return { news, total };
  } catch (error) {
    console.error("Error fetching paginated news:", error);
    return { news: [], total: 0 };
  }
};
