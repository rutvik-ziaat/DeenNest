// import React from "react";
// import uploadbulk from "../../assets/icons/uploadbulk.svg";
// import plusicon from "../../assets/icons/plusicon.svg";
// import StudentTable from "./components/StudentTable";

// const StudentPage = () => {
//   return (
//     <>
//       {" "}
//       <div className="flex justify-between items-center ">
//         <h2 className="text-2xl font-bold text-[#1E293B]">Student</h2>

//         <div className="flex gap-2">
//           <button className="bg-[#DFE5EF] p-1.5 text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer">
//             <img src={uploadbulk} alt="Upload Icon" className="w-4 h-4" />
//             Upload Bulk
//           </button>
//           <button className="bg-[#063F6C] p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer" >
//             <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
//             Add Student
//           </button>
//         </div>
//       </div>
//       <div>
//         <StudentTable />
//       </div>
//     </>
//   );
// };

// export default StudentPage;

import React, { useState } from "react";
import uploadbulk from "../assets/icons/uploadbulk.svg";
import plusicon from "../assets/icons/plusicon.svg";

import StudentForm from "../components/Student/StudentForm";
import StudentTable from "../components/Student/StudentTable";

const StudentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold text-[#1E293B]">Student</h2>

        <div className="flex gap-2">
          <button className="bg-[#DFE5EF] p-1.5 text-sm font-semibold text-[#6B7280] rounded-sm flex items-center gap-1 cursor-pointer">
            <img src={uploadbulk} alt="Upload Icon" className="w-4 h-4" />
            Upload Bulk
          </button>
          <button
            className="bg-[#063F6C] p-1.5 text-sm font-semibold text-white rounded-sm flex items-center gap-1 cursor-pointer"
            onClick={handleOpenModal}
          >
            <img src={plusicon} alt="Plus Icon" className="w-4 h-4" />
            Add Student
          </button>
        </div>
      </div>

      <div>
        <StudentTable />
      </div>

      {/* Render modal conditionally */}
      {isModalOpen && <StudentForm onClose={handleCloseModal} />}
    </>
  );
};

export default StudentPage;
