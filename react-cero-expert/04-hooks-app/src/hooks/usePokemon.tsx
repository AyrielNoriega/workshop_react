import React, { useState } from 'react'

interface Props {
    id: number;
}

interface Pokemon {
    id: number;
    name: string;
    imageString: string;
}

export const usePokemon = ({ id }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon>(null)

    const getPokemonById = async (id: number) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await resp.json();

        setPokemon({
            id: data.id,
            name: data.name,
            imageString: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        });
    };

    return {

    };
};
