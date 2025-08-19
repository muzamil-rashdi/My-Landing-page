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
import Foter from "./components/Foter";
function App() {
  return (
        <>
        <div className="mx-2 md:mx-10">
        <Navbar/>
        <section id="Home" ></section>
        <Hero />
        <section id="Maintenance" ></section>
        <PropertyMaintenance/>
        <RepairManagement/>
        <ProperteasyWorks/>
         <section id="Pricing" ></section>
        <Pricing/>
        <WhatMakes/>
         <section id="FAQs" ></section>
        <FAQs/>
        </div>
        <section id="Updated" ></section>
        <Updated/>
        <Foter/>
        </>
  );
}

export default App;
