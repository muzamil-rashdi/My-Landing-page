import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Heros";
import PropertyMaintenance from "./components/PropertyMaintenance";
import RepairManagemen from "./components/RepairManagement";
function App() {
  return (
        <>
        <div className="mx-2 md:mx-10">
        <Navbar/>
        <Hero />
        <PropertyMaintenance/>
        <RepairManagemen/>
        </div>
        </>
  );
}

export default App;
