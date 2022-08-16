import React from 'react'
import Button from '../../components/Button'
import { logoutUser } from '../../services/redux/slices/AuthenticationSlice'
import { useAppDispatch } from '../../hooks/toolkit-types'

const UserPage = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='flex justify-center items-center gap-4'>
      <h1>User Page</h1>
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

export default UserPage
