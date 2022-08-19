import React from 'react'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import HrPage from './pages/HrPage'
import EmployeePage from './pages/EmployeePage'
import PrivateRoute from './components/PrivateRoute'
import { useAppSelector } from './hooks/toolkit-types'
import AbsenceHistoryAccordionList from './components/absence-history-accordion/absence-history-accordion-list'
import Navbar from './components/navbar/admin-nav-bar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import EmployeesList from './pages/EmployeesList/EmployeesList'
import EmployeesHub from './pages/EmployeesHub/EmployeesHub'


function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<EmployeesList/>} />
      <Route path="/" element={<EmployeesHub/>} />
        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        <Route path='page1' element={<Navbar />} />
        <Route path='page2' element={<AbsenceHistoryAccordionList />} />

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
