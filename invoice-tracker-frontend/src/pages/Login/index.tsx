import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../hooks/toolkit-types'
import { loginUser } from '../../services/redux/slices/AuthenticationSlice'
import CegedimLogo from '../../assets/Cegedim_Logo.jpg'
import LoginImage from '../../assets/LOGIN_IMAGE.avif'
import Button from '../../components/Button'
import InputComponent from '../../components/Input'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: any = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 3) {
        errors.password = 'Password must be at least 3 characters'
      }
      return errors
    },
    onSubmit: (values) => {
      dispatch(loginUser(values)).then((res) => {
        if (res?.payload?.email) {
          toast.success('Login successful')
          const { roles } = res.payload
          if (roles.includes('ROLE_ADMIN')) {
            navigate('/admin')
          } else if (roles.includes('ROLE_EMPLOYEE')) {
            navigate('/employee')
          } else if (roles.includes('ROLE_USER')) {
            navigate('/user')
          }
        } else {
          if (res.payload === 'Bad credentials') {
            toast.error('Wrong email or password')
          } else if (res.payload === 'User is disabled') {
            toast.error('User is disabled. Please contact your administrator')
          }
        }
      })
    },
  })

  return (
    <div className='min-h-screen flex'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <img className='h-20 w-auto' src={CegedimLogo} alt='CegedimLogo' />
            <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <div className='mt-8'>
            <div className='mt-6'>
              <form onSubmit={formik.handleSubmit} className='space-y-6'>
                <InputComponent
                  type='email'
                  name='email'
                  placeholder='Enter Your Email address'
                  label='Email address'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                />
                <InputComponent
                  type='password'
                  name='password'
                  placeholder='Enter Your Password'
                  label='Password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.errors.password}
                />

                <div className='flex items-center justify-end'>
                  <div className='text-sm'>
                    <Link
                      to={'/forgot-password'}
                      className='font-medium text-blueCegedim hover:text-lightGrey'
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <div>
                  <Button type='submit' onClick={() => {}}>
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-0 flex-1'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src={LoginImage}
          alt='Doctor'
        />
      </div>
    </div>
  )
}
export default LoginPage
