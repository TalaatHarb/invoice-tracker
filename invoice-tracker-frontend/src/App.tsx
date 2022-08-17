
import React from 'react';
import NotFound from './pages/NotFound';

import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import EmployeePage from './pages/EmployeePage'
import PrivateRoute from './components/PrivateRoute'
import UserPage from './pages/UserPage'
import { useAppSelector } from './hooks/toolkit-types'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return (
    <BrowserRouter>
      <Routes>
        {/* reset password routes */}
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />}/>

        {/* <Route path="*" element={<NotFound />} /> */}
        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        {/* protected user page */}
        <Route path='/user' element={<PrivateRoute />}>
          <Route path='/user' element={<UserPage />} />
        </Route>
        {/* protected admin page */}
        <Route path='/admin' element={<PrivateRoute />}>
          <Route path='/admin' element={<AdminPage />} />
        </Route>
        {/* protected employee page */}
        <Route path='/employee' element={<PrivateRoute />}>
          <Route path='/employee' element={<EmployeePage />} />
        </Route>
        {isAuthenticated ? (
          <Route path='*' element={<Navigate to='/user' replace />} />
        ) : (
          <Route path='*' element={<Navigate to='/login' replace />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
