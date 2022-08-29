import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks/toolkit-types'

const PrivateRoute = () => {
  const { isAuthenticated, userRole } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  const isManager = userRole?.includes('ROLE_ADMIN')

  return isManager && isAuthenticated ? <Outlet /> : <Navigate to='/employee' />
}

export default PrivateRoute
