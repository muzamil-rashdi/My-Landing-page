

// const Sections = ({ fields }) => {
//   return (
//     <div className="p-6 font-neue">
//       <h2 className="text-xl font-bold mb-4">Edit Tenants</h2>

//       <div className="space-y-6">
//         {fields.map((field, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-4 p-4 border rounded-2xl shadow-sm"
//           >
//             {/* Label */}
//             <label className="w-40 font-medium">{field.key}</label>

//             {/* Input based on type */}
//             {field.type === "text-area" && (
//               <textarea
//                 className="flex-1 p-2 border rounded-md"
//                 placeholder={field.key}
//               />
//             )}

//             {field.type === "text" && (
//               <input
//                 type="text"
//                 className="flex-1 p-2 border rounded-md"
//                 placeholder={field.key}
//               />
//             )}

//             {field.type === "email" && (
//               <input
//                 type="email"
//                 className="flex-1 p-2 border rounded-md"
//                 placeholder={field.key}
//               />
//             )}

//             {field.type === "select" && (
//               <select className="flex-1 p-2 border rounded-md">
//                 {field.options && field.options.length > 0 ? (
//                   field.options.map((opt, i) => (
//                     <option key={i} value={opt}>
//                       {opt}
//                     </option>
//                   ))
//                 ) : (
//                   <option value="">Select {field.key}</option>
//                 )}
//               </select>
//             )}

//             {/* Buttons */}
//             <div className="flex gap-2">
//               <button className="px-3 py-1 bg-green-500 text-white rounded-md">
//                 Save
//               </button>
//               <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
//                 Send Invite
//               </button>
//               <button className="px-3 py-1 bg-red-500 text-white rounded-md">
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";

const EditTenantsModal = ({ rows, children }) => {
  const [tenantData, setTenantData] = useState(
    rows.map(row => 
      row.reduce((acc, field) => {
        // Initialize with empty values, not placeholders
        acc[field.name] = field.value || '';
        return acc;
      }, {})
    )
  );

  const handleInputChange = (rowIndex, fieldName, value) => {
    const updatedData = [...tenantData];
    updatedData[rowIndex][fieldName] = value;
    setTenantData(updatedData);
  };

  const handleSave = (rowIndex) => {
    console.log("Saved data:", tenantData[rowIndex]);
   
  };

  const handleSendInvite = (rowIndex) => {
    console.log("Send invite for:", tenantData[rowIndex]);
   
  };

  const handleRemove = (rowIndex) => {
    console.log("Remove tenant at index:", rowIndex);
   
  };

  return (
    <div className="font-neue px-0 font-neue">
   
      <div className="flex items-center justify-between flex-row border-b  mb-4">
        <h1 className="text-2xl text-[#242424] font-[500] p-4">Edit Tenants</h1>
        <button className="p-4 hover:bg-green-600 hover:text-white transition rounded">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L7 6.08579L12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L8.41421 7.5L13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L7 8.91421L1.70711 14.2071C1.31658 14.5976 0.683417 14.5976 0.292893 14.2071C-0.0976311 13.8166 -0.0976311 13.1834 0.292893 12.7929L5.58579 7.5L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

   
      <div className="space-y-4 p-4">
        {rows.map((tenantFields, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-0 p-0 justify-between items-end"
          >
          
            {tenantFields.map((field, fieldIndex) => (
              <div key={fieldIndex} className=" flex flex-col">

               {field.label && (
                    <label className="text-sm font-medium mb-1 font-semibold">
                        {field.label}
                    </label>
                    )}


                {field.type === "select" ? (
                  <select
                    value={tenantData[rowIndex][field.name] || ""}
                    onChange={(e) => handleInputChange(rowIndex, field.name, e.target.value)}
                    className="p-[10px] border-[#DADADA] rounded-md w-36 bg-[#F8F8F8]"
                  >
                    <option value="" disabled>{field.placeholder}</option>
                    {field.options && field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                    field.type &&
                  <input
                    type={field.type === "phone" ? "tel" : field.type}
                    value={tenantData[rowIndex][field.name] || ""}
                    onChange={(e) => handleInputChange(rowIndex, field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="p-2 border-[#DADADA] rounded-md w-36 bg-[#F8F8F8] "
                  />
                )}
              </div>
            ))}

          
            <button 
              onClick={() => handleSave(rowIndex)}
              className=" px-4 py-[2px] bg-[#F8F8F8] text-[#242424] border-[1.5px] border-[#ECECEC] rounded-lg mb-1 shadow-[0px_4px_4px_0px_#00000040]"
            >
              Save
            </button>
            <div className="w-[130px] text-center">
            <button 
              onClick={() => handleSendInvite(rowIndex)}
              className=" px-4 text-[#242424] bg-[#FFFFFF] border border-[1.5px] border-[#ECECEC] rounded-md mb-1"
            >
              {tenantFields[4].is_sent===true?"Resend invite":"send invite"}
            </button>
            </div>
            <button 
              onClick={() => handleRemove(rowIndex)}
              className="px-4 py-[2px] bg-[#D400001A]/10 text-[#D40000] border-[1.5px] border-[#D40000] rounded-lg mb-1 shadow-[0px_4px_4px_0px_#00000040]"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 flex space-x-4">{children}</div>
    </div>
  );
};

export default EditTenantsModal;