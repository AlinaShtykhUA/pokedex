import { createSlice } from '@reduxjs/toolkit';
import {
  generatedPokemonType,
  PokemonTypeInitialState,
} from '../../utils/types';
import { getInitialPokemonData } from '../reducers/getInitialPokemonData';
import { getPokemonData } from '../reducers/getPokemonData';
import { getUserPokemons } from '../reducers/getUserPokemons';
import { removePokemonFromUserList } from '../reducers/removePokemonFromUserList';

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      const queue = [...state.compareQueue];
      queue.splice(index, 1);
      state.compareQueue = queue;
    },
  },
  extraReducers: builder => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
    builder.addCase(getUserPokemons.fulfilled, (state, action) => {
      state.userPokemons = action.payload!;
    });
    builder.addCase(removePokemonFromUserList.fulfilled, (state, action) => {
      const userPokemon = [...state.userPokemons];
      const index = userPokemon.findIndex(
        pokemon => pokemon.firebaseId === action.payload?.id
      );
      userPokemon.splice(index, 1);
      state.userPokemons = userPokemon;
    });
  },
});

export const { addToCompare, removeFromCompare } = pokemonSlice.actions;
