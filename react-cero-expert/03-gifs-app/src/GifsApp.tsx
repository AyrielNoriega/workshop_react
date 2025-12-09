import { GifsList, PreviousSearches } from "./gifs/components";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader, SearchBard } from "./shared/components";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      <SearchBard placeholder="Busca y comparte lo que quieras" />

      {/* Previous Searches */}
      <PreviousSearches />

      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
