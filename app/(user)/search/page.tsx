import ArtistCard from "@/components/custom/artist-card";
import NewsCard from "@/components/custom/news-card";
import { getSearchQuery } from "@/sanity/calls/getSearchQuery";
import { FC } from "react";

interface Props {
  params: {};
  searchParams: { q: string };
}

export const metadata = {
  title: "Search",
  description: "Search for your query.",
};

const Search: FC<Props> = async ({ searchParams }) => {
  const { artists, news } = await getSearchQuery(searchParams.q);

  return (
    <main className="p-4 w-full max-w-5xl mx-auto flex flex-col gap-4">
      <h3 className=" text-title dark:text-white">
        Search results for {searchParams.q}
      </h3>
      {artists.length > 0 && (
        <>
          <div className="flex items-center justify-between w-full">
            <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
              Artists
            </h3>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 w-full">
            {artists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>
        </>
      )}

      {news.length > 0 && (
        <>
          <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
            News
          </h3>

          {news.map((news) => (
            <NewsCard key={news.slug} news={news} />
          ))}
        </>
      )}

      {news.length === 0 && artists.length === 0 && (
        <div className="h-[500px] md:h-[600px] w-full flex items-center justify-center font-normal text-title dark:text-white">
          Sorry, but we couldn&apos;t find any results related to your query.
        </div>
      )}
    </main>
  );
};

export default Search;
