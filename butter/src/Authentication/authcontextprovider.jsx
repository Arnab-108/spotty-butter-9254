import { createContext } from "react";
import { useState } from "react";
export const authProvider = createContext()


function AuthContextProvider({children}){
    const [isAuth , setIsAuth] = useState(false)
    
    const Login = ()=>{
        setIsAuth(true)
    }
    const Logout = ()=>{
        setIsAuth(false)
    }

    return (
        <authProvider.Provider value={{isAuth , Login , Logout}} >
            {children}
        </authProvider.Provider>
    )
}

export default AuthContextProvider