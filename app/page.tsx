import NewsCard from "@/components/custom/news-card";

const Home = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => (
        <NewsCard key={index} />
      ))}
    </div>
  );
};

export default Home;
