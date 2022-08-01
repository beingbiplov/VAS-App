import React from 'react';
import { useNavigate } from 'react-router-dom'
import { setVasUsername } from '../../redux/slice/UserInfoSlice';
import { useDispatch } from 'react-redux';
import { removeVasUsernameLS } from '../../utils/LocalStorageData'

export const Logout = () :any =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutUser = () :any => {
        dispatch(setVasUsername(''))
        removeVasUsernameLS()
        navigate('/')
    }
    return(
        <p>
            <a onClick={logoutUser} >Logout</a>
        </p>
    )
}