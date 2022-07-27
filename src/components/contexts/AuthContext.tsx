import { createContext, Dispatch, useState, SetStateAction, ReactNode  } from "react";
import { getVasUsername } from '../../utils/LocalStorageData'

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
    const storedUsername = getVasUsername()

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(storedUsername.isLoggedIn)
    const [username, setUsername] = useState<string>(storedUsername.username)
    
    return(<AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, username, setUsername}}>{children}</AuthContext.Provider>)
}