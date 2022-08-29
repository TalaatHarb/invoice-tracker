import React from 'react'
import axios from 'axios'
import moment from 'moment'
import { BsCheck2Circle, BsXCircle } from 'react-icons/bs'
import { BsFillEyeFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useAppSelector } from '../../../../hooks/toolkit-types'
import { RequestDetails } from '../../../../models/requestDetails'
import { ModalScreenActions } from '../../../../services/redux/slices/DetailsModal'
import { CONSTANTS } from '../../../../utils/constants'
import RequestsModal from '../Modal'

interface RequestCardProps {
  request: RequestDetails
  fetchRequests: () => void
}
function RequestCard({ request, fetchRequests }: RequestCardProps) {
  const dispatch = useDispatch()

  const { isAuthenticated, ID } = useAppSelector(
    (state) => state.AuthenticationSlice
  )

  const { isOpen } = useAppSelector((state) => state.ModalSlice)

  const config = {
    headers: { Authorization: `Bearer ${isAuthenticated}` },
  }

  const handleReuqestApproval = async () => {
    const reponse = await axios.post(
      `${CONSTANTS.BACKEND_URL}/api/editRequest?isAccepted=true&reqID=${request?.request?.id}&managerID=${ID}`,
      {},
      config
    )
    if (reponse.status === 200) {
      toast.success('Request Approved')
      fetchRequests()
    } else {
      toast.error('Something went wrong')
    }
  }
  const handleRequestRejection = async () => {
    const reponse = await axios.post(
      `${CONSTANTS.BACKEND_URL}/api/editRequest?isAccepted=false&reqID=${request?.request?.id}&managerID=${ID}`,
      {},
      config
    )

    if (reponse?.status === 200) {
      toast.success('Request Rejected')
      fetchRequests()
    } else {
      toast.error('Something went wrong')
    }
  }
  return (
    <div className='bg-lightGrey shadow-lg px-4 py-5 sm:px-6 sm:rounded-lg my-8'>
      <div className='flex space-x-3'>
        <div className='min-w-0 flex-1'>
          <div className='grid md:grid-cols-3 sm:grid-cols-1 pb-4'>
            <div className='text-lg font-extrabold text-gray-900'>
              <h3>Employee Name </h3>
              <span className='text-sm font-medium text-gray-500 capitalize'>
                {request?.requestedBy}
              </span>
            </div>
            <div className='text-lg font-extrabold text-gray-900'>
              <h3>Absence Type </h3>
              <span className='text-sm font-medium text-gray-500 capitalize'>
                {request?.request.type}
              </span>
            </div>
            <div className='text-lg font-extrabold text-gray-900'>
              <h3>Number Of Days </h3>
              <span className='text-sm font-medium text-gray-500 capitalize'>
                {request?.request?.numberOfDays} days
              </span>
            </div>
          </div>
          <div className='grid md:grid-cols-3 sm:grid-cols-1'>
            <div className='text-lg font-extrabold text-gray-900'>
              <h3>Start Date </h3>
              <span className='text-sm font-medium text-gray-500'>
                {moment(request?.request?.startDate).format('DD/MM/YYYY') ||
                  moment(new Date()).format('DD/MM/YYYY')}
              </span>
            </div>
            <div className='text-lg font-extrabold text-gray-900'>
              <h3>End Date </h3>
              <span className='text-sm font-medium text-gray-500'>
                {moment(request?.request?.endDate).format('DD/MM/YYYY') ||
                  moment(new Date()).format('DD/MM/YYYY')}
              </span>
            </div>
            <div className='text-lg font-extrabold text-gray-900'>
              <h3>Is Full Day </h3>
              <span className='text-sm font-medium text-gray-500'>
                {request?.request?.fullDay ? (
                  <BsCheck2Circle className='text-green' size={20} />
                ) : (
                  <BsXCircle className='text-red' size={20} />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className='flex-shrink-0 items-center flex gap-4'>
          <BsCheck2Circle
            id='approve'
            className='text-blueCegedim cursor-pointer hover:text-green'
            size={50}
            onClick={handleReuqestApproval}
          />
          <BsXCircle
            id='reject'
            className='text-blueCegedim cursor-pointer hover:text-red'
            size={40}
            onClick={handleRequestRejection}
          />
          <BsFillEyeFill
            id='view'
            className='text-blueCegedim cursor-pointer hover:text-black'
            size={40}
            onClick={() => {
              dispatch(ModalScreenActions.openModal())
            }}
          />
          {isOpen && (
            <RequestsModal
              notes={request?.request?.comments}
              downloadLink={request?.request.absenceAttachments[0]?.attachmentUrl}
              attachmentName={request?.request.absenceAttachments[0]?.attachmentName}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default RequestCard
