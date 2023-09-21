import AuthorCard from "@/components/custom/author-card";
import { getAuthors } from "@/sanity/calls/getAuthors";

const Authors = async () => {
  const authors = await getAuthors();
  return (
    <main className="p-4 w-full max-w-5xl min-h-screen mx-auto ">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
          Authors
        </h3>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-4 w-full">
        {authors.map((author) => (
          <AuthorCard key={author.slug} author={author} />
        ))}
      </div>
    </main>
  );
};

export default Authors;
