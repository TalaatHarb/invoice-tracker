import React, { useEffect, useState } from 'react'
import { AbsenseItem } from '../../models/absence-item'
import AbsenceHistoryItem from './item'
import { useAppSelector } from '../../hooks/toolkit-types'
import axios from 'axios'
import { CONSTANTS } from '../../utils/constants'

type accordionProps = {
  id: number
}

const AbsenceHistoryAccordionList = ({ id }: accordionProps) => {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )
  
  const config = {
    headers: { Authorization: `Bearer ${isAuthenticated}` },
  }

  const [absences, setAbsences] = useState([])
  
  const fetchAbsences = async () => {
    let res = await axios.get(
      `${CONSTANTS.BACKEND_URL}/api/user/absence/request?empId=${id}`,
      config
    )
    setAbsences(res.data)
  }

  useEffect(() => {
    fetchAbsences()
  }, [])


  const save_requests = async (prop : any) => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    };
    
    let res = await axios.post(`${CONSTANTS.BACKEND_URL}/api/user/absence/update-requests`, absences, config);
    setAbsences(absences);
  }
  
  return (
    <>
      <h2>Absence History</h2>
      <br />
      <div className='shadow-lg'>
        {absences.map((absence: AbsenseItem) => {
          return (
            <AbsenceHistoryItem
              key={absence.id}
              record={absence}
              items={absences}
              setItems={setAbsences}
            />
          )
        })}
      </div>

      <br />
      <div className='flex flex-row-reverse'>
        <button
          onClick={fetchAbsences}
          className='inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2'
        >
          Cancel
        </button>
        <button onClick = {save_requests} className='inline-flex items-center px-3 py-1.5  bg-blueCegedim hover:opacity-75 text-white text-sm font-medium rounded-md mx-2'>
          Save
        </button>
      </div>
    </>
  )
}

export default AbsenceHistoryAccordionList
