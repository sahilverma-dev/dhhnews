import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="mb-4">
      <div className="relative group rounded-lg aspect-square md:aspect-auto overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black/20 dark:bg-black/50" />

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col text-center w-full max-w-[650px] items-center gap-4">
          <div className="category-badge">hello</div>
          <h4 className="text-4xl font-bold my-5">
            <a
              href="https://themeger.shop/wordpress/katen/classic/blog/2022/08/23/your-light-is-about-to-stop-being-relevant/"
              tabIndex={0}
              className="text-white hover:text-primary transition-all"
            >
              Your Light Is About To Stop Being Relevant
            </a>
          </h4>
          <ul className="flex gap-3 items-center text-sm text-gray-100 md:text-gray-200 mb-0">
            <li className="list-inline-item">
              <a
                href="https://themeger.shop/wordpress/katen/classic/blog/author/katen/"
                title="Posts by Katen Doe"
                rel="author"
                tabIndex={0}
              >
                Katen Doe
              </a>
            </li>
            <li className="list-inline-item">August 23, 2022</li>
          </ul>
        </div>
        <Image
          src="https://themeger.shop/wordpress/katen/classic/wp-content/uploads/sites/4/2022/08/matt-le-112706-unsplash-1140x540.jpg"
          width={1140}
          height={540}
          alt="poster"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Carousel;
