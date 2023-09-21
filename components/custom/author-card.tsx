"use client";

import { Author } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface Props {
  author: Author;
}

const AuthorCard: FC<Props> = ({ author }) => {
  return (
    <div className="flex group flex-col items-center gap-2 md:gap-3">
      <Link
        href={`/author/${author.slug}`}
        className="overflow-hidden w-1/2 rounded-full"
      >
        <Image
          src={author.image.src}
          alt={author.image.alt}
          height={200}
          width={200}
          className="rounded-full object-cover aspect-square md:group-hover:scale-110 duration-200 transition-all"
        />
      </Link>
      <Link
        href={`/author/${author.slug}`}
        className="text-slate-800 hover:text-primary dark:text-white font-bold text-2xl md:text-3xl transition-all"
      >
        {author.name}
      </Link>
    </div>
  );
};

export default AuthorCard;
