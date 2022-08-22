import React from 'react'
import Button from '../../components/Button'
import { useAppDispatch } from '../../hooks/toolkit-types'
import { logoutUser } from '../../services/redux/slices/AuthenticationSlice'

const AdminPage = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='flex justify-center items-center gap-4'>
      <h1>Admin Page</h1>
      <div>
        <Button
          onClick={() => {
            dispatch(logoutUser())
          }}
        >
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default AdminPage
