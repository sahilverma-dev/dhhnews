"use client";

import Image from "next/image";
import { useState } from "react";

// icons
import { CiSearch as SearchIcon } from "react-icons/ci";
import { HiBars2 as MenuIcon } from "react-icons/hi2";

// components
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// theme
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <Sheet>
      <header className="w-full px-4 py-6 border-b">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="w-20">
              <SheetTrigger asChild>
                <Button type="button" variant={"ghost"} size="icon">
                  <MenuIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                </Button>
              </SheetTrigger>
            </div>
            <div className=" text-center">
              <Link href="/" className="navbar-brand dark:hidden">
                <Image
                  src="https://themeger.shop/wordpress/katen/minimal/wp-content/uploads/sites/5/2022/08/logo.svg"
                  alt="Katen"
                  width={118}
                  height={26}
                />
              </Link>
              <Link
                href="/"
                className="navbar-brand hidden dark:block logo-light"
              >
                <Image
                  src="https://themeger.shop/wordpress/katen/minimal/wp-content/uploads/sites/5/2022/08/logo-light.svg"
                  alt="Katen"
                  width={118}
                  height={26}
                />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                type="button"
                variant={"ghost"}
                size="icon"
                className="search icon-button float-end"
              >
                <SearchIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
          </div>
        </div>
        <SheetContent side="left" className="w-[300px]  h-full flex flex-col">
          <div className="">
            <a
              href="https://themeger.shop/wordpress/katen/minimal/"
              className="navbar-brand hidden dark:block"
            >
              <Image
                src="https://themeger.shop/wordpress/katen/minimal/wp-content/uploads/sites/5/2022/08/logo-light.svg"
                alt="Katen"
                width={118}
                height={26}
              />
            </a>
            <a
              href="https://themeger.shop/wordpress/katen/minimal/"
              className="navbar-brand block dark:hidden"
            >
              <Image
                src="https://themeger.shop/wordpress/katen/minimal/wp-content/uploads/sites/5/2022/08/logo.svg"
                alt="Katen"
                width={118}
                height={26}
              />
            </a>
          </div>
          <nav className="mt-12">
            <ul>
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  key={index}
                  id="menu-item-30"
                  className="border-b w-full px-0 py-4 group"
                >
                  <Link
                    href="/"
                    className="font-normal block text-gray-500 dark:text-gray-400 text-sm group-hover:text-primary w-full"
                  >
                    Home
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* TODO replace icons and style */}
          {/* <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-full border-t">
            <li className="list-inline-item">
              <a href="http://facebook.com/username" target="_blank">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://twitter.com/username" target="_blank">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://instagram.com/username" target="_blank">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://pinterest.com/username" target="_blank">
                <i className="fa-brands fa-pinterest" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://tiktok.com/username" target="_blank">
                <i className="fa-brands fa-tiktok" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://youtube.com/username" target="_blank">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
          </ul> */}
        </SheetContent>
      </header>
    </Sheet>
  );
};

export default Header;
