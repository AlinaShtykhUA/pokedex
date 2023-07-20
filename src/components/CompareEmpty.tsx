import React from 'react';

import { FaPlus } from 'react-icons/fa';

const CompareEmpty = () => {
  return (
    <div className="compare-empty">
      <button className="compare-empty__btn">
        <FaPlus />
      </button>
      <h3 className="compare-empty__text">Add pokemon to comparison</h3>
    </div>
  );
};

export default CompareEmpty;
