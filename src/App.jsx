import { useState } from 'react'
import './App.css'

// files
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

function App() {

  const [user, setuser] = useState(null)

  const handelLogin = (email, password) => {

    if (email === "admin1@example.com" && password === "123") {
      console.log("this is admin")
      setuser("admin")
    }
    else if (email === "employee1@example.com" && password === "123") {
      console.log("this is user")
      setuser("user")
    }
    else {
      alert("invalid Credentials")
    }
  }

  const data = useContext(AuthContext)



  return (
    <>
      {!user && <Login handelLogin={handelLogin} name={name} />}

      {user === "admin" && <AdminDashboard />}
      {user === "user" && <EmployeeDashboard />}


    </>
  )
}

export default App