import React from 'react'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import HrPage from './pages/HrPage'
import EmployeePage from './pages/EmployeePage'
import PrivateRoute from './components/PrivateRoute'
import { useAppSelector } from './hooks/toolkit-types'
import Navbar from './components/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AbsenceHistory from './pages/AbsenceHistory'
import ForgotPassword from './pages/password/ForgotPassword'
import ResetPassword from './pages/password/ResetPassword'
import Employee_Add from './components/add-employee/Employee_Add'
import PopUpStart from './components/import-excel/PopUpStart'

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/emp" element={<Employee_Add/>} />
      <Route path="/import" element={<PopUpStart/>} />
         {/* reset password routes */}
         <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />}/>

        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        <Route path='absencehistory' element={<AbsenceHistory />} />

        {/* protected user page */}

        <Route path='/hr' element={<PrivateRoute />}>
          <Route path='/hr' element={<HrPage />} />
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
          <Route path='*' element={<Navigate to='/employee' replace />} />
        ) : (
          <Route path='*' element={<Navigate to='/login' replace />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
