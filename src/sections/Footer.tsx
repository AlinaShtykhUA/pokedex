import React from 'react'
import {MdOutlinePowerSettingsNew} from "react-icons/md"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__block"></div>
      
      <div className="footer__menu"></div>

      <div className="footer__block">
        <MdOutlinePowerSettingsNew/>
      </div>
    </footer>
  )
}

export default Footer