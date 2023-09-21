"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  page: string | number;
  total: string | number;
}

const Pagination: FC<Props> = ({ page, total }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-between">
      <Button
        disabled={page === "1"}
        onClick={() => {
          router.push(`${pathname}/?page=${Number(page) - 1}`);
        }}
      >
        Previous Page
      </Button>
      <Button
        disabled={Number(page) * 10 >= Number(total)}
        onClick={() => {
          router.push(`${pathname}/?page=${Number(page) + 1}`);
        }}
      >
        Next Page
      </Button>
    </div>
  );
};

export default Pagination;
