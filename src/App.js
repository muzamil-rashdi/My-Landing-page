// import React from "react";
// import './App.css';
// import Navbar from "./components/Navbar";
// import Hero from "./components/Heros";
// import PropertyMaintenance from "./components/PropertyMaintenance";
// import RepairManagement from "./components/RepairManagement";
// import ProperteasyWorks from "./components/ProperteasyWorks";
// import Pricing from "./components/Pricing";
// import WhatMakes from "./components/WhatMakes";
// import FAQs from "./components/FAQs";
// import Updated from "./components/Updated";
// import Foter from "./components/Foter";
// function App() {
//   return (
//         <>
//         <div className="mx-2 md:mx-10">
//         <Navbar/>
//         <section id="Home" ></section>
//         <Hero />
//         <section id="Maintenance" ></section>
//         <PropertyMaintenance/>
//         <RepairManagement/>
//         <ProperteasyWorks/>
//          <section id="Pricing" ></section>
//         <Pricing/>
//         <WhatMakes/>
//          <section id="FAQs" ></section>
//         <FAQs/>
//         </div>
//         <section id="Updated" ></section>
//         <Updated/>
//         <Foter/>
//         </>
//   );
// }

// export default App;

     
    

// Usage in App.js
import heroBg from "./assets/images/bghero.png";
import InfoPage from "./components/InfoPage";

const pageData = {
  title: "Job Details",
  sections: [
    {
      id: "job-info",
      title: "Job Information",
      items: [
        { label: "Job Title:", value: "Fix leaky bathroom faucet" },
        { label: "Job Category:", value: "Plumbing" },
        {
          label: "Job Description:",
          value: "Water is dripping continuously from the bathroom faucet. Tried tightening but it didn't help. May need a replacement. Urgent as it's causing water waste."
        },
        { label: "Scheduled Time:", value: "Wednesday Morning (8am–12pm)" }
      ]
    },
    {
      id: "tenant-info",
      title: "Tenant Information",
      items: [
        { label: "Tenant Name:", value: "Jason Smith" },
        { label: "Phone Number:", value: "+1 (516)-123-4576" },
        { label: "Email:", value: "JSmith@gmail.com" }
      ]
    },
    {
      id: "property-info",
      title: "Property Information",
      items: [
        {
          label: "Property Access:",
          value: "Please enter through side door"
        },
        {
          label: "Pet Information:",
          value: "Please enter through side door"
        },
        {
          label: "Property Information:",
          value: "123 Main Street, Apt 4B, New York, NY 10001"
        },
        {
          label: "Map Preview:",
          value: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0062580845842!3d40.71277527932651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a345ae0a3a9%3A0x5f9b920c705dcd99!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1623947486419!5m2!1sen!2sus"
        }
      ]
    },
    {
      id: "budget-preferences",
      title: "Budget & Preferences",
      type: "budgetPreferences", // Special type for custom rendering
      items: [
        { label: "Estimated Cost:", value: "$100 – $250" },
        { label: "Job Post Date:", value: "June 16, 2025" },
        {
          label: "Availability:",
          value: [
            "Wednesday Morning (8am–12pm)",
            "Thursday Afternoon (12pm–3pm)",
            "Friday All Day (8am–6pm)",
            "Saturday All Day (8am–6pm)"
          ]
        },
        {
          label: "Select a Time to Complete the Work:",
          value: [
            "Wednesday Morning (8am–12pm)",
            "Thursday Afternoon (12pm–3pm)",
            "Friday All Day (8am–6pm)",
            "Saturday All Day (8am–6pm)"
          ]
        },
        {
          label: "Attachments:",
          value: [heroBg, heroBg]
        }
      ]
    }
  ]
};

// Alternative example with multiple map previews
const pageDataWithMultipleMaps = {
  title: "Property Details",
  sections: [
    {
      id: "location-info",
      title: "Location Information",
      items: [
        {
          label: "Map Preview:",
          value: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0062580845842!3d40.71277527932651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a345ae0a3a9%3A0x5f9b920c705dcd99!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1623947486419!5m2!1sen!2sus"
        },
        {
          label: "Satellite View:",
          value: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0062580845842!3d40.71277527932651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a345ae0a3a9%3A0x5f9b920c705dcd99!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1623947486419!5m2!1sen!2sus"
        }
      ]
    }
  ]
};

export default function App() {
  return (
    <InfoPage 
      title={pageData.title} 
      sections={pageData.sections}
    >
      <button className="px-4 py-2 bg-gray-300 rounded-xl">Back</button>
      <button className="px-4 py-2 bg-red-600 text-white rounded-xl">
        Deny With Reason
      </button>
      <button className="px-4 py-2 bg-green-600 text-white rounded-xl">
        Approve Job
      </button>
    </InfoPage>
  );
}