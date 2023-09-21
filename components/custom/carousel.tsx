"use client";

// react
import { FC } from "react";

// next
import Link from "next/link";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// interfaces
import { News } from "@/interfaces";

// utils
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
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
      >
        {feature.map((item) => (
          <SwiperSlide
            key={item.slug}
            style={{
              height: 400,
            }}
          >
            <Link
              href={`/news/${item.slug}`}
              className="relative w-full h-full group rounded-lg aspect-video md:aspect-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-black/50" />
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col text-center w-full max-w-[650px] items-center gap-2 md:gap-4">
                <div
                  // href={`/category/${item.categories[0].slug}`}
                  // tabIndex={0}
                  className="text-white transition-all"
                >
                  <div className="category-badge">
                    {item.categories[0].title}
                  </div>
                </div>
                <h4 className="text-2xl w-[80%] md:w-full md:text-4xl font-bold my-1 md:my-5">
                  <p className="text-white transition-all">{item.title}</p>
                </h4>
                <ul className="flex gap-3 items-center text-sm text-gray-100 md:text-gray-200 mb-0">
                  <li className="list-inline-item">
                    <div
                      // href={`/author/${item.author.slug}`}
                      // title={`Posts by ${item.author.name}`}
                      // rel="author"
                      // tabIndex={0}
                      className="font-medium inline text-white hover:text-primary"
                    >
                      {item.author.name}
                    </div>{" "}
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
