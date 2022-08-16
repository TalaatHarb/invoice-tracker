import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router'

const DefaultPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center gap-4'>
      <h1>Please Go Back To Login</h1>
      <div>
        <Button
          onClick={() => {
            navigate('/login')
          }}
        >
          Take Me There!
        </Button>
      </div>
    </div>
  )
}

export default DefaultPage
