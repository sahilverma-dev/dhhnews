import NewsCard from "@/components/custom/news-card";
import { getNews } from "@/sanity/calls/getNews";

const News = async () => {
  const news = await getNews();

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
        News
      </h3>

      {news.map((news) => (
        <NewsCard key={news.slug} news={news} />
      ))}
    </main>
  );
};

export default News;
