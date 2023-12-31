"use client";

import { Artist } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface Props {
  artist: Artist;
}

const ArtistCard: FC<Props> = ({ artist }) => {
  return (
    <div className="flex group flex-col items-center gap-2 md:gap-3">
      <Link
        href={`/artist/${artist.slug}`}
        className="overflow-hidden rounded-full"
      >
        <Image
          src={artist.image.src}
          alt={artist.image.alt}
          height={200}
          width={200}
          className="rounded-full object-cover aspect-square md:group-hover:scale-110 duration-200 transition-all"
        />
      </Link>
      <Link
        href={`/artist/${artist.slug}`}
        className="text-slate-800 hover:text-primary dark:text-white font-bold text-2xl md:text-3xl transition-all"
      >
        {artist.artistName}
      </Link>
      <Badge
        variant="outline"
        className="rounded-full text-xs md:text-sm text-gray-500 font-normal dark:text-gray-200"
      >
        Rapper
      </Badge>
    </div>
  );
};

export default ArtistCard;
