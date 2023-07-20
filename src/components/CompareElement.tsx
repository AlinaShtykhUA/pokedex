import React from 'react';
import { useNavigate } from 'react-router-dom';
import { uuidv4 } from 'uuidv7';
import { useAppDispatch } from '../app/hooks';
import { addPokemonToList } from '../app/reducers/addPokemonToList';
import { removeFromCompare } from '../app/slices/pokemonSlice';
import { pokemonTypes } from '../utils/getPokemonTypes';
import { PokemonStatType, pokemonTypeInterface } from '../utils/types';

const CompareElement = ({ pokemon }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const createStatsArray = (
    types: pokemonTypeInterface[],
    statType: PokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypeInterface) => {
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat: string) => {
        if (!statsSet.has(stat)) {
          statsArray.push({
            name: stat,
            image: (pokemonTypes as any)[stat].image,
          });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };
  const getStats = () => {
    const data = createStatsArray(pokemon.types, 'strength');
    return (
      <>
        <div className="info-types__type">
          <h4 className="info-types__title">Strength</h4>
          <div className="info-types__icons">
            {createStatsArray(pokemon.types, 'strength').map(
              (stat: { image: string }) => (
                <div key={uuidv4()} className="info-types__container">
                  <img
                    className="info-types__img"
                    src={stat.image}
                    alt="pokemon type"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="info-types__type">
          <h4 className="info-types__title">Resistance</h4>
          <div className="info-types__icons">
            {createStatsArray(pokemon.types, 'resistance').map(
              (stat: { image: string }) => (
                <div key={uuidv4()} className="info-types__container">
                  <img
                    className="info-types__img"
                    src={stat.image}
                    alt="pokemon type"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="info-types__type">
          <h4 className="info-types__title">Vulnerable</h4>
          <div className="info-types__icons">
            {createStatsArray(pokemon.types, 'vulnerable').map(
              (stat: { image: string }) => (
                <div key={uuidv4()} className="info-types__container">
                  <img
                    className="info-types__img"
                    src={stat.image}
                    alt="pokemon type"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="info-types__type">
          <h4 className="info-types__title">Weakness</h4>
          <div className="info-types__icons">
            {createStatsArray(pokemon.types, 'weakness').map(
              (stat: { image: string }) => (
                <div key={uuidv4()} className="info-types__container">
                  <img
                    className="info-types__img"
                    src={stat.image}
                    alt="pokemon type"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </>
    );
  };

  const handlerRemove = () => {
    dispatch(removeFromCompare({ id: pokemon.id }));
  };
  const handlerNavigate = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };
  const handlePlus = () => {
    dispatch(addPokemonToList(pokemon));
  };
  return (
    <div className="compare-element">
      <div className="compare-element__info">
        <div className="compare-element__info-details">
          <h3 className="info-details__title">{pokemon?.name}</h3>
          <img
            className="info-details__img"
            src={pokemon.image}
            alt="pokemon img"
          />
        </div>

        <div className="compare-element__info-types">
          <div className="info-types__type">
            <h4 className="info-types__title">Type</h4>
            <div className="info-types__icons">
              {pokemon.types.map((type: pokemonTypeInterface) => {
                const keys = Object.keys(type);
                return (
                  <div key={uuidv4()} className="info-types__container">
                    <img
                      className="info-types__img"
                      src={type[keys[0]].image}
                      alt="pokemon type"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {getStats()}
        </div>
      </div>
      <div className="compare-element__action-btns">
        <button onClick={handlePlus} className="action-btns__btn">
          Add
        </button>
        <button onClick={handlerNavigate} className="action-btns__btn">
          View
        </button>
        <button onClick={handlerRemove} className="action-btns__btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CompareElement;
