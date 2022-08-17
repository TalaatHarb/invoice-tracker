import React from 'react'
import { AbsenseItem } from '../../models/absence-item';
import AbsenceHistoryItem from './absence-history-accordion-item';

let dummyData:AbsenseItem = {
    absenceType: "Sick Leave",
    Date: "22-22-222",
    comment: "LAVAVAVAVAVA",
    numberOfDaysRequested: 1,
    dayType: "full day",
    Attachment: "SHOULD BE URL THEN I DO FETCH FUNCTION AND SHOW IT?"
}

const AbsenceHistoryAccordionList = ()=> {
    return (
        <>
            <h2 className="mx-56 leading-tight text-2xl mt-0 mb-2">Absence History</h2>
            <AbsenceHistoryItem record = {dummyData}/>
            <AbsenceHistoryItem record = {dummyData}/>
            <AbsenceHistoryItem record = {dummyData}/>
            <AbsenceHistoryItem record = {dummyData}/>
            <AbsenceHistoryItem record = {dummyData}/>
        </>
    );
}

export default AbsenceHistoryAccordionList;