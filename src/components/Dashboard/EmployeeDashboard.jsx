import React from "react";
import Headaer from "../../Other/Headaer";
import Tasklistnumber from "../../Other/Tasklistnumber";
import Tasklist from "../../Tasklist/TaskList";



const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-gray-600 h-screen ">
        <Headaer />
        <Tasklistnumber/>
        <Tasklist/>
      </div>
    </>
  );
};

export default EmployeeDashboard;
