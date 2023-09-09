import ArtistCard from "@/components/custom/artist-card";
import { getArtists } from "@/sanity/calls/getArtists";

const Artists = async () => {
  const artists = await getArtists();
  return (
    <main className="p-4 max-w-5xl min-h-screen mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {artists.map((artist) => (
        <ArtistCard key={artist.slug} artist={artist} />
      ))}
    </main>
  );
};

export default Artists;
