import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext.jsx";
import Form from "./components/Form.jsx";
import StudentTable from "./components/StudentTable.jsx";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<StudentTable />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
