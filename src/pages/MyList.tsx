import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserPokemons } from '../app/reducers/getUserPokemons';
import { Login, PokemonCardGrid } from '../components';
import { Wrapper } from '../sections';

const MyList = () => {
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);

  return (
    <div className="list">
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </div>
  );
};

export default Wrapper(MyList);
