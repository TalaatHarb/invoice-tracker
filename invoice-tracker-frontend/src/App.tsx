<<<<<<< HEAD
<<<<<<< HEAD

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
=======
import React from "react";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import EmployeePage from "./pages/EmployeePage";
import PrivateRoute from "./components/PrivateRoute";
import UserPage from "./pages/UserPage";
import AbsenceHistoryAccordionList from "./components/absence-history-accordion/absence-history-accordion-list";
import { useAppSelector } from "./hooks/toolkit-types";
import Navbar from "./components/navbar/admin-nav-bar";
>>>>>>> develop

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
=======
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
>>>>>>> develop

function App() {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* reset password routes */}
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />}/>

        {/* <Route path="*" element={<NotFound />} /> */}
        {!isAuthenticated && <Route path='/login' element={<Login />} />}
=======
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        <Route path="page1" element={<Navbar />} />
        <Route path="page2" element={<AbsenceHistoryAccordionList />} />
=======
        {!isAuthenticated && <Route path='/login' element={<Login />} />}
        <Route path='page1' element={<Navbar />} />
        <Route path='page2' element={<AbsenceHistoryAccordionList />} />
>>>>>>> develop

>>>>>>> develop
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
