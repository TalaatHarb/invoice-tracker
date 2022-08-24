import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../../../components/Button'
import { useAppSelector } from '../../../../hooks/toolkit-types'
import { ModalScreenActions } from '../../../../services/redux/slices/DetailsModal'

interface Props {
  notes: string
}
export default function MyModal({ notes }: Props) {
  const dispatch = useDispatch()
  const { isOpen } = useAppSelector((state) => state.ModalSlice)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        onClose={() => {
          dispatch(ModalScreenActions.closeModal())
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-30' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center w-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-xl min-h-max transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900 border-b-2'
                >
                  <div>User Notes</div>
                </Dialog.Title>
                <div className='grid grid-cols-1 gap-4 p-4'>
                  {notes || 'No notes'}
                </div>
                <div className='flex justify-end mt-8 min-w-0'>
                  <button
                    type='button'
                    className='inline-flex bg-blueCegedim justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500'
                    onClick={() => {
                      dispatch(ModalScreenActions.closeModal())
                    }}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
