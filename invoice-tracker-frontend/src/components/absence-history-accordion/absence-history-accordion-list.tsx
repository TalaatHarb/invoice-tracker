import React from 'react'
import { AbsenseItem } from '../../models/absence-item'
import AbsenceHistoryItem from './absence-history-accordion-item'
import Navbar from '../Navbar'

let dummyData: AbsenseItem = {
  id: 1,
  absenceType: 'Sick Leave',
  Date: '22-22-222',
  comment: 'LAVAVAVAVAVA',
  numberOfDaysRequested: 1,
  dayType: 'full day',
  Attachment: 'https://www.google.com/',
  startDate: '22-22-2222',
  endDate: '22-22-2222',
}

const AbsenceHistoryAccordionList = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <h2 className='mx-56 leading-tight text-2xl mt-0 mb-2'>
        Absence History
      </h2>
      <AbsenceHistoryItem record={dummyData} />
      <AbsenceHistoryItem record={dummyData} />
      <AbsenceHistoryItem record={dummyData} />
      <AbsenceHistoryItem record={dummyData} />
      <AbsenceHistoryItem record={dummyData} />
    </>
  )
}

export default AbsenceHistoryAccordionList
