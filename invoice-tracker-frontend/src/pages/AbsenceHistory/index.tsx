import React from 'react'
import AbsenceHistoryAccordionList from '../../components/absence-history-accordion'
import Navbar from '../../components/navbar'

function AbsenceHistory() {
  return (
    <>
      <Navbar />
      <div className='mx-56 leading-tight text-2xl mt-0 mb-2'>
        <AbsenceHistoryAccordionList />
        <br />
        <div className='flex flex-row-reverse'>
          <button className='inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2'>
            Cancel
          </button>
          <button className='inline-flex items-center px-3 py-1.5 bg-lightGrey hover:bg-darkGrey text-sm font-medium rounded-md mx-2'>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default AbsenceHistory
