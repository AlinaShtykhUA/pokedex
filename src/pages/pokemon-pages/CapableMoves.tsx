import React from 'react';
import { useAppSelector } from '../../app/hooks';

const CapableMoves = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  const pokemonAbility = pokemonData?.pokemonAbilities?.abilities?.map(
    (ability: string) => (
      <li key={ability} className="capable-moves__item ability">
        {ability}
      </li>
    )
  );
  const pokemonMove = pokemonData?.pokemonAbilities?.moves?.map(
    (move: string) => (
      <li key={move} className="capable-moves__item">
        {move}
      </li>
    )
  );
  return (
    <div className="page capable-moves">
      <h2 className="capable-moves__title">Abilities</h2>
      <ul className="capable-moves__list">{pokemonAbility}</ul>

      <h2 className="capable-moves__title">Moves</h2>
      <ul className="capable-moves__list move">{pokemonMove}</ul>
    </div>
  );
};

export default CapableMoves;
