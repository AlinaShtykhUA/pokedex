import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { uuidv4 } from 'uuidv7';
import { IoGitCompare } from 'react-icons/io5';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { pokemonTypeInterface } from '../utils/types';

const PokemonCard = ({ pokemon }: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };
  return (
    <div className="pokemon-card" key={pokemon.id}>
      <div className="pokemon-card__nav">
        <div className="pokemon-card__list">
          {location.pathname.includes('/pokemon') ||
          location.pathname.includes('/search') ? (
            <FaPlus className="plus" />
          ) : (
            <FaTrash className="trash" />
          )}
        </div>
        <div className="pokemon-card__compare">
          <IoGitCompare />
        </div>
      </div>

      <h3 className="pokemon-card__title" onClick={handlerNavigate}>
        {pokemon.name}
      </h3>
      <img
        src={pokemon.image}
        alt="pokemon-img"
        className="pokemon-card__img"
        loading="lazy"
        onClick={handlerNavigate}
      />

      <div className="pokemon-card__types">
        {pokemon.types.map((type: pokemonTypeInterface) => {
          const keys = Object.keys(type);
          return (
            <div className="types-type" key={uuidv4()}>
              <img
                className="types-type__img"
                src={type[keys[0]].image}
                alt="pokemon type"
                loading="lazy"
              />
              <h6 className="types-type__text">{keys[0]}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;