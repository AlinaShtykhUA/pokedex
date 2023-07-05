export interface AppTypeInitialState {}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: undefined | generatedPokemonType[];
}

export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string | any;
  id: number;
  image: string;
  types: pokemonTypeInterface[];
}

export interface pokemonTypeInterface {
  [key: string]: {
    image: string;
    strength: string[];
    weakness: string[];
    resistance: string[];
    vulnerable: string[];
  };
}

export interface userPokemonsType extends generatedPokemonType {
  firebaseId?: string;
}