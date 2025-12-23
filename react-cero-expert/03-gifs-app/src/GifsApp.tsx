import { useState } from "react";
import { GifsList, PreviousSearches } from "./gifs/components";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBard } from "./shared/components";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClick = (term: string) => {
    console.log({ term });
  }

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBard placeholder="Busca y comparte lo que quieras"  />

      {/* Previous Searches */}
      <PreviousSearches searches={previousTerms} onLabelClick={(term: string) =>handleTermClick(term)}/>

      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
