"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// icons
import { CiSearch as SearchIcon } from "react-icons/ci";
import { HiBars2 as MenuIcon } from "react-icons/hi2";

// components
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// theme
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { menuData } from "@/constants/menuData";
import { Input } from "../ui/input";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openSheet, setOpenSheet] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <>
      <header className="w-full px-4 py-4 md:py-6 border-b">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="w-20">
              <Button
                type="button"
                variant={"ghost"}
                size="icon"
                onClick={() => setOpenSheet(true)}
              >
                <MenuIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
            <div className=" text-center">
              <Link href="/" className="navbar-brand ">
                <Image
                  src="/images/logo-dark-long.svg"
                  alt="DHH News"
                  width={150}
                  height={50}
                  className="h-5 md:h-6 w-auto dark:hidden"
                />
                <Image
                  src="/images/logo-light-long.svg"
                  alt="DHH News"
                  width={150}
                  height={50}
                  className="h-5 md:h-6 w-auto hidden dark:block "
                />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    variant={"ghost"}
                    size="icon"
                    className="search icon-button float-end"
                  >
                    <SearchIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto p-3" side="right">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log(search);
                      router.push(
                        `/search?q=${search
                          .toLocaleLowerCase()
                          .replaceAll(" ", "-")}`
                      );
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Input
                        autoFocus
                        type="search"
                        placeholder="Enter your query..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <Button
                        type="submit"
                        variant={"secondary"}
                        size={"icon"}
                        className="aspect-square"
                      >
                        <SearchIcon />
                      </Button>
                    </div>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetContent side="left" className="w-[300px]  h-full flex flex-col">
          <div className="">
            <Link href="/">
              <Image
                src="/images/logo-light-long.svg"
                alt="DHH News"
                width={118}
                height={26}
                className="hidden dark:block h-5 w-auto"
              />
              <Image
                src="/images/logo-dark-long.svg"
                alt="DHH News"
                width={118}
                height={26}
                className="block dark:hidden h-5 w-auto"
              />
            </Link>
          </div>
          <nav className="mt-6 md:mt-12">
            <ul>
              {menuData.map((menu) => (
                <li
                  key={menu.route}
                  id="menu-item-30"
                  className={`border-b w-full px-0 py-4 group ${
                    pathname === menu.route ? "border-primary" : ""
                  }`}
                  onClick={() => setOpenSheet(false)}
                >
                  <Link
                    href={menu.route}
                    className={` block ${
                      pathname === menu.route
                        ? "text-primary font-medium "
                        : "text-gray-500 font-normal dark:text-gray-400"
                    } text-sm group-hover:text-primary w-full transition-all`}
                  >
                    {menu.label}
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
      </Sheet>
    </>
  );
};

export default Header;
