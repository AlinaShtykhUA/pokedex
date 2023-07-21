import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from 'react-icons/ai';
import { Wrapper } from '../sections';

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">Pokedex</h1>
      <h3 className="about__subtitle">
        Pokedex - it's app created in React+Typescript, also using react router,
        redux toolkit, axios and PokeAPI. Authorization made in firebase.
      </h3>

      <h2 className="about__author">Author of this project Alina Shtykh</h2>
      <div className="about__social">
        <a
          href="https://www.linkedin.com/in/alina-shtykh-2b6070188/"
          className="about__social-link linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/AlinaShtykhUA"
          className="about__social-link github"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.web-shtykh.tech/"
          className="about__social-link mysite"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLink />
        </a>
      </div>
    </div>
  );
};

export default Wrapper(About);
