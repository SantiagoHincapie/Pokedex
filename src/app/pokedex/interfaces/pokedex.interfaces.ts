// Generated by https://quicktype.io

import { PokeData } from "./PokeData.interface";

export interface PokemonResults {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonName[];
}

export interface PokemonName {
    name: string;
    pokeData:  PokeData;
}
