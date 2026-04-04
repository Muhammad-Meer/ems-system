import { useState } from 'react'
import './App.css'

// files
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

function App() {

  const [user, setuser] = useState(null)

  const handelLogin = (email, password) => {

    if (email === "admin@gmail.com" && password === "123") {
      console.log("this is admin")
      setuser("admin")
    }
    else if (email === "user@gmail.com" && password === "123") {
      console.log("this is user")
      setuser("user")
    }
    else {
      alert("invalid Credentials")
    }
  }

  return (
    <>
      {!user && <Login handelLogin={handelLogin} />}

      {user === "admin" && <AdminDashboard />}
      {user === "user" && <EmployeeDashboard />}
    </>
  )
}

export default App