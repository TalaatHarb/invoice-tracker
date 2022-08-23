import React from 'react'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import HrPage from './pages/HrPage'
import EmployeePage from './pages/EmployeePage'
import EmployeePrivateRoute from './components/EmployeePrivateRoute'
import { useAppSelector } from './hooks/toolkit-types'
import AbsenceHistoryAccordionList from './components/absence-history-accordion/absence-history-accordion-list'
import Navbar from './components/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/password/ForgotPassword'
import ResetPassword from './pages/password/ResetPassword'

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        {/* protected user page */}
        <Route path='/user' element={<EmployeePrivateRoute />}>
          <Route path='/user' element={<UserPage />} />
        </Route>

        {/* reset password routes */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:resetToken' element={<ResetPassword />} />

        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        <Route path='page1' element={<Navbar />} />
        <Route path='page2' element={<AbsenceHistoryAccordionList />} />

        {/* protected user page */}

        <Route path='/hr' element={<EmployeePrivateRoute />}>
          <Route path='/hr' element={<HrPage />} />
        </Route>
        {/* protected admin page */}
        <Route path='/admin' element={<EmployeePrivateRoute />}>
          <Route path='/admin' element={<AdminPage />} />
        </Route>
        {/* protected employee page */}
        <Route path='/employee' element={<EmployeePrivateRoute />}>
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
