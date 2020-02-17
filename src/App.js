import React from "react";
import "./App.css";
import Employees from "./components/Employees"


const employees = [
  {
      first_name : "Bill",
      last_name : "Evans",
      title : "Phone Rep",
      salary : "25,000"

  },
  {
      first_name : "Lee",
      last_name : "Morgan",
      title : "Phone Rep",
      salary : "27,000"

  },
  {
      first_name : "Esperanza",
      last_name : "Spaulding",
      title : "Phone Team Lead",
      salary : "32,000"

  },
  {
      first_name : "John",
      last_name : "Coltrane",
      title : "Call Center Supervisor",
      salary : "45,000"

  }
]

function App() {
  return (
    <Employees employees = {employees}/>
  );
}

export default App;
