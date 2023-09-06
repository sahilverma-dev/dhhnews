import Carousel from "@/components/custom/carousel";
import NewsCard from "@/components/custom/news-card";
import { getNews } from "@/sanity/calls/getNews";
import Link from "next/link";

const Home = async () => {
  const news = await getNews();
  return (
    <main className="p-4 max-w-5xl mx-auto">
      <Carousel />
      <div className="my-2">
        <h3 className="font-bold text-xl md:text-3xl text-white">
          Editor’s Pick
        </h3>
      </div>

      {news.map((news) => (
        <NewsCard key={news.slug} news={news} />
      ))}
      <div className="w-full flex items-center justify-center">
        <Link href="/news" className="btn rounded-full font-bold">
          More News
        </Link>
      </div>
    </main>
  );
};

export default Home;
