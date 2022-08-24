import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { ManagerDetails } from '../../../../models/managerDetails'
import moment from 'moment'

const team = [
  {
    name: 'Mariam Elmasry',
    handle: '1',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Amr Esam',
    handle: '2',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Hashem',
    handle: '3',
    role: 'Manager, Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Israa',
    handle: '4',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Gado',
    handle: '5',
    role: 'Front-end Developer',
    imageUrl:
      // male image from unsplash
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ahmed Elsayed',
    handle: '6',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ahmed Fouad',
    handle: '7',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

interface Props {
  managerDetails: ManagerDetails
}
function AdminProfilePage({ managerDetails }: Props) {
  const profile = {
    name: managerDetails.username,
    imageUrl:
      'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    coverImageUrl:
      'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: {
      Phone: managerDetails.mobileNumber || 'N/A',
      Email: managerDetails.email || 'N/A',
      'Allowed Balanace': managerDetails.allowedBalance || 'N/A',
      'Arabic Address': managerDetails.arabicAddress || 'N/A',
      'English Address': managerDetails.englishAddress || 'N/A',
      Billable: managerDetails.billable || 'N/A',
      'Birth Date':
        moment(managerDetails.birthDate).format('DD/MM/YYYY') || 'N/A',
      'End Date': moment(managerDetails.endDate).format('DD/MM/YYYY') || 'N/A',
      'Join Date':
        moment(managerDetails.joiningDate).format('DD/MM/YYYY') || 'N/A',
      'National ID': managerDetails.nationalId || 'N/A',
      'Over Time': managerDetails.overtime || 'N/A',
      'Pay Rate': managerDetails.payRate || 'N/A',
      'Remaining Balance': managerDetails.remainingBalance || 'N/A',
      'Years of insurance': managerDetails.yearsOfInsurance || 'N/A',
      Role: 'Manager',
    },
  }

  return (
    <>
      <div className='h-full flex border-none outline-hidden '>
        <div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
          <div className='flex-1 relative z-0 flex overflow-hidden'>
            <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none border-none outline-hidden'>
              {/* Profile header */}
              <div>
                <div>
                  <img
                    className='h-32 w-full object-cover lg:h-48'
                    src={profile.coverImageUrl}
                    alt=''
                  />
                </div>
                <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                  <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                    <div className='flex'>
                      <img
                        className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                        src={profile.imageUrl}
                        alt=''
                      />
                    </div>
                    <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                      <div className='sm:hidden 2xl:block mt-6 min-w-0 flex-1'>
                        <h1 className='text-2xl font-bold text-gray-900 truncate'>
                          {profile.name}
                        </h1>
                      </div>
                      <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                        <button
                          type='button'
                          className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                        >
                          <MailIcon
                            className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                          <span>Message</span>
                        </button>
                        <button
                          type='button'
                          className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                        >
                          <PhoneIcon
                            className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                          <span>Call</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1'>
                    <h1 className='text-2xl font-bold text-gray-900 truncate'>
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Description list */}
              <div className='mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                <dl className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-5'>
                  {Object.keys(profile.fields).map((field) => (
                    <div key={field} className='sm:col-span-1'>
                      <dt className='text-sm font-medium text-gray-500'>
                        {field}
                      </dt>
                      <dd className='mt-1 text-sm text-blueCegedim'>
                        {profile.fields[field as keyof typeof profile.fields]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              {/* Team member list */}
              <div className='mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
                <h2 className='text-sm font-medium text-gray-500'>
                  Team members
                </h2>
                <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  {team.map((person) => (
                    <div
                      key={person.handle}
                      className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500'
                    >
                      <div className='flex-shrink-0'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={person.imageUrl}
                          alt=''
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <p className='text-sm font-medium text-gray-900'>
                          {person.name}
                        </p>
                        <p className='text-sm text-gray-500 truncate'>
                          {person.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
export default AdminProfilePage
