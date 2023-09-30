"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-4 border-t px-4 py-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full">
          <div className="w-full flex items-center justify-between flex-col md:flex-row gap-y-2 md:gap-y-4">
            <div className="col-md-4">
              <span className="text-gray-400">
                © 2023
                <Link
                  href="/"
                  className="text-zinc-900 dark:text-white font-bold translate-x-full"
                >
                  {" "}
                  DHH News{" "}
                </Link>
                Made by{" "}
                <a
                  href="https://sahilverma.dev/"
                  target="_blank"
                  className="text-zinc-900 dark:text-white hover:text-primary font-bold translate-x-full"
                >
                  Sahil Verma
                </a>{" "}
              </span>
            </div>
            {/* TODO: change icons */}
            {/* <div className="col-md-4 text-center">
              <ul className="social-icons list-unstyled list-inline mb-0 ">
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
              </ul>
            </div> */}
            <div className="col-md-4">
              <Button
                id="return-to-top"
                variant={"outline"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <i className="icon-arrow-up" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
