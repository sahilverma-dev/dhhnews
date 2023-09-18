"use client";

import { FC, ReactNode } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "../ui/toaster";

interface Props {
  children: ReactNode;
}

const client = new QueryClient();

const TanstackQueryProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <Toaster />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
