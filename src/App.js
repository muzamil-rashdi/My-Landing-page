import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Heros";
import PropertyMaintenance from "./components/PropertyMaintenance";
import RepairManagement from "./components/RepairManagement";
import ProperteasyWorks from "./components/ProperteasyWorks";
import Pricing from "./components/Pricing";
import WhatMakes from "./components/WhatMakes";
import FAQs from "./components/FAQs";
import Updated from "./components/Updated";
function App() {
  return (
        <>
        <div className="mx-2 md:mx-10">
        <Navbar/>
        <Hero />
        <PropertyMaintenance/>
        <RepairManagement/>
        <ProperteasyWorks/>
        <Pricing/>
        <WhatMakes/>
        <FAQs/>
        </div>
        <Updated/>
        
        </>
  );
}

export default App;
