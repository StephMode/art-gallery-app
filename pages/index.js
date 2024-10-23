import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import Image from "next/image";

// 🚨 FIX: lift fetching and SWR up to app to mitigate issues of data not being available upon rendering in child comps
// 👍🏻 That fixed it

export default function HomePage({ pieces }) {
  //implement Math.floor(MathRandom) for Spotlight here
  // store it in a variable so that the props can use it as an index
  const randomSpotlightIndex = Math.floor(Math.random() * pieces.length);

  // console.log(randomSpotlightIndex); // log as expected, twice in the console due to strict mode being enabled/true, which is normal in development in nextJS 👍🏻

  return (
    <div>
      <h1>Art Gallery App</h1>
      <h2>Piece in Spotlight</h2>
      <Spotlight
        artist={pieces[randomSpotlightIndex]?.artist}
        image={pieces[randomSpotlightIndex]?.imageSource}
      />
      <h2>Artpieces Overview</h2>
      <ArtPieces pieces={pieces}></ArtPieces>
    </div>
  );
}
