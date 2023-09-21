import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Artist, News } from "@/interfaces";

type Type = (query: string) => Promise<{
  news: News[];
  artists: Artist[];
}>;

export const getSearchQuery: Type = async (query) => {
  const news = await client.fetch(
    groq`*[_type == 'news' && (title match $query)]{
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
  }`,
    {
      query,
      next: {
        revalidate: 60,
      },
    }
  );
  const artists = await client.fetch(
    groq`*[_type == 'artist' && (artistName match $query || realName match $query)]{
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
      query,
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  return {
    news,
    artists,
  };
};
