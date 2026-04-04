import { useState } from 'react'
import './App.css'
// files
import Login from "./components/Auth/Login"

function App() {

  const [user , setuser] = useState(null)

  const handelLogin = (email, password) => {

    if(email === "admin@gmail.com" && password === "123") {
      console.log("this is admin")
      setuser("admin")
    }
    else if(email === "user@gmail.com" && password === "123") {
      console.log("this is user")
      setuser("user")
    }
    else{
      console.log("invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handelLogin={handelLogin}/> : "" }
    </>
  )
}

export default App