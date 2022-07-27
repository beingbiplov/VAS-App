import { createContext, Dispatch, useState, SetStateAction, ReactNode  } from "react";

interface Auth{
    isLoggedIn: boolean;
    username: string;
    setIsLoggedIn : Dispatch<SetStateAction<boolean>>;
    setUsername : Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<Auth | undefined>(undefined)

type Props={
    children? : ReactNode
}

export const AuthProvider: React.FC<Props> =({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    return(<AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, username, setUsername}}>{children}</AuthContext.Provider>)
}