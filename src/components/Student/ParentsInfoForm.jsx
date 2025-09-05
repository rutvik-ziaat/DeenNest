import React from "react";

const ParentsInfoForm = ({ goNextTab }) => {
  return (
    <form className="flex flex-col gap-4">
      {/* Parent Record */}
      <div className="flex items-center gap-4 mt-1">
        <label className="text-sm text-[#333333] font-bold flex items-center gap-4">
          Select Parent Record
          <span className="flex items-center gap-2">
            <label className="flex items-center gap-1">
              <input type="radio" name="parentRecord" defaultChecked className="accent-black" /> New
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="parentRecord" className="accent-black" /> Existing
            </label>
          </span>
        </label>
      </div>

      {/* Father's Name */}
      <div>
        <label className="block text-sm font-medium">
          Father’s Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Father's Name"
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
      </div>

      {/* Email & Phone */}
      <div className="flex gap-4">
        {/* Parent’s Email */}
        <div className="w-1/2">
          <label className="block text-sm font-medium">Parent’s Email</label>
          <input
            type="email"
            placeholder="Enter Parent’s Email"
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        {/* Father’s Phone */}
        <div className="w-1/2">
          <label className="block text-sm font-medium">
            Father’s Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Father's Phone"
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mt-1">
        <label className="text-sm text-[#333333] font-bold flex items-center gap-4">
          If Guardian Is 
          <span className="flex items-center gap-2">
            <label className="flex items-center gap-1">
              <input type="radio" name="GuardianRecord" defaultChecked className="accent-black"/> Parents
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="GuardianRecord" className="accent-black" /> Guardian
            </label>
          </span>
        </label>
      </div>

      <p className="text-red-500 text-sm">Note: If parent already exists, enter Parent ID, Email, or Name to auto-fill their details.</p>

      {/* Next Button */}
      <div className="flex justify-end mt-4">
        <button
          type="button" // important! prevent form submission
          onClick={goNextTab}
          className="px-6 py-2 bg-[#063F6C] text-white rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ParentsInfoForm;
