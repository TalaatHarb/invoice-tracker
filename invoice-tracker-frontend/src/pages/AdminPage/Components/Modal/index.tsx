import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../hooks/toolkit-types'
import { ModalScreenActions } from '../../../../services/redux/slices/DetailsModal'
import { MdCloudDownload } from 'react-icons/md'
import axios from 'axios'
import { CONSTANTS } from '../../../../utils/constants'

interface Props {
  notes: string
  downloadLink: string
  attachmentName: string
}
export default function MyModal({ notes, downloadLink, attachmentName }: Props) {
  const dispatch = useDispatch()
  const { isOpen } = useAppSelector((state) => state.ModalSlice)
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )

  const downloadFiles = async () => {
    
    const config = {
      method: "POST",
      headers:
       { Authorization: `Bearer ${isAuthenticated}` },
    }

    const response = await fetch(downloadLink, config)
    const data = await response.blob();
    const a = document.createElement("a");
    const url = window.URL.createObjectURL(data);
    a.href = url;
    a.download = attachmentName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);

    console.log(data)
  }

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
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
                <div className='mt-4'>
                  <button
                    id='download-button'
                    className='text-base rounded-md px-2 max-h-7 bg-yeellowLightCegedim text-blueCegedim flex items-center'
                    onClick={() => {
                      downloadFiles()
                    }}
                  >
                    <MdCloudDownload size={30} className='mr-2' /> Download
                    Notes
                  </button>
                </div>
                <div className='flex justify-end mt-8 min-w-0'>
                  <button
                    id='close-modal'
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
    </Transition.Root>
  )
}
