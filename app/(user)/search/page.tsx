import { FC } from "react";

interface Props {
  params: {};
  searchParams: { q: string };
}

const Search: FC<Props> = ({ searchParams }) => {
  return <main className="p-4 max-w-5xl mx-auto">{searchParams.q}</main>;
};

export default Search;
