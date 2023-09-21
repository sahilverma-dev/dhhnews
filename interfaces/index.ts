import { PortableTextBlock } from "sanity";

export interface News {
  _id: string;
  _createdAt: string;
  slug: string;
  description: string;
  title: string;
  author: Author;
  poster: SanityImage;
  categories: Category[];
  artists: Artist[];
  content: PortableTextBlock[];
}

export interface SanityImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Category {
  title: string;
  slug: string;
  description: string;
}

export interface Label {
  name: string;
  slug: string;
  description: string;
  logo: SanityImage;
}

export type Role = "admin" | "author";

export interface Author {
  name: string;
  slug: string;
  role: Role;
  image: SanityImage;
}

export interface Skill {
  name: string;
  slug: string;
  description: string;
  textColor: string;
  bgColor: string;
}

export interface Artist {
  artistName: string;
  realName: string;
  slug: string;
  image: SanityImage;
  bio: string;
  dob: Date;
  location: string;
  website: string;
  spotify: string;
  label: Label;
  skills: Skill[];
}

export interface ContactData {
  email: string;
  name: string;
  title: string;
  message: string;
}
