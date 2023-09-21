// next
import Link from "next/link";

// sanity calls
import { getFeaturedNews } from "@/sanity/calls/getFeaturedNews";
import { getPaginationNews } from "@/sanity/calls/getPaginationNews";

// components
import Carousel from "@/components/custom/carousel";
import NewsCard from "@/components/custom/news-card";
import CustomTooltip from "@/components/custom/custom-tooltip";

// icons
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";

const Home = async () => {
  const { news } = await getPaginationNews(1);
  const feature = await getFeaturedNews();
  return (
    <main className="p-4 max-w-5xl w-full mx-auto">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
          Featured
        </h3>
        <CustomTooltip title="Featured news changes on the daily basic">
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
