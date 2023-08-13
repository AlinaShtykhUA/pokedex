import React from 'react';

const PokemonContainer = ({ image }: { image: string | undefined }) => {
  return (
    <div className="circle-container">
      <div className="circle-container__outer">
        <div className="outer__inner-circle">
          <img src={image} alt="pokemon" className="outer__img" />
        </div>

        <div className="outer__lines">
          <div className="lines__line line-1"></div>
          <div className="lines__line line-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonContainer;
