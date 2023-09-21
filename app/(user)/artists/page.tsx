import ArtistCard from "@/components/custom/artist-card";
import { getArtists } from "@/sanity/calls/getArtists";

const Artists = async () => {
  const artists = await getArtists();
  return (
    <main className="p-4 w-full max-w-5xl min-h-screen mx-auto ">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold mb-4 text-xl md:text-3xl text-title dark:text-white">
          Artists
        </h3>
      </div>
      <div className="grid gap-8 grid-cols-2 md:grid-cols-4 w-full">
        {artists.map((artist) => (
          <ArtistCard key={artist.slug} artist={artist} />
        ))}
      </div>
    </main>
  );
};

export default Artists;
