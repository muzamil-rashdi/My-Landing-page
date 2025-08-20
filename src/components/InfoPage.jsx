// InfoPage.jsx
import React from "react";

const InfoPage = ({ title, sections, children }) => {
  return (
    <div className="p-6 font-neue">
      {/* Page Title */}


      <div className="flex items-center justify-between flex-row border-b">
      <h1 className="text-2xl text-[#242424] font-[500] mb-6 ">{title}</h1>
      
      <button className="mb-6 mr-2 p-2 hover:bg-green-600 hover:text-white transition rounded">
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L7 6.08579L12.2929 0.792893C12.6834 0.402369 13.3166 0.402369 13.7071 0.792893C14.0976 1.18342 14.0976 1.81658 13.7071 2.20711L8.41421 7.5L13.7071 12.7929C14.0976 13.1834 14.0976 13.8166 13.7071 14.2071C13.3166 14.5976 12.6834 14.5976 12.2929 14.2071L7 8.91421L1.70711 14.2071C1.31658 14.5976 0.683417 14.5976 0.292893 14.2071C-0.0976311 13.8166 -0.0976311 13.1834 0.292893 12.7929L5.58579 7.5L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="currentColor"/>
      </svg>
      </button>
      
      </div>


    

      {sections.map((section, idx) => (
        <Section key={section.id || idx} {...section} />
      ))}

      {/* Footer */}
      <div className="mt-8 flex space-x-4">{children}</div>
    </div>
  );
};

const Section = ({ title, items, type = "default" }) => {
  return (
    <div className="mb-8">
      {/* Section Title */}
      {title && (
        <h2 className="text-lg font-[500] mb-4 text-black">{title}</h2>
      )}

      {/* Conditionally render based on section type */}
      {type === "budgetPreferences" ? (
        <BudgetPreferencesSection items={items} />
      ) : (
        <DefaultSection items={items} />
      )}

      <hr className="mt-6" />
    </div>
  );
};

const DefaultSection = ({ items }) => {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i}>
          <p className="font-semibold text-[#333333]">{item.label}</p>
          <InfoValue value={item.value} label={item.label} />
        </div>
      ))}
    </div>
  );
};

const BudgetPreferencesSection = ({ items }) => {
  // Extract values by label for cleaner code
  const estimatedCost = items.find(i => i.label === "Estimated Cost:")?.value;
  const jobPostDate = items.find(i => i.label === "Job Post Date:")?.value;
  const availability = items.find(i => i.label === "Availability:")?.value;
  const timeToComplete = items.find(i => i.label === "Select a Time to Complete the Work:")?.value;
  const attachments = items.find(i => i.label === "Attachments:")?.value;

  return (
    <div className="space-y-6">
      {/* Row 1: Estimated Cost + Job Post Date */}
      <div className="flex gap-6">
        <InfoItem label="Estimated Cost:" value={estimatedCost} />
        <InfoItem label="Job Post Date:" value={jobPostDate} />
      </div>

      {/* Availability (simple key-value) */}
      {availability && (
        <InfoItem label="Availability:" value={availability} />
      )}

      {/* Time to Complete Checkboxes */}
      {timeToComplete && (
        <div>
          <p className="font-semibold mb-2 tracking-wide">Select a Time to Complete the Work:</p>
          <div className="space-y-2">
            {timeToComplete.map((slot, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span className="text-[#595959]">{slot}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Attachments */}
      {attachments && (
        <div>
          <p className="font-semibold mb-2 tracking-wide">Attachments:</p>
          <div className="flex gap-4">
            {attachments.map((img, i) => (
              <div key={i} className="flex-1">
                <img
                  src={img}
                  alt={`attachment-${i}`}
                  className="w-full h-60 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex-1">
    <p className="font-[600] tracking-wide">{label}</p>
    <InfoValue value={value} label={label} />
  </div>
);

const InfoValue = ({ value, label }) => {
  // Special case for Map Preview
  if (label === "Map Preview:") {
    return (
      <div className="mt-2">
        <iframe
          src={value}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    );
  }
  
  if (Array.isArray(value)) {
    return (
      <div>
        {value.map((item, index) => (
          <div key={index} className="text-[#595959] tracking-wide">{item}</div>
        ))}
      </div>
    );
  }
  return <p className="text-[#595959] tracking-wide">{value}</p>;
};

export default InfoPage;