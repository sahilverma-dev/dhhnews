import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="p-4 max-w-5xl mx-auto space-y-3">
      <div className="relative rounded-md overflow-hidden aspect-square sm:aspect-auto h-96">
        <div className="absolute inset-0 bg-black/70 flex flex-col gap-4 text-center items-center justify-center">
          <h1 className="font-bold text-4xl text-white">About Us</h1>
          <p className="text-gray-300 w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            iusto at. Pariatur doloremque fugit illum explicabo dolore
            exercitationem provident voluptatum quod accusantium voluptas,
            doloribus tenetur dolorum officia assumenda ipsam id!
          </p>
        </div>
        <Image
          src="/images/about.jpg"
          height={300}
          width={1200}
          alt="about"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full text-gray-600 dark:text-gray-400">
        <p className="mb-2 md:mb-4">
          Welcome to <b>DHH News</b> - Your Ultimate Source for Indian Hip Hop
          News and Culture!
        </p>
        <p className="mb-2 md:mb-4">
          At <b>DHH News</b>, we are passionate about celebrating and promoting
          Indian hip hop culture. We believe in the power of music, dance, and
          art to inspire, connect, and create positive change. Our mission is to
          provide you with the latest updates, interviews, reviews, and insights
          into the vibrant Indian hip hop scene.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-300 mb-2 md:mb-4">
          Our Story:
        </h3>
        <p className="mb-2 md:mb-4">
          Founded in 2023, <b>DHH News</b> has been on a journey to showcase the
          incredible talent and stories within the Indian hip hop community. Our
          team of dedicated writers, photographers, and music enthusiasts is
          committed to bringing you the most engaging and authentic content.
        </p>

        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-300 mb-2 md:mb-4">
          Why Choose Us:
        </h3>
        <ul className="mb-2 md:mb-4 ml-7 list-disc space-y-1 md:space-y-3">
          <li>
            Reliable and Up-to-Date: We stay on top of the latest news and
            trends in the Indian hip hop world to keep you informed.
          </li>
          <li>
            In-Depth Coverage: Our interviews and reviews provide a deeper look
            into the artists and their music.
          </li>
          <li>
            Community-Focused: We foster a sense of community by providing a
            platform for discussions and fan engagement.
          </li>
          <li>
            Passionate Team: Our team is driven by a shared love for hip hop,
            ensuring quality and authenticity in our content.
          </li>
        </ul>
        <p className="mb-2 md:mb-4">
          Join us in celebrating the diversity and creativity of Indian hip hop.
          Together, we&apos;ll continue to support and elevate this vibrant
          culture.
        </p>
      </div>
    </main>
  );
};

export default About;
