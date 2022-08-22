import classNames from 'classnames'
import React, { useId } from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
interface InputProps {
  label: string
  error?: string
  className?: string
  type: 'text' | 'email' | 'password' | 'number'
  name: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const InputComponent = (props: InputProps) => {
  const id = useId()
  const { label, error, className, type, name, placeholder, value, onChange } =
    props

  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-dark mb-4'>
        {label}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          id={id}
          className={classNames(
            'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm',
            className,
            error ? 'border-red' : ''
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <BiErrorCircle className='h-5 w-5 text-red' aria-hidden='true' />
          </div>
        )}
        {!error && type === 'password' && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
            <RiLockPasswordLine
              className='h-5 w-5 text-blueCegedim cursor-pointer'
              aria-hidden='true'
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        )}
      </div>
      {error && <p className='mt-2 text-sm text-red-600 text-red'>{error}</p>}
    </div>
  )
}

export default InputComponent
