import React from 'react'
import Headaer from '../../Other/Headaer'

const AdminDashboard = () => {
  return (
    <>
    <div className='h-screen w-full p-10 '>
     <Headaer/>

     <div className='bg-amber-800'>
      <form>
      
       <h3>Task Title</h3>
       <input type="text" placeholder='enter task' />


       <h3>Description</h3>
       <input type="text" placeholder='Description' />
      
      <textarea placeholder='text area' name="" id=""></textarea>

      </form>
     </div>

    </div>
    </>
    )
}

export default AdminDashboard