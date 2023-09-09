"use client";

import { Artist } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";
import { Badge } from "../ui/badge";

interface Props {
  artist: Artist;
}

const ArtistCard: FC<Props> = ({ artist }) => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-2 hover:bg-black/20 w-full rounded-md transition-all"
        >
          <Image
            src={artist.image.src}
            alt={artist.image.alt}
            height={200}
            width={200}
            className="rounded-full object-cover aspect-square"
          />
          <h3 className="text-slate-800 dark:text-white font-bold text-3xl">
            {artist.artistName}
            {/* <Badge variant="outline">{artist.skills[0].name}</Badge> */}
          </h3>
          <p title={artist.realName} className="text-xs truncate w-1/2">
            {artist.realName}
          </p>
        </div>
      ))}
    </>
  );
};

export default ArtistCard;
