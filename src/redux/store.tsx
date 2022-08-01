import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './slice/UserInfoSlice'
import PatientRegistrationInfoReducer from './slice/PatientRegistrationSlice'
import appointmentScheduleDataReducer from './slice/AppointmentScheduleSlice'

export const store = configureStore({
    reducer : {
        userInfo : userInfoReducer,
        PatientRegistrationInfo : PatientRegistrationInfoReducer,
        appointmentScheduleData : appointmentScheduleDataReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch