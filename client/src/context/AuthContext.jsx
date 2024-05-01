import { createContext, useContext, useState } from "react";



const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
    // localStorage.setItem('user', JSON.stringify(data)) " Write it in the Signup file or Signin file
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
}