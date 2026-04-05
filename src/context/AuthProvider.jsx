import React, { createContext, useState } from 'react'


export const AuthContext = createContext()





const AuthProvider = ({ children }) => {
const data = localStorage
console.log(data.employeesdata)

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