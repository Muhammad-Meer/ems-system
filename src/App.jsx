import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import './App.css'
import { useEffect } from "react";
import { setLocalfunc } from "./utils/Local.storage";

function App() {
 
     useEffect(() => {
      setLocalfunc()
     },)
  
  return (
    <>
    <Login/>
    <EmployeeDashboard/>
    <AdminDashboard/>

    </>
  )
}

export default App
