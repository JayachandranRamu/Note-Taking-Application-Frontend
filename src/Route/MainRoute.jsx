import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import SignUpPage from '../Pages/SignUpPage'
import LoginPage from '../Pages/LoginPage'
import AddNotes from '../Pages/AddNotes'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/notes' element={<AboutPage />} />
            <Route path='/add-notes' element={<AddNotes />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default MainRoute