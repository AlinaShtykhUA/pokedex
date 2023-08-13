import React from 'react';

import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CompareEmpty = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/search');
  };
  return (
    <div className="compare-empty">
      <button onClick={handleNavigate} className="compare-empty__btn">
        <FaPlus />
      </button>
      <h3 className="compare-empty__text">Add pokemon to comparison</h3>
    </div>
  );
};

export default CompareEmpty;
