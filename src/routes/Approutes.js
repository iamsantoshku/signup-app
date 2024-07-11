import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'

const Approutes = () => {
  return (
   <Routes>
     <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

   </Routes>
  )
}

export default Approutes
