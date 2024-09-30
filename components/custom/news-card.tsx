"use client";

import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { News } from "@/interfaces";
import { FC } from "react";
import { formatDate } from "@/lib/utils";

interface Props {
  news: News;
}

const NewsCard: FC<Props> = ({ news }) => {
  return (
    <div className="mb-8 space-y-2 w-full">
      <Link
        href={`/news/${news.slug}`}
        className="relative block group aspect-video rounded-lg overflow-hidden border"
      >
        <div className="absolute top-3 left-3 md:top-4 md:left-4 category-badge">
          {news.categories[0].title}
        </div>
        <Image
          src={news?.poster?.src}
          height={428}
          width={851}
          alt={news?.poster?.alt}
          className="w-full h-full justify-normal object-cover group-hover:scale-105 duration-300 ease-in-out transition-transform align-middle"
          priority
        />
      </Link>
      <div className="w-full">
        <div className="flex items-center gap-2">
          {/* <Link href={`/author/${news?.author?.slug}`}> */}
          <Avatar>
            <AvatarImage
              src={news?.author?.image.src}
              alt={news?.author?.image.alt}
              height={32}
              width={32}
            />
          </Avatar>
          {/* </Link> */}
          <div>
            <div
              // href={`/author/${news?.author?.slug}`}
              title={`Posts by ${news?.author?.name}`}
              rel="author"
              className="text-title dark:text-white text-base font-semibold hover:text-primary"
            >
              {news?.author?.name}
            </div>

            {/* <div className="text-gray-400 text-xs">
              posted at, {formatDate(news?._createdAt)}
            </div> */}
          </div>
        </div>
        <Link href={`/news/${news?.slug}`} className="w-full">
          <h5 className="font-bold text-title dark:text-white text-2xl md:text-4xl font-poppins mb-0 mt-2 md:mt-4 hover:text-primary">
            {news?.title}
          </h5>
          <p className="py-2 w-full text-sm md:text-base md:py-4 font-poppins text-gray-400 dark:text-gray-300">
            {news?.description}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
