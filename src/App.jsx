import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./shared/Sidebar.jsx";
import Navbar from "./shared/Navbar.jsx";
import StudentPage from "./pages/StudentPage.jsx";
import StudentDetail from "./pages/StudentDetail.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ConfigurationPage from "./pages/ConfigurationPage.jsx";
import TeacherPage from "./pages/TeacherPage.jsx";
import TeacherDetails from "./pages/TeacherDetails.jsx";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - fixed */}
      <Sidebar />

      {/* Main content - margin-left to avoid overlapping with fixed sidebar */}
      <div className="flex-1 flex flex-col ml-[200px] xl:ml-[240px] 2xl:ml-[280px]">
        {/* Navbar - sticky on top */}
        <Navbar />

        {/* Scrollable content below navbar */}
        <main className="flex-1 overflow-y-auto p-4 no-scrollbar ">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/students" element={<StudentPage />} />
            <Route path="/students/:grNo" element={<StudentDetail />} />
            <Route path="/teachers" element={<TeacherPage />} />
            <Route path="/teachers/:id" element={<TeacherDetails />} />
            <Route path="/configuration" element={<ConfigurationPage />} />
            {/* Add more routes here */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
