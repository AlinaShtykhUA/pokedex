import React from 'react';
import { useAppSelector } from '../../app/hooks';

const Catching = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  const pokemonItem = pokemonData?.encounters.map((encounter: string) => (
    <li key={encounter} className="catching__item">
      {encounter}
    </li>
  ));

  return (
    <div className="cutching">
      <ul className="catching__list">{pokemonItem}</ul>
    </div>
  );
};

export default Catching;
