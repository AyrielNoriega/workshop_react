import { useState } from "react";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);
  const [gifs, setGifs] = useState<Gif[]>([]);

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
    console.log({ gifs });

    setGifs(gifs);
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
