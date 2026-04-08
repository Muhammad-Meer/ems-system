import { useEffect, useState } from 'react'
import './App.css'

// files
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

function App() {

  const [user, setuser] = useState(null)

  const authdata = useContext(AuthContext)

  useEffect(() => {

    if (authdata) {
      const loggedin = JSON.parse(localStorage.getItem("loggedInUser"))


      if(loggedin) {
        setuser(loggedin.role)
      }
    }
  }, [authdata])
  const handleLogin = (email, password) => {


    if (email === "admin1@example.com" && password === "123") {
      setuser("admin")
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))

    }
    else if (authdata.employeesdata.find((e) => email == e.email && password == e.password)) {
      setuser("user")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }))
    }
    else {
      alert("invalid Credentials")
    }
  }

  // console.log(authdata.employeesdata)
  console.log(authdata?.employeesdata)



  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}


    </>
  )
}

export default App