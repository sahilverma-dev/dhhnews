import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full max-w-7xl md:mx-auto md:m-4 h-[600px] md:h-[700px]">
      <div className="relative container md:rounded-md h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: "url(/images/not-found.png)",
          }}
        >
          <div className="relative w-full h-full z-30 bg-black/20 dark:bg-black/60" />
        </div>
        <div className="relative h-full flex flex-col justify-center gap-4 z-30 text-white text-center max-w-2xl mx-auto">
          <h1 className="font-semibold sm:text-[170px] text-9xl mb-5">404</h1>
          <h3 className="sm:text-2xl text-xl font-medium mb-3">
            Page Not Found
          </h3>
          <p className="font-normal leading-relaxed">
            Drat! The page you are after seems to have eluded us. Head back to
            the homepage and embark on a new search.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="bg-primary text-white font-normal rounded-full py-2.5 px-7"
            >
              Find on Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
