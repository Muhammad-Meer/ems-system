import React from 'react'
import Headaer from '../../Other/Headaer'

const AdminDashboard = () => {
  return (
    <>
    <div className='h-screen w-full p-10 '>
     <Headaer/>

     <div>
      <form>
      
       <h3>Task Title</h3>
       <input type="text" placeholder='enter task' />

       

      </form>
     </div>

    </div>
    </>
    )
}

export default AdminDashboard