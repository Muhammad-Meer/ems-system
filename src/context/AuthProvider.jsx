import React, { createContext, useState } from 'react'


export const AuthContext = createContext()





const data = localStorage.getItem("user")
const AuthProvider = ({ children }) => {


  const [usedata, setdata] = useState(null)


  return (
    <>
      <div>
        <AuthContext.Provider value={"mehboob"}>
          {children}
        </AuthContext.Provider>
      </div>
    </>
  )
}

export default AuthProvider