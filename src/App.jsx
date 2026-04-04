// import { useEffect } from "react";
// import { setLocalfunc } from "./utils/Local.storage";
// import { getLocalfunc } from "./utils/Local.storage";
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
  
  return (
    <>
    <Login/>
    {/* <EmployeeDashboard/>
    <AdminDashboard/> */}

    </>
  )
}

export default App
