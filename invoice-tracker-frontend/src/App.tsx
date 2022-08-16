import React from 'react'
import Login from './pages/Login'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Navigate to='/page1' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
