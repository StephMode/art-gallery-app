import React from "react";
import Image from "next/image";
// Two important steps to not forget:
// 1. Import nextJS Image into comp in order to use it (as opposed to the React Image component)
// 2. Include the domain of the API into nextJS config

function ArtPieces({ pieces }) {
  // console.log(pieces);

  return (
    <>
      <h1>Art Pieces</h1>
      <ul>
        <li>
          <p>{pieces[1].imageSource}</p>
          <Image
            src={pieces[10].imageSource}
            width={400}
            height={800}
            alt="some img"
          ></Image>
        </li>
      </ul>
    </>
  );
}

export default ArtPieces;
