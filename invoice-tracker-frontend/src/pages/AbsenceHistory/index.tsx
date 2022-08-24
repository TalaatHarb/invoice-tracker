import React from "react";
import AbsenceHistoryAccordionList from "../../components/absence-history-accordion";
import Navbar from "../../components/navbar";

function AbsenceHistory() {
  return (
    <>
      <Navbar />
      <div className="mx-56 leading-tight text-2xl mt-0 mb-2">
        <AbsenceHistoryAccordionList />
      </div>
    </>
  );
}

export default AbsenceHistory;
