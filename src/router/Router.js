import React, { useState } from 'react'
import Home from '../pages/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Profile from '../pages/Profile'

const Router = () => {
  const [pokemonData,  setPokemonData] = useState()
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home setPokemonData={setPokemonData}/>} />
            <Route path='/profile' element={<Profile pokemonData={pokemonData}/>} />
        </Routes>
    </BrowserRouter>
        
  )
}

export default Router