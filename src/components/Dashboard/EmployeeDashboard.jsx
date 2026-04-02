import React from "react";
import Headaer from "../../Other/Headaer";
import Tasklistnumber from "../../Other/Tasklistnumber";
import Tasklist from "../../Tasklist/TaskList";



const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen ">
        {/* EmployeeDashboard */}
        <Headaer />
        <Tasklistnumber/>
        <Tasklist/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
