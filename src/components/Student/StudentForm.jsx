

// import React, { useState } from "react";
// import uploadimg from "../../assets/icons/uploadimg.svg";
// import ParentsInfoForm from "./ParentsInfoForm";
// import AcademicInfoForm from "./AcademicInfoForm";
// import OtherInfoForm from "./OtherInfoForm";

// const StudentForm = ({ onClose }) => {
//   const [activeTab, setActiveTab] = useState("basic");

//   const tabs = [
//     { id: "basic", label: "Basic Info" },
//     { id: "parents", label: "Parents Info" },
//     { id: "academic", label: "Academic Info" },
//     { id: "other", label: "Other Info" },
//   ];

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       {/* Background overlay */}
//       <div
//         className="absolute inset-0 bg-black opacity-30"
//         onClick={onClose}
//       ></div>

//       {/* Modal */}
//       <div className="relative bg-white w-[700px] max-h-[90vh] overflow-y-auto rounded-md shadow-lg z-10">
//         {/* Header */}
//         <div className="relative">
//           <div className="flex justify-between items-center px-6 py-4">
//             <h2 className="text-base text-[#1E293B] font-bold">Student Form</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-black text-lg"
//             >
//               ✕
//             </button>
//           </div>
//           {/* Full-width separation line */}
//           <hr className="border-gray-300 border-t" />
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-between text-base gap-2 p-3 mb-4 border border-gray-200 rounded-full m-4">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-8 py-2 rounded-full text-sm font-medium ${
//                 activeTab === tab.id
//                   ? "bg-[#063F6C] text-white"
//                   : "text-[#999999] hover:bg-[#063F6C] hover:text-white"
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="px-6 pb-6">
//           {/* Basic Info stays inside this component */}
//           {activeTab === "basic" && (
//             <form className="grid grid-cols-2 gap-4">
//               {/* Upload */}
//               <div className="col-span-2 flex items-center gap-2">
//                 <div className="border border-gray-300 p-2 rounded w-12 h-12 flex items-center justify-center cursor-pointer">
//                   <img src={uploadimg} alt="" className="h-4 w-4" />
//                 </div>
//                 <div className="flex flex-col">
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-gray-200 rounded-md text-sm"
//                     >
//                       Upload
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-[#093A5B] text-white rounded-md text-sm"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                   <p className="text-xs text-gray-500">
//                     Upload image size of 4MB, Format JPG, JPEG, PNG, PDF
//                   </p>
//                 </div>
//               </div>

//               {/* Full Name */}
//               <div>
//                 <label className="block text-sm font-medium">
//                   Full Name<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Full Name"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>

//               {/* DOB */}
//               <div>
//                 <label className="block text-sm font-medium">
//                   Date Of Birth<span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="date"
//                   placeholder="Pick a date"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>

//               {/* Gender */}
//               <div className="col-span-2">
//                 <label className="block text-sm font-medium">Gender</label>
//                 <div className="flex items-center gap-4 mt-1">
//                   <label className="flex items-center gap-1">
//                     <input type="radio" name="gender" defaultChecked /> Male
//                   </label>
//                   <label className="flex items-center gap-1">
//                     <input type="radio" name="gender" /> Female
//                   </label>
//                 </div>
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="block text-sm font-medium">Address Line 1</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Address"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">
//                   Address Line 2 (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Address"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>

//               {/* Landmark & Area */}
//               <div>
//                 <label className="block text-sm font-medium">Landmark</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Landmark"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Area</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Area"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>

//               {/* Zip & City */}
//               <div>
//                 <label className="block text-sm font-medium">Zip Code</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Zip Code"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">City</label>
//                 <input
//                   type="text"
//                   placeholder="Enter City"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>

//               {/* State & Country */}
//               <div>
//                 <label className="block text-sm font-medium">State</label>
//                 <input
//                   type="text"
//                   placeholder="Enter State"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Country</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Country"
//                   className="border border-gray-300 p-2 rounded w-full"
//                 />
//               </div>

//               {/* Next Button */}
//               {/* <div className="col-span-2 flex justify-end mt-4">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-[#063F6C] text-white rounded"
//                 >
//                   Next
//                 </button>
//               </div> */}

//               // Inside your form, replace the Next button with this:
// <div className="col-span-2 flex justify-end mt-4">
//   <button
//     type="button" // important! prevent form submission
//     onClick={() => {
//       if (activeTab === "basic") setActiveTab("parents");
//       else if (activeTab === "parents") setActiveTab("academic");
//       else if (activeTab === "academic") setActiveTab("other");
//     }}
//     className="px-6 py-2 bg-[#063F6C] text-white rounded"
//   >
//     Next
//   </button>
// </div>

//             </form>
//           )}

//           {/* Other Tabs (external components) */}
//           {activeTab === "parents" && <ParentsInfoForm />}
//           {activeTab === "academic" && <AcademicInfoForm />}
//           {activeTab === "other" && <OtherInfoForm />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentForm;



import React, { useState } from "react";
import uploadimg from "../../assets/icons/uploadimg.svg";
import ParentsInfoForm from "./ParentsInfoForm";
import AcademicInfoForm from "./AcademicInfoForm";
import OtherInfoForm from "./OtherInfoForm";

const StudentForm = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "parents", label: "Parents Info" },
    { id: "academic", label: "Academic Info" },
    { id: "other", label: "Other Info" },
  ];

  // Function to move to the next tab
  const goNextTab = () => {
    if (activeTab === "basic") setActiveTab("parents");
    else if (activeTab === "parents") setActiveTab("academic");
    else if (activeTab === "academic") setActiveTab("other");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-[700px] max-h-[90vh] overflow-y-auto rounded-md shadow-lg z-10 font-primary">
        {/* Header */}
        <div className="relative">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 className="text-base text-[#1E293B] font-bold">Student Form</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
          </div>
          <hr className="border-gray-300 border-t" />
        </div>

        {/* Tabs */}
        <div className="flex justify-between text-base gap-2 p-3 mb-4 border border-gray-200 rounded-full m-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? "bg-[#063F6C] text-white"
                  : "text-[#999999] hover:bg-[#063F6C] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-6">
          {/* Basic Info */}
          {activeTab === "basic" && (
            <form className="grid grid-cols-2 gap-4">
              {/* Upload */}
              <div className="col-span-2 flex items-center gap-2">
                <div className="border border-gray-300 p-2 rounded w-12 h-12 flex items-center justify-center cursor-pointer">
                  <img src={uploadimg} alt="" className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 ">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-200 rounded-md text-sm cursor-pointer"
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-[#093A5B] text-white rounded-md text-sm cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Upload image size of 4MB, Format JPG, JPEG, PNG, PDF
                  </p>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-medium">
                  Date Of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  placeholder="Pick a date"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Gender */}
              <div className="col-span-2">
                <label className="block text-sm font-medium">Gender</label>
                <div className="flex items-center gap-4 mt-1">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" defaultChecked className="accent-black" /> Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" className="accent-black" /> Female
                  </label>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium">Address Line 1</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Address Line 2 (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Landmark & Area */}
              <div>
                <label className="block text-sm font-medium">Landmark</label>
                <input
                  type="text"
                  placeholder="Enter Landmark"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Area</label>
                <input
                  type="text"
                  placeholder="Enter Area"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Zip & City */}
              <div>
                <label className="block text-sm font-medium">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* State & Country */}
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Next Button */}
              <div className="col-span-2 flex justify-end mt-4">
                <button
                  type="button"
                  onClick={goNextTab}
                  className="px-6 py-2 bg-[#063F6C] text-white rounded cursor-pointer"
                >
                  Next
                </button>
              </div>
            </form>
          )}

          {/* Other Tabs */}
          {activeTab === "parents" && <ParentsInfoForm goNextTab={goNextTab} />}
          {activeTab === "academic" && <AcademicInfoForm goNextTab={goNextTab} />}
          {activeTab === "other" && <OtherInfoForm />}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
