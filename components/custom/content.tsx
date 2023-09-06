"use client";

import React from "react";
import { PortableTextBlock } from "sanity";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import YoutubeEmbed from "./youtube-embed";
import { Button } from "../ui/button";
import InstagramEmbed from "./instagram-embed";

interface Props {
  slug: string;
  content: PortableTextBlock[];
}

const Content: React.FC<Props> = ({ slug, content }) => {
  return (
    <article
      id={slug}
      className="w-full max-w-6xl mx-auto p-4 text-gray-600 dark:text-gray-400"
    >
      <Button
        onClick={() => {
          console.log(content);
        }}
      >
        click
      </Button>
      <PortableText
        value={content}
        components={{
          block: {
            h1: ({ children }: any) => (
              <h1 className="text-3xl font-bold text-slate-950 dark:text-slate-300 mb-2 md:mb-4">
                {children}
              </h1>
            ),
            h2: ({ children }: any) => (
              <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-300 mb-2 md:mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }: any) => (
              <h3 className="text-xl font-bold text-slate-950 dark:text-slate-300 mb-2 md:mb-4">
                {children}
              </h3>
            ),
            h4: ({ children }: any) => (
              <h4 className="text-base font-bold text-slate-950 dark:text-slate-300 mb-2 md:mb-4">
                {children}
              </h4>
            ),
            normal: ({ children }: any) => (
              <p className="mb-2 md:mb-4">{children}</p>
            ),
            blockquote: ({ children }: any) => (
              <blockquote className="border-l-primary border-l-4 pl-5 my-5">
                {children}
              </blockquote>
            ),
          },
          list: {
            bullet: ({ children }: any) => (
              <ul className="mb-2 md:mb-4 ml-7 list-disc space-y-1 md:space-y-3">
                {children}
              </ul>
            ),
            number: ({ children }: any) => (
              <ol className="mb-2 md:mb-4 ml-7 list-decimal space-y-1 md:space-y-3">
                {children}
              </ol>
            ),
          },
          types: {
            image: ({ value }: any) => (
              <figure className="mb-2 md:mb-4 flex items-center text-base gap-3 flex-col">
                <Image
                  width={1024}
                  height={683}
                  src={urlForImage(value)?.url()}
                  alt={value?.alt}
                  className="w-full rounded-lg object-cover max-w-4xl mx-auto"
                />
                <figcaption className="text-xs text-black dark:text-white">
                  {value?.caption}
                </figcaption>
              </figure>
            ),
            youtube: ({ value }: any) => <YoutubeEmbed url={value?.url} />,
            instagram: ({ value }: any) => <InstagramEmbed url={value?.url} />,
          },
          marks: {
            link: ({ children, value }: any) => {
              const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
              return (
                <Link
                  href={value.href}
                  rel={rel}
                  className="underline decoration-primary-orange hover:decoration-black"
                >
                  {children}
                </Link>
              );
            },
          },
        }}
      />
    </article>
  );
};

export default Content;
