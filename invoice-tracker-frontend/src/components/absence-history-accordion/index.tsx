import React, { useEffect, useState } from 'react'
import { AbsenseItem } from '../../models/absence-item'
import AbsenceHistoryItem from './item'
import { useAppSelector } from '../../hooks/toolkit-types'
import axios from 'axios'

const AbsenceHistoryAccordionList = () => {
  const { isAuthenticated } = useAppSelector(
    (state) => state.AuthenticationSlice
  );

  const [absences, setAbsences] = useState([])
  
  const fetchAbsences = async () => {
    const config = {
      headers: { Authorization: `Bearer ${isAuthenticated}` },
    };

    let res = await axios.get(`http://localhost:8080/user/absence/request?empId=1`, config);

    setAbsences(res.data);
  };

  useEffect(() => {
    fetchAbsences();
  }, []);

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
    </>
  )
}

export default AbsenceHistoryAccordionList
