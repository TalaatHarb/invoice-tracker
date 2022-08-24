import React, { useEffect, useState } from 'react'
import { AbsenseItem } from '../../models/absence-item'
import AbsenceHistoryItem from './item'
import { useAppSelector } from '../../hooks/toolkit-types'
import axios from 'axios'

const AbsenceHistoryAccordionList = () => {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  )

  const [absences, setAbsences] = useState([])
  let tempData: []

  const fetchAbsences = async () => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    }

    // TODO: Change the empId to be generic
    let res = await axios.get(
      `http://localhost:8080/user/absence/request?empId=1`,
      config
    )

    setAbsences(res.data)
    tempData = res.data
  }

  useEffect(() => {
    fetchAbsences()
  }, [])

  return (
    <>
      <br></br>
      <h2>Absence History</h2>
      <br />
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
      <br />
      <div className='flex flex-row-reverse'>
        <button
          onClick={fetchAbsences}
          className='inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2'
        >
          Cancel
        </button>
        <button className='inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2'>
          Save
        </button>
      </div>
    </>
  )
}

export default AbsenceHistoryAccordionList
