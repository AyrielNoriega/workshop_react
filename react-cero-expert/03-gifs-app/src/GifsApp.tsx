import { GifsList, PreviousSearches } from "./gifs/components";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBard } from "./shared/components";
import { useGifs } from "./gifs/hooks";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const { previousTerms, gifs, handleSearch, handleTermClick } = useGifs();
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
