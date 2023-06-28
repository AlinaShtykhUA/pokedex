import React from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { navigationRoutes } from './data/navData'
import pokeballIcon from '../assets/pokeball-icon.png'

const Navbar = () => {
  const navRoute = navigationRoutes.map(({name, route, id}) => {
    return (
      <Link to={route} key={id}>
        <li>{name}</li>
      </Link>
    )
  })
  return (
    <nav className='nav'>
      <div className="nav__icon nav__block">
        <img src={pokeballIcon} alt="pokeball-icon"/>
      </div>

      <div className="nav__menu">
        {navRoute}
      </div>

      <div className="nav__humburger-menu nav__block">
        <GiHamburgerMenu/>
      </div>
    </nav>
  )
}

export default Navbar