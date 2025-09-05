// import React from "react";
// import StudentInfo from "../../../components/Student/StudentInfo";
// import ContactInfo from "../../../components/Student/ContactInfo";
// import Transportation from "../../../components/Student/Transportation";

// import StudentParents from "../../../components/Student/StudentParents";
// import StudentDocument from "../../../components/Student/StudentDocument";
// import PreviousSchoolDetail from "../../../components/Student/PreviousSchoolDetail";
// import BankDetails from "../../../components/Student/BankDetails";
// import OtherDetail from "../../../components/Student/OtherDetail";

// const StudentDetail = () => {
//   return (
//     <div className="flex flex-col  gap-4">
//       <div className="flex justify-between items-center">
//         <h2>Student</h2>
//         <button>Edit Student</button>
//       </div>

//       <div className="flex gap-4">
//         <div className="flex flex-col gap-4">
//           <StudentInfo />
//           <ContactInfo />
//           <Transportation />
//         </div>
//         <div className="flex flex-col gap-4 flex-1 ">
//           <div className="flex items-start gap-8">
//             <button className="text-[#6B7280] font-bold hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]">
//               Student Details{" "}
//             </button>
//             <button className="text-[#6B7280] font-bold hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]">
//               Time Table
//             </button>
//             <button className="text-[#6B7280] font-bold hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]">
//               Leave & Attendance{" "}
//             </button>
//             <button className="text-[#6B7280] font-bold hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]">
//               Fees
//             </button>
//             <button className="text-[#6B7280] font-bold hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]">
//               Exam & Results
//             </button>
//           </div>

//           <div className="flex flex-col gap-4">
//             <div>
//               <StudentParents />
//             </div>
//             <div className="flex justify-between gap-4 flex-1">
//               <StudentDocument />
//               <StudentDocument />
//             </div>
//             <div>
//               <PreviousSchoolDetail/>
//             </div>
//             <div className="flex gap-4">
//               <BankDetails/>
//               <BankDetails/>

//             </div>
//             <div>
//               <OtherDetail/>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDetail;

import React, { useState } from "react";
import StudentInfo from "../components/Student/StudentInfo";
import ContactInfo from "../components/Student/ContactInfo";
import Transportation from "../components/Student/Transportation";

import StudentParents from "../components/Student/StudentParents";
import StudentDocument from "../components/Student/StudentDocument";
import PreviousSchoolDetail from "../components/Student/PreviousSchoolDetail";
import BankDetails from "../components/Student/BankDetails";
import OtherDetail from "../components/Student/OtherDetail";

const StudentDetail = () => {
  const [activeTab, setActiveTab] = useState("studentDetails"); // default tab

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Student</h2>
        <button className="text-sm font-semibold px-4 py-1 rounded-md hover:text-[#1E293B] bg-[#063F6C] text-white">
          Edit Student
        </button>
      </div>

      <div className="flex gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <StudentInfo />
          <ContactInfo />
          <Transportation />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 flex-1 font-primary ">
          {/* Tab Buttons */}
          <div className="flex items-start gap-8">
            <button
              onClick={() => setActiveTab("studentDetails")}
              className={`font-bold ${
                activeTab === "studentDetails"
                  ? "text-[#063F6C] border-b-2 border-[#063F6C]"
                  : "text-[#6B7280] hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]"
              }`}
            >
              Student Details
            </button>

            <button
              onClick={() => setActiveTab("timeTable")}
              className={`font-bold ${
                activeTab === "timeTable"
                  ? "text-[#063F6C] border-b-2 border-[#063F6C]"
                  : "text-[#6B7280] hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]"
              }`}
            >
              Time Table
            </button>

            <button
              onClick={() => setActiveTab("attendance")}
              className={`font-bold ${
                activeTab === "attendance"
                  ? "text-[#063F6C] border-b-2 border-[#063F6C]"
                  : "text-[#6B7280] hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]"
              }`}
            >
              Leave & Attendance
            </button>

            <button
              onClick={() => setActiveTab("fees")}
              className={`font-bold ${
                activeTab === "fees"
                  ? "text-[#063F6C] border-b-2 border-[#063F6C]"
                  : "text-[#6B7280] hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]"
              }`}
            >
              Fees
            </button>

            <button
              onClick={() => setActiveTab("exam")}
              className={`font-bold ${
                activeTab === "exam"
                  ? "text-[#063F6C] border-b-2 border-[#063F6C]"
                  : "text-[#6B7280] hover:text-[#063F6C] hover:border-b-2 hover:border-[#063F6C]"
              }`}
            >
              Exam & Results
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex flex-col gap-4">
            {activeTab === "studentDetails" && (
              <>
                <StudentParents />
                <div className="grid grid-cols-2 gap-4 w-full">
                  <StudentDocument />
                  <StudentDocument />
                </div>
                <PreviousSchoolDetail />
                <div className="grid grid-cols-2 gap-4 w-full">
                  <BankDetails />
                  <BankDetails />
                </div>
                <OtherDetail />
              </>
            )}

            {activeTab === "timeTable" && (
              <div className="p-4 border rounded bg-gray-50">
                <h3 className="font-bold text-lg">Time Table</h3>
                <p>Show timetable component here...</p>
              </div>
            )}

            {activeTab === "attendance" && (
              <div className="p-4 border rounded bg-gray-50">
                <h3 className="font-bold text-lg">Leave & Attendance</h3>
                <p>Show attendance component here...</p>
              </div>
            )}

            {activeTab === "fees" && (
              <div className="p-4 border rounded bg-gray-50">
                <h3 className="font-bold text-lg">Fees</h3>
                <p>Show fees component here...</p>
              </div>
            )}

            {activeTab === "exam" && (
              <div className="p-4 border rounded bg-gray-50">
                <h3 className="font-bold text-lg">Exam & Results</h3>
                <p>Show exam results component here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
