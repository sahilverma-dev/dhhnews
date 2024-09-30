// react
import { FC } from "react";

// next
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// sanity
import { getNewsWithSlug } from "@/sanity/calls/getNewsWithSlug";

// custom components
import Content from "@/components/custom/content";

// utils
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const news = await getNewsWithSlug(params?.slug);

  return {
    title: news?.title,
    description: news?.description,
    openGraph: {
      images: [news?.poster?.src],
      title: news?.title,
      description: news?.description,
    },
    alternates: {
      canonical: `/news/${params?.slug}`,
    },
    twitter: {
      title: news?.title,
      description: news?.description,
      images: [news?.poster?.src],
      creator: "@sahilverma_dev",
    },
  };
}

const News: FC<Props> = async ({ params }) => {
  const news = await getNewsWithSlug(params.slug);
  return (
    <div>
      <section
        className="h-[300px] md:h-[400px] lg:h-[600px]  w-full relative p-4"
        style={{
          backgroundImage: `url("${news.poster.src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0  h-full w-full"
          style={{
            backgroundColor: "rgba(32,54,86,.6)",
          }}
        ></div>
        <div className="max-w-6xl mx-auto">
          <div className="absolute bottom-4 md:bottom-16 max-w-3xl z-10">
            <nav className="flex items-center gap-2 flex-wrap mb-3">
              <Link title="Go to home" href="/" className="text-white text-sm">
                Home
              </Link>
              <span className="text-gray-200">/</span>
              <div
                // title={`Go to ${news.categories[0].slug}.`}
                // href="/author/katen"
                className="text-white text-sm"
              >
                {news.categories[0].title}
              </div>
              <span className="text-gray-200">/</span>
              <Link
                title={news.title}
                href={`/news/${news.slug}`}
                className="text-gray-300 text-sm"
              >
                <span property="name">{news.title}</span>
              </Link>
            </nav>
            <div className="post-header">
              <h1 className="text-white font-bold text-2xl md:text-3xl mt-0 mb-3">
                {news.title}
              </h1>
              <div className="flex items-center gap-2">
                <div
                // href={`/author/${news.author.slug}`}
                // title={`Posts by ${news.author.name}`}
                // rel="author"
                >
                  <Image
                    src={news.author.image.src}
                    alt={news.author.image.alt}
                    height={32}
                    width={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div
                    // href={`/author/${news.author.slug}`}
                    // title={`Posts by ${news.author.name}`}
                    // rel="author"
                    className="text-white text-base font-semibold hover:text-primary"
                  >
                    {news.author.name}
                  </div>

                  {/* <div
                    className="text-gray-100 text-xs"
                    title={`Post added at ${formatDate(news._createdAt)}`}
                  >
                    posted at, {formatDate(news._createdAt)}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content slug={news.slug} content={news.content} />
    </div>
  );
};

export default News;
