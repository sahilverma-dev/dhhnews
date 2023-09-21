import NewsCard from "@/components/custom/news-card";
// import { getNews } from "@/sanity/calls/getNews";
import { getPaginationNews } from "@/sanity/calls/getPaginationNews";
import { FC } from "react";
import Pagination from "./components/pagination";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata = {
  title: "News",
  description: "List of all news",
};

const News: FC<Props> = async ({ searchParams }) => {
  const page = searchParams["page"] ?? "1";
  const { news, total } = await getPaginationNews(page as string);

  return (
    <main className="p-4 max-w-5xl w-full mx-auto">
      <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
        News
      </h3>

      {news.map((news) => (
        <NewsCard key={news.slug} news={news} />
      ))}

      {news.length === 0 && (
        <div className="w-full h-[700px] flex items-center justify-center">
          There are no news on this page.
        </div>
      )}
      <Pagination page={page as string} total={total} />
    </main>
  );
};

export default News;
