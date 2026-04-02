import React from "react";

const TaskList = () => {
  return (
    <>
      <div  id="tasklist"
        className="flex justify-start gap-5 flex-nowrap overflow-x-auto h-[55%] bg-red-900 py-5  w-full mt-10"
      >

         <div className="bg-red-400 shrink-0 h-50 w-64 rounded-xl">

          <div className="flex justify-between items-center p-4 ">
            <h2 className="bg-red-600 px-3 text-sm py-1 rounded">High</h2>
            <h3 className="text-base">20 feb 2025</h3>
          </div>

          <h2 className="text-2xl mt-2 px-2 font-semibold">Make a youtube video</h2>
          <p className="text-sm p-2 mt-2">Lorem ipsum dolor sit amet.</p>

        

        </div> 
         <div className="bg-blue-400 shrink-0 h-50 w-64 rounded-xl">

          <div className="flex justify-between items-center p-4 ">
            <h2 className="bg-red-600 px-3 text-sm py-1 rounded">High</h2>
            <h3 className="text-base">20 feb 2025</h3>
          </div>

          <h2 className="text-2xl mt-2 px-2 font-semibold">Make a youtube video</h2>
          <p className="text-sm p-2 mt-2">Lorem ipsum dolor sit amet.</p>

        

        </div> 
         <div className="bg-green-400 shrink-0 h-50 w-64 rounded-xl">

          <div className="flex justify-between items-center p-4 ">
            <h2 className="bg-red-600 px-3 text-sm py-1 rounded">High</h2>
            <h3 className="text-base">20 feb 2025</h3>
          </div>

          <h2 className="text-2xl mt-2 px-2 font-semibold">Make a youtube video</h2>
          <p className="text-sm p-2 mt-2">Lorem ipsum dolor sit amet.</p>

        

        </div> 
         <div className="bg-yellow-400 shrink-0 h-50 w-64 rounded-xl">

          <div className="flex justify-between items-center p-4 ">
            <h2 className="bg-red-600 px-3 text-sm py-1 rounded">High</h2>
            <h3 className="text-base">20 feb 2025</h3>
          </div>

          <h2 className="text-2xl mt-2 px-2 font-semibold">Make a youtube video</h2>
          <p className="text-sm p-2 mt-2">Lorem ipsum dolor sit amet.</p>

        

        </div> 
      </div>
    </>
  );
};

export default TaskList;
