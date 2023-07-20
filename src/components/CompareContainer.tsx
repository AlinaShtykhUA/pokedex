import React from 'react';
import { userPokemonsType } from '../utils/types';
import CompareElement from './CompareElement';
import CompareEmpty from './CompareEmpty';

const CompareContainer = ({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) => {
  return (
    <div className="compare-container">
      {isEmpty ? <CompareEmpty /> : <CompareElement pokemon={pokemon} />}
    </div>
  );
};

export default CompareContainer;
