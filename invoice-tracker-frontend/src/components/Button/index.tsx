import React from 'react'
import { MdOutlineSave } from 'react-icons/md'
import classNames from 'classnames'

interface ButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void
  className?: string
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  const { onClick, className, children, ...OtherProps } = props
  return (
    <button
      type='button'
      className={classNames(
        'w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-2xl font-medium text-white bg-blueCegedim hover:bg-darkGrey hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCegedim',
        className
      )}
      onClick={onClick}
      {...OtherProps}
    >
      <MdOutlineSave className='mr-2' size={30} />
      {children}
    </button>
  )
}

export default Button
