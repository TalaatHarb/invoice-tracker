import React from 'react';
import './App.scss';
import Page1 from './pages/fake-page1/page1';
import Page2 from './pages/fake-page2/page2';
import Navbar from './components/navbar/admin-nav-bar';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import AbsenceHistoryAccordionList from './components/absence-history-accordion/absence-history-accordion-list';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/page1" replace />}
        />
        <Route path="page1" element={<Navbar />} />
        <Route path="page2" element={<AbsenceHistoryAccordionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
