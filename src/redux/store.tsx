import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './UserInfoSlice'
import PatientRegistrationInfoReducer from './PatientRegistrationSlice'

export const store = configureStore({
    reducer : {
        userInfo : userInfoReducer,
        PatientRegistrationInfo : PatientRegistrationInfoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch