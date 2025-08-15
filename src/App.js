import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Heros";
import PropertyMaintenance from "./components/PropertyMaintenance";
import RepairManagemen from "./components/RepairManagement";
import ProperteasyWorks from "./components/ProperteasyWorks";
import Pricing from "./components/Pricing";
import WhatMakes from "./components/WhatMakes";
function App() {
  return (
        <>
        <div className="mx-2 md:mx-10">
        <Navbar/>
        <Hero />
        <PropertyMaintenance/>
        <RepairManagemen/>
        <ProperteasyWorks/>
        <Pricing/>
        <WhatMakes/>
        </div>
        
        </>
  );
}

export default App;
