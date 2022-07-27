import { AuthContext } from '../contexts/AuthContext';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export const Logout = () :any =>{
    const navigate = useNavigate()
    const authContext = useContext(AuthContext);

    const logoutUser = () :any => {
        authContext?.setIsLoggedIn(false)
        authContext?.setUsername('')
        navigate('/')
    }
    return(
        <div>
            <a onClick={logoutUser} >Logout</a>
        </div>
    )
}