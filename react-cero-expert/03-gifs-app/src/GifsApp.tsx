import { useState } from "react";
import { GifsList, PreviousSearches } from "./gifs/components";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBard } from "./shared/components";
import { getGifsByQueryAction } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    console.log({ query });
    // validar que el array no este vacio
    if (query.trim().length === 0) return;

    query = query.toLowerCase();

    // validar que el termino no exista en el array
    if (previousTerms.includes(query)) return;

    if (previousTerms.length >= 8) return;

    setPreviousTerms((prevTerms) => [query, ...prevTerms]);

    const gifs = await getGifsByQueryAction(query);
    console.log(gifs);

    setGifs(gifs);
  };

  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBard
        placeholder="Busca y comparte lo que quieras"
        onQuery={handleSearch}
      />

      {/* Previous Searches */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={(term: string) => handleTermClick(term)}
      />

      {/* Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
};
