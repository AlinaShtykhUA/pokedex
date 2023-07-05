import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/getPokemonTypes";
import { generatedPokemonType, genericPokemonType, pokemonTypeInterface } from "../../utils/types";

type PokemonTypeName = keyof typeof pokemonTypes;

export const getPokemonData = createAsyncThunk("pokemon/randomPokemon", async (pokemons: genericPokemonType[]) => {
  try {
    const pokemonsData: generatedPokemonType[] = [];
    for await (const pokemon of pokemons) {
      const { data }: { data: { id: number; types: { type: generatedPokemonType }[] } } = await axios.get(pokemon.url);

      const types = data.types.map(({ type: { name } }: { type: { name: PokemonTypeName } }) => ({
        [name]: pokemonTypes[name] as pokemonTypeInterface[PokemonTypeName],
      }));


      let image:string = images[data.id]
      if(!image){
        image = defaultImages[data.id]
      }

      if(image){
        pokemonsData.push({
          name: pokemon.name,
          id: data.id,
          image, 
          types,
        })
      }
    }
    return pokemonsData;
  } catch (err) {
    console.log(err)
  }
})