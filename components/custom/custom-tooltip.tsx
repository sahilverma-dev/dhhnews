"use client";

import { FC, ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  title: string;
  children: ReactNode;
}

const CustomTooltip: FC<Props> = ({ title, children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={20}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side="left"
          className="dark:bg-zinc-800 dark:text-white"
        >
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
