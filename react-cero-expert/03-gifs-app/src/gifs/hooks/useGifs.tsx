import { useRef, useState } from "react";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifsByQueryAction(term);
    setGifs(gifs);
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
    console.log({ gifs });

    setGifs(gifs);
    gifsCache.current[query] = gifs;
  };

  return {
    // values
    previousTerms,
    gifs,
    // functions
    handleTermClick,
    handleSearch,
  };
};
