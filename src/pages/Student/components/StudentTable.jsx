import React from "react";
import filter from "../../../assets/icons/filters.svg";
import sort from "../../../assets/icons/sort2.svg";
import edit from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import view from "../../../assets/icons/view.svg";
import { useNavigate } from "react-router-dom";

const StudentTable = () => {
  const students = [
    {
      grNo: "123",
      name: "Jacob Jones",
      rollNo: "S270706",
      class: "Class 1",
      section: "Section A",
      gender: "Male",
      status: "Active",
      dateOfJoin: "1 Feb, 2020",
      dob: "8 Sep, 2020",
    },
    {
      grNo: "234",
      name: "Courtney Henry",
      rollNo: "S271247",
      class: "Class 2",
      section: "Section B",
      gender: "Female",
      status: "Inactive",
      dateOfJoin: "21 Sep, 2020",
      dob: "22 Oct, 2020",
    },
    {
      grNo: "567",
      name: "Marvin McKinney",
      rollNo: "S271249",
      class: "Class 3",
      section: "Section C",
      gender: "Gender",
      status: "Active",
      dateOfJoin: "17 Oct, 2020",
      dob: "24 May, 2020",
    },
  ];

   const navigate = useNavigate();


   const handleViewStudent = (student) => {
    // Redirect to detail page
    navigate(`/students/${student.grNo}`, { state: { student } }); 
    // passing student object via state (optional)
  };

  return (
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-nunito">
      {/* Header */}
      <div className="flex w-full justify-between items-center text-[#1E293B] text-bold border-b border-[#F2F2F2]  p-4">
        <h2>Student Details</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#F2F2F2] px-2.5 rounded-sm placeholder:text-[10px]" 
          />
          <img src={filter} alt="" className="bg-[#063F6C] p-2  rounded-sm" />
          <img src={sort} alt="" className="bg-[#063F6C] p-2 rounded-sm" />
        </div>
      </div>

      {/* Table */}
      <table className="mt-4 w-full">
        <thead>
          <tr className="border-b border-[#F2F2F2] text-[#063F6C] text-sm">
            {/* Checkbox header */}
            <th className="p-2 text-center">
              <input type="checkbox" />
            </th>
            <th className="p-2">G.R. No.</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Section</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Date of Joining</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.grNo}
              className="border-b border-[#F2F2F2] text-sm"
            >
              {/* Row checkbox */}
              <td className="text-center p-2">
                <input type="checkbox" />
              </td>
              <td className="text-center p-2">{student.grNo}</td>

              <td className="text-center">{student.name}</td>
              <td className="text-center">{student.rollNo}</td>
              <td className="text-center">{student.class}</td>
              <td className="text-center">{student.section}</td>
              <td className="text-center">{student.gender}</td>
              <td className="text-center">{student.status}</td>
              <td className="text-center">{student.dateOfJoin}</td>
              <td className="text-center">{student.dob}</td>
              <td className="flex justify-center gap-2 p-2">
                <button>
                  <img
                    src={view}
                    alt="View"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleViewStudent(student)}
                  />
                </button>
                <button>
                  <img
                    src={edit}
                    alt="Edit"
                    className="w-5 h-5 cursor-pointer"
                  />
                </button>
                <button>
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="w-5 h-5 cursor-pointer"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
