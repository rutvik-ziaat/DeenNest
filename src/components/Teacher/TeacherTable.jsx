import React from "react";
import filter from "../../assets/icons/filters.svg";
import sort from "../../assets/icons/sort2.svg";
import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import view from "../../assets/icons/view.svg";
import { useNavigate } from "react-router-dom";

const TeacherTable = () => {
  const teachers = [
    {
      id: "T001",
      name: "Alice Johnson",
      subject: "Mathematics",
      qualification: "M.Sc, B.Ed",
      experience: "5 Years",
      gender: "Female",
      status: "Active",
      dateOfJoin: "12 Jan, 2019",
      dob: "15 Aug, 1985",
    },
    {
      id: "T002",
      name: "Robert Smith",
      subject: "Science",
      qualification: "M.Sc, PhD",
      experience: "10 Years",
      gender: "Male",
      status: "Active",
      dateOfJoin: "25 Mar, 2018",
      dob: "5 Dec, 1980",
    },
    {
      id: "T003",
      name: "Emily Davis",
      subject: "English",
      qualification: "M.A, B.Ed",
      experience: "7 Years",
      gender: "Female",
      status: "Inactive",
      dateOfJoin: "7 Nov, 2020",
      dob: "10 May, 1990",
    },
  ];

  const navigate = useNavigate();

  const handleViewTeacher = (teacher) => {
    navigate(`/teachers/${teacher.id}`, { state: { teacher } });
  };

  return (
    <div className="flex flex-col mt-4 bg-white shadow-md rounded-md w-full font-primary">
      {/* Header */}
      <div className="flex w-full justify-between items-center text-[#1E293B] text-bold border-b border-[#F2F2F2]  p-4">
        <h2>Teacher Details</h2>
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
            <th className="p-2 text-center">
              <input type="checkbox" />
            </th>
            <th className="p-2">ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Date of Joining</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="border-b border-[#F2F2F2] text-sm">
              <td className="text-center p-2">
                <input type="checkbox" />
              </td>
              <td className="text-center p-2">{teacher.id}</td>
              <td className="text-center">{teacher.name}</td>
              <td className="text-center">{teacher.subject}</td>
              <td className="text-center">{teacher.qualification}</td>
              <td className="text-center">{teacher.experience}</td>
              <td className="text-center">{teacher.gender}</td>
              <td className="text-center">{teacher.status}</td>
              <td className="text-center">{teacher.dateOfJoin}</td>
              <td className="text-center">{teacher.dob}</td>
              <td className="flex justify-center gap-2 p-2">
                <button>
                  <img
                    src={view}
                    alt="View"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleViewTeacher(teacher)}
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

export default TeacherTable;
