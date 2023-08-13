import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Info, PokemonContainer } from '../../components';

const Description = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <div className="description">
      {pokemonData && (
        <>
          <PokemonContainer image={pokemonData?.image} />
          <Info data={pokemonData} />
        </>
      )}
    </div>
  );
};

export default Description;
