import React from "react";

function Spotlight({ artist }) {
  return (
    <>
      <h2>{artist}</h2>
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

- make it child of HomePage after all
- MathRandom should be able to operate



*/
