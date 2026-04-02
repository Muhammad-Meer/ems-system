import React from "react";
import Headaer from "../../Other/Headaer"
import Tasklistnumber from "./Other/Tasklistnumber"


const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] ">
        {/* EmployeeDashboard */}
        <Headaer />
        <Tasklistnumber/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
