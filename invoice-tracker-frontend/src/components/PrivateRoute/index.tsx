import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks/toolkit-types'

const PrivateRoute = () => {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
