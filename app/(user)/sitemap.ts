import { getNews } from "@/sanity/calls/getNews";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dhhnews.vercel.app";
  const news = await getNews();

  const newsUrls =
    news.map((article) => ({
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...newsUrls,
  ];
}
