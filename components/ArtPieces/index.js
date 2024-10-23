import React from "react";
import Image from "next/image";
import ArtPiecesPreview from "../ArtPiecesPreview";
import Spotlight from "../Spotlight";
// Two important steps to not forget:
// 1. Import nextJS Image into comp in order to use it (as opposed to the React Image component)
// 2. Include the domain of the API into nextJS config

function ArtPieces({ pieces }) {
  return (
    <>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecesPreview
              title={piece.title}
              image={piece.imageSource}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArtPieces;
