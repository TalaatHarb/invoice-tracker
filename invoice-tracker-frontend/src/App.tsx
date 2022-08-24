import React from 'react'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import HrPage from './pages/HrPage'
import EmployeePage from './pages/EmployeePage'
import EmployeePrivateRoute from './components/EmployeePrivateRoute'
import ManagerPrivateRoute from './components/ManagerPrivateRoute'
import { useAppSelector } from './hooks/toolkit-types'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ForgotPassword from './pages/password/ForgotPassword'
import ResetPassword from './pages/password/ResetPassword'
import EmployeesList from './pages/EmployeesList/EMployeesList'
import EmployeesHub from './pages/EmployeesHub/EmployeesHub'
import AbsenceHistory from './pages/AbsenceHistory'
import RequestList from './pages/RequestList/RequestList'
import EditRequest from './pages/EditRequest'
import RequestForm from './components/Absence Request'

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        <Route path='/absencehistory' element={<AbsenceHistory />} />
        <Route path='/absencehistory1' element={<EmployeesHub />} />

        {/* protected user page */}
        <Route path='/user' element={<EmployeePrivateRoute />}>
          <Route path='/user' element={<UserPage />} />
        </Route>

        <Route path='/team/:teamId' element={<EmployeesList />} />
        <Route path='/empList' element={<EmployeesHub />} />

        {/* reset password routes */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:resetToken' element={<ResetPassword />} />

        <Route path='absencehistory' element={<AbsenceHistory />} />
        {/* reset password routes */}
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:resetToken' element={<ResetPassword />} />

        <Route path='/team/:teamId' element={<EmployeesList />} />
        <Route path='/empList' element={<EmployeesHub />} />

        <Route path='/edit' element={<EmployeePrivateRoute />}>
          <Route path='/edit' element={<EditRequest />} />
        </Route>
        <Route path='/requestList' element={<EmployeePrivateRoute />}>
          <Route path='/requestList' element={<RequestList />} />
        </Route>

        {/* protected user page */}

        <Route path='/hr' element={<EmployeePrivateRoute />}>
          <Route path='/hr' element={<HrPage />} />
        </Route>
        {/* protected admin page */}
        <Route path='/admin' element={<ManagerPrivateRoute />}>
          <Route path='/admin' element={<AdminPage />} />
        </Route>
        {/* protected employee page */}
        <Route path='/employee' element={<EmployeePrivateRoute />}>
          <Route path='/employee' element={<EmployeePage />} />
        </Route>

        {/* request absence */}
        <Route path='/request' element={<EmployeePrivateRoute />}>
          <Route path='/request' element={<RequestForm />} />
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
