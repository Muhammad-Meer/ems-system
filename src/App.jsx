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

  }, [])
  const handleLogin = (email, password) => {

    if (email === "admin1@example.com" && password === "123") {
      setuser("admin")
    }
    else if (authdata.employeesdata.find((e) => email == e.email && password == e.password)) {
      setuser("user")
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
      {user === "user" && <EmployeeDashboard />}


    </>
  )
}

export default App