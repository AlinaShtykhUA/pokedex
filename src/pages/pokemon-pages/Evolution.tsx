import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPokemonData } from '../../app/reducers/getPokemonData';
import { PokemonCardGrid } from '../../components';

const Evolution = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = currentPokemon?.evolution.map(({ pokemon }) => pokemon);
      await dispatch(getPokemonData(pokemons!));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, currentPokemon]);

  return (
    <div className="page evolution">
      {isLoaded && <PokemonCardGrid pokemons={randomPokemons!} />}
    </div>
  );
};

export default Evolution;
