import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Background } from './components'
import { Footer, Navbar } from './sections'
import { About, Compare, MyList, Pokemon, Search } from './pages'

import './scss/index.scss'

const App = () => {
  return (
    <div className='main-container'>
      <Background/>

      <BrowserRouter>
        <div className='app'>
          <Navbar/>

          <Routes>
            <Route element={<Search/>} path="/search" />
            <Route element={<MyList/>} path="/list" />
            <Route element={<About/>} path="/about" />
            <Route element={<Compare/>} path="/compare" />
            <Route element={<Pokemon/>} path="/pokemon/:id" />

            <Route element={<Navigate to="/pokemon/1" />}path="*" />
          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App