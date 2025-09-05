import React from "react";

const AcademicInfoForm = ({goNextTab}) => {
  return (
    <form className="grid grid-cols-2 gap-4">
      {/* Roll Number */}
      <div>
        <label className="block text-sm font-medium">Roll Number</label>
        <input
          type="text"
          placeholder="Enter Roll Number"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Admission Number */}
      <div>
        <label className="block text-sm font-medium">Admission No</label>
        <input
          type="text"
          placeholder="Enter Admission No"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Class & Section */}
      <div>
        <label className="block text-sm font-medium">Class</label>
        <input
          type="text"
          placeholder="Enter Class"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Section</label>
        <input
          type="text"
          placeholder="Enter Section"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Previous School */}
      <div className="col-span-2">
        <label className="block text-sm font-medium">Previous School</label>
        <input
          type="text"
          placeholder="Enter Previous School"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      {/* Next Button */}
      <div className="col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-[#063F6C] text-white rounded cursor-pointer"
           onClick={goNextTab}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default AcademicInfoForm;
