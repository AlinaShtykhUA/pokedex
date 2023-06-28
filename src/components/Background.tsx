import React from 'react'
import pokeball1 from '../assets/pokeball.png'
import pokeball2 from '../assets/pokeball2.png'

const Background = () => {
  return (
    <div className='background'>
      <img className='pokeball pokeball1' src={pokeball1} alt='pokeball'/>
      <img className='pokeball pokeball2' src={pokeball2} alt='pokeball'/>

      <img className='pokeball pokeball3' src={pokeball1} alt='pokeball'/>
      <img className='pokeball pokeball4' src={pokeball2} alt='pokeball'/>

      <img className='pokeball pokeball5' src={pokeball1} alt='pokeball'/>
      <img className='pokeball pokeball6' src={pokeball2} alt='pokeball'/>
    </div>
  )
}

export default Background