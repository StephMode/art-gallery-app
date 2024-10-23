import React from "react";
import Image from "next/image";

function Spotlight({ artist, image }) {
  // Image and text for represenation go here
  return (
    <>
      <h2>{artist}</h2>
      <Image src={image} width={650} height={300} alt={"piece in spotlight"} />
      <p>meh</p>
    </>
  );
}

export default Spotlight;

/* Develop Spotlight comp to show one art piece at random

First Approach:

- make it child of HomePage and use pieces comp to pull data

xx> 🟡 passing down of data works, but I don't see how I can use props image, artist there there

Second Approach

- make it child of ArtPieces
so that it can make use of pieces and can call it's own props

xx> 🟡 could work technically, but from a component structure perspective, it doesn'T make to much sense
!!> 🟡 look at the wireframes again: the Spotlight is the HOMEPAGE, hence the comp should rather be child of homepage

Third Approach

✅ - make it child of HomePage after all
✅ - MathRandom should be implemented in HomePage where we have access to the data
✅ - call props image, artist in spotlight
 ✅- MathRandom shall then be stored in a variable so that it can be accessed as an index to the props
- props will then pass down randomized index of artist and imageSource as props in the comp
- Spotlight shall than serve as purely represenational component



*/
