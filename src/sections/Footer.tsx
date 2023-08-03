import { signOut } from 'firebase/auth';
import React from 'react';
import { MdOutlinePowerSettingsNew } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setPokemonTab, setToast, setUserStatus } from '../app/slices/appSlice';
import { firebaseAuth } from '../utils/firebaseConfig';
import { pokemonTabs } from '../utils/constants';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const dispatch = useAppDispatch();
  const { currentPokemonTab } = useAppSelector(({ app }) => app);
  const location = useLocation();

  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast('Logged out successfully from firebase.'));
  };

  const routes = [
    {
      name: pokemonTabs.description,
      value: 'Description',
    },
    {
      name: pokemonTabs.evolution,
      value: 'Evolution',
    },
    {
      name: pokemonTabs.locations,
      value: 'Catching',
    },
    {
      name: pokemonTabs.moves,
      value: 'Capable Moves',
    },
  ];

  const tabsRote = routes.map(route => {
    return (
      <li
        key={route.name}
        className={`${currentPokemonTab === route.name ? 'active' : ''} `}
        onClick={() => {
          dispatch(setPokemonTab(route.name));
        }}
      >
        {route.value}
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__block"></div>

      <div className="footer__menu">
        {location.pathname.includes('/pokemon') && (
          <ul className="footer__menu-list">{tabsRote}</ul>
        )}
      </div>

      <div className="footer__icon footer__block">
        <MdOutlinePowerSettingsNew onClick={handleLogOut} />
      </div>
    </footer>
  );
};

export default Footer;
