import React from "react";
import Image from "next/image";

function ArtPiecesPreview({ title, image, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} width={400} height={250} alt={image} />
      <h3>{artist}</h3>
    </>
  );
}

export default ArtPiecesPreview;

/* How to get the individual image data from ArtPieces into here

Status Quo: ArtPieces maps from {pieces}, which is data from fetch out of App

Approach 1:

- I still need to iterate over pieces
- Since ArtPiecesPreview shall only have image, title, artist I don't want to pass pieces further down

Data flow:
App > data >> {pieces} >> HomePage > pieces.map((piece))

There should be a wrapping comp that contains the iteration over pieces which maps the data from the endpoints onto the ArtPiecesPreview props

like
<div>
{pieces.map((piece)) => { return ()
         <ArtPiecesPreview image= />
 }
         }
xx> nah, that doesn't make too much sense, because I don't want to return several ArtPiecesPreview

Maybe more like:

ArtPieces

<ArtPiecesPreview 
    image={pieces.map((piece) => {piece.imageSource})} 
    title={pieces.map((piece) => {piece.title})}

ArtPiecesPreview

return (
    <h2>{title}</h2>
    <Image 
        src={image}
        width={400} //default
        height={250}
        alt={piece.name}
    />
)

this way I should be able to pass down data and handle representation in the comp


❌ xx> didn'tn work: this is my code so far

unction ArtPieces({ pieces }) {
  return (
    <>
      <h1>Art Pieces</h1>
      <ArtPiecesPreview
        title={pieces.map((piece) => {
          piece.name;
        })}
      />
🟡xx> i dn't have a return statemennt here

function ArtPiecesPreview({ title }) {
  console.log(title);

  return <h2>{title}</h2>;
}
🟡xx> there's no data being passed down to the child comp


Approach 2:

- correct map so that it contains return statement
✅ ==> now I've managed to pass data thorugh props so that ArtPiecesPreview can render it

- optimize data flow and thereby statement structure of map in ArtPieces so that data get passed down as batches under 1 slug

like
map over the whole pieces and return piece.slug
from that pass down single data of pieces onto props

I'll nest ArtPiePrev and the pieces.map into an ul
I'll wrap pieces.map around ArtPiePrev
The <li> will contain the slug and thereby differentiate between the iterables of pieces
The Content of the <li> shall be ArtPiecPrev, so that ArtPieces can pass down data to the child where the representation will be handled

✅ This worked:

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

function ArtPiecesPreview({ title, image, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} width={400} height={250} alt={title} />
      <h3>{artist}</h3>
    </>
  );
}

export default ArtPiecesPreview;

*/
