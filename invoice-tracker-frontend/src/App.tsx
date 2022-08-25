import React from 'react';
import './App.scss';
import Page1 from './pages/fake-page1/page1';
import Page2 from './pages/fake-page2/page2';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import PopUpStart from './components/fake-user-login/import-excel/PopUpStart';
import Employee_Add from './components/fake-user-login/add-employee/Employee_Add';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/page1" replace />}
        />
        <Route path="page1" element={<PopUpStart />} />
        <Route path="page2" element={<Employee_Add  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
