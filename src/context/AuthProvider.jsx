import React, { createContext, useEffect, useState } from 'react'
import { getLocalfunc } from '../utils/Local.storage'


export const AuthContext = createContext()



const AuthProvider = ({ children }) => {

  const [usedata, setdata] = useState(null)


  // useEffect(() => {
  //   usecall()
  //   console.log(rerender)
  // })



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