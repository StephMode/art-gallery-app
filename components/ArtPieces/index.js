import React from "react";
import Image from "next/image";
// Two important steps to not forget:
// 1. Import nextJS Image into comp in order to use it (as opposed to the React Image component)
// 2. Include the domain of the API into nextJS config

function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((piece) => {
          return (
            <li>
              <h2>{piece.name}</h2>
              <Image
                src={piece.imageSource}
                width={piece.dimensions.width}
                height={piece.dimensions.height}
                alt={piece.name}
              />
              <h3>{piece.artist}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArtPieces;
