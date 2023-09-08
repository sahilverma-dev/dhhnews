"use client";

import { FC } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";
import { News } from "@/interfaces";
import { Button } from "../ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface Props {
  feature: News[];
}

const Carousel: FC<Props> = ({ feature }) => {
  return (
    <div className="mb-4 w-full h-full rounded-lg overflow-hidden">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop
        // height={400}
        spaceBetween={10}
        modules={[Pagination]}
      >
        {feature.map((item) => (
          <SwiperSlide
            key={item.slug}
            style={{
              height: 400,
            }}
          >
            <div className="relative w-full h-full group rounded-lg aspect-video md:aspect-auto overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-black/50" />
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col text-center w-full max-w-[650px] items-center gap-2 md:gap-4">
                <Link
                  href={`/category/${item.categories[0].slug}`}
                  tabIndex={0}
                  className="text-white transition-all"
                >
                  <div className="category-badge">
                    {item.categories[0].title}
                  </div>
                </Link>
                <h4 className="text-2xl w-[80%] md:w-full md:text-4xl font-bold my-1 md:my-5">
                  <Link
                    href={`/news/${item.slug}`}
                    tabIndex={0}
                    className="text-white transition-all"
                  >
                    {item.title}
                  </Link>
                </h4>
                <ul className="flex gap-3 items-center text-sm text-gray-100 md:text-gray-200 mb-0">
                  <li className="list-inline-item">
                    <Link
                      href={`/author/${item.author.slug}`}
                      title={`Posts by ${item.author.name}`}
                      rel="author"
                      tabIndex={0}
                      className="font-medium text-white hover:text-primary"
                    >
                      {item.author.name}
                    </Link>{" "}
                    posted at {formatDate(item._createdAt)}
                  </li>
                </ul>
              </div>
              <Image
                src={item.poster.src}
                alt={item.poster.alt}
                title={item.poster.alt}
                width={1140}
                height={400}
                className="w-full h-full object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
