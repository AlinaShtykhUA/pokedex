import React from 'react';
import { userPokemonsType } from '../utils/types';
import PokemonCard from './PokemonCard';

const PokemonCardGrid = ({ pokemons }: { pokemons: userPokemonsType[] }) => {
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonsType) => {
            return <PokemonCard key={data.id} pokemon={data} />;
          })}
      </div>
    </div>
  );
};

export default PokemonCardGrid;
