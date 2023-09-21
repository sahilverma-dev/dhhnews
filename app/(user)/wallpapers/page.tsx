import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Wallpaper - Under Development",
  description: "Wallpaper - Under Development",
};

const Wallpapers = () => {
  return (
    <main className="p-4 max-w-5xl md:h-[700px] gap-4 mx-auto flex items-center flex-col justify-center">
      <h1 className="font-bold text-xl text-center md:text-3xl">
        This page is under development.
      </h1>
      <Image
        src="/images/under-development.gif"
        alt="under development"
        className="rounded-md md:h-[500px] w-auto"
        height={200}
        width={300}
      />
      <p className="font-medium w-full text-center">
        This page is currently in development 🧑‍💻, but we welcome your{" "}
        <Link href="/contact" className="font-bold text-blue-500">
          suggestions
        </Link>
        .
      </p>
    </main>
  );
};

export default Wallpapers;
