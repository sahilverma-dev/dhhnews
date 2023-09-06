import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getYoutubeVideoID = (url: string) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

export function getInstagramId(url: string): string | null {
  const regex = /\/(reel|p)\/([\w-]+)\//;
  const match = url.match(regex);

  if (match && match.length === 3) {
    return match[2];
  } else {
    return null; // Invalid or unsupported URL
  }
}
