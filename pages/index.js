import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  async function fetcher(url) {
    const response = await fetch(url);
    return await response.json();
  }

  if (error) return <h1>🛑 failed</h1>;
  if (isLoading) return <h1>⏳ is loading</h1>;

  const fetchData = data;

  console.log(fetchData);

  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces></ArtPieces>
    </div>
  );
}
