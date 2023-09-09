import Carousel from "@/components/custom/carousel";
import CustomTooltip from "@/components/custom/custom-tooltip";
import NewsCard from "@/components/custom/news-card";
import { getFeaturedNews } from "@/sanity/calls/getFeaturedNews";
import { getNews } from "@/sanity/calls/getNews";
import Link from "next/link";

// icons
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";

const Home = async () => {
  const news = await getNews();
  const feature = await getFeaturedNews();
  return (
    <main className="p-4 max-w-5xl mx-auto">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
          Featured
        </h3>
        <CustomTooltip title="Featured news changes every week">
          <InfoIcon />
        </CustomTooltip>
      </div>
      <Carousel feature={feature} />

      <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
        News
      </h3>

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
