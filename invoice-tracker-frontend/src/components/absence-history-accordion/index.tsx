import React, { useState } from 'react'
import { AbsenseItem } from '../../models/absence-item'
import AbsenceHistoryItem from './item'
import Navbar from '../../components/Navbar'

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

let dummyData2: AbsenseItem = {
  id: 2,
  absenceType: 'Sick Leave',
  Date: '22-22-222',
  comment: 'LAVAVAVAVAVA',
  numberOfDaysRequested: 1,
  dayType: 'full day',
  Attachment: '',
  startDate: '22-22-2222',
  endDate: '22-22-2222',
}

const AbsenceHistoryAccordionList = () => {
  const test: AbsenseItem[] = [dummyData, dummyData2]

  const [items, setItems] = useState(test)

  test.map((item) => {
    console.log(item)
  })

  return (
    <>
      <br></br>
      <h2>Absence History</h2>
      <br />
      {items.map((item) => {
        return (
          <AbsenceHistoryItem
            key={item.id}
            record={item}
            items={items}
            setItems={setItems}
          />
        )
      })}
    </>
  )
}

export default AbsenceHistoryAccordionList
