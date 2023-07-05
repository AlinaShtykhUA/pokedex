import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { navigationRoutes } from './data/navData'
import pokeballIcon from '../assets/pokeball-icon.png'

const Navbar = () => {
  const location = useLocation();
  const navRoute = navigationRoutes.map(({name, route, id}) => {
    return (
      <Link className="nav__menu-link" to={route} key={id}>
        <li className="nav__menu-item">{name}</li>
      </Link>
    )
  })

  //Navbar animation
  useEffect(() => {
    const index = navigationRoutes.findIndex(({route}) => location.pathname.includes(route))
    ul(index)
  }, [location.pathname])

  const ul = (index: number) => {
    const underlines = document.querySelectorAll<HTMLElement>(".underline")
    for(let i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%, 0, 0)"
    }
  }

  return (
    <nav className='nav'>
      <div className="nav__icon nav__block">
        <img src={pokeballIcon} alt="pokeball-icon"/>
      </div>

      <div className="nav__menu">
        <ul className="nav__menu-list">
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>

          {navRoute}
        </ul>
      </div>

      <div className="nav__humburger-menu nav__block">
        <GiHamburgerMenu/>
      </div>
    </nav>
  )
}

export default Navbar