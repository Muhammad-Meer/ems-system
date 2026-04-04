// import { useEffect } from "react";
// import { setLocalfunc } from "./utils/Local.storage";
// import { getLocalfunc } from "./utils/Local.storage";
import { useState } from 'react'
import './App.css'
// files
import Login from "./components/Auth/Login"
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";




function App() {
     //  useEffect(() => {
    //   setLocalfunc()
    //   getLocalfunc()
    //  }, [])

       const [user , setuser] = useState(null)

       const handelLogin = (email  , password) => {

        if(email == "admin@gmail.com" && password == "123") {
          console.log("this is admin")
        }
        else if(email == "user@gmail.com" && password == "123" ) {
          console.log("this is user")
        }
        else{
          console.log("invalid Credientionals")
        }
       }

       handelLogin("user@gmail.com", "123")
  
  return (
    <>
    {!user ? <Login handelLogin={handelLogin}/>: "" }
    {/* <EmployeeDashboard/>
    <AdminDashboard/> */}

    </>
  )
}

export default App
