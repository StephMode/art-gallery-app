import ArtPieces from "@/components/ArtPieces";

// 🚨 FIX: lift fetching and SWR up to app to mitigate issues of data not being available upon rendering in child comps
// 👍🏻 That fixed it

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
