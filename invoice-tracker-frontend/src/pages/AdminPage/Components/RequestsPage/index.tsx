import axios from 'axios'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../../../hooks/toolkit-types'
import { RequestDetails } from '../../../../models/requestDetails'
import { CONSTANTS } from '../../../../utils/constants'
import RequestCard from '../RequestCard'

const AdminRequests = () => {
  const [requests, setRequests] = React.useState<RequestDetails[]>([])

  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )

  const fetchRequests = async () => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    }
    const reponse = await axios.get(
      `${CONSTANTS.BACKEND_URL}/api/requests`,
      config
    )
    if (reponse.status === 200) {
      setRequests(reponse.data)
    }
  }
  useEffect(() => {
    fetchRequests()
  }, [])

  useEffect(() => {
    console.log(requests)
  }, [requests])

  return (
    <div className='shadow-2xl px-4 py-5 sm:px-6 mt-8 sm:rounded-3xl mx-8'>
      <div className='px-4 py-5 sm:p-6 shadow sm:px-6 sm:rounded-lg border bottom-2'>
        <h2
          id='timeline-title'
          className='text-lg font-bold text-gray-900 mb-8'
        >
          Requests
        </h2>

        {requests.map((request, index) => (
          <RequestCard
            key={index}
            request={request}
            fetchRequests={fetchRequests}
          />
        ))}
        {requests.length === 0 && (
          <div className='flex justify-center items-center'>
            <h1 className='text-2xl font-semibold text-gray-900'>
              No Requests
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminRequests
