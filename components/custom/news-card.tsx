"use client";

import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const NewsCard = () => {
  return (
    <div className="md:mb-8 mb-4 space-y-2">
      <Link
        href="https://themeger.shop/wordpress/katen/minimal/blog/author/katen/"
        className="relative block group aspect-video rounded-lg overflow-hidden"
      >
        <div className="absolute top-2 left-2 md:top-4 md:left-4 category-badge">
          hello
        </div>
        <Image
          src={
            "https://themeger.shop/wordpress/katen/minimal/wp-content/uploads/sites/5/2022/08/scott-webb-266121-unsplash-scaled-e1662301425523.jpg"
          }
          height={428}
          width={851}
          alt="hello"
          className="w-full justify-normal object-cover group-hover:scale-125 duration-300 ease-in-out transition-transform align-middle"
          priority
        />
      </Link>
      <div className="w-full">
        <div className="flex items-center gap-2">
          <Link href="https://themeger.shop/wordpress/katen/minimal/blog/author/katen/">
            <Avatar>
              <AvatarImage
                src="https://themeger.shop/wordpress/katen/minimal/wp-content/uploads/sites/5/2022/08/nick-arnot-321267-unsplash-48x48.jpg"
                alt="author"
                height={32}
                width={32}
              />
            </Avatar>
          </Link>
          <div>
            <Link
              href="https://themeger.shop/wordpress/katen/minimal/blog/author/katen/"
              title="Posts by Katen Doe"
              rel="author"
              className="text-zinc-900 dark:text-white text-base font-semibold hover:text-primary"
            >
              Katen Doe
            </Link>

            <div className="text-gray-400 text-xs">
              posted at, August 29, 2022
            </div>
          </div>
        </div>
        <h5 className="font-bold text-2xl md:text-4xl font-poppins mb-0 mt-4 hover:text-primary">
          <Link href="/blog/2022/08/29/master-the-art-of-nature-with-these-7-tips/">
            Master The Art Of Nature With These 7 Tips
          </Link>
        </h5>
        <p className="py-2 text-sm md:text-base md:py-4 font-poppins text-gray-400 dark:text-gray-500">
          The European languages are members of the same family. Their separate
          existence is a myth…
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
