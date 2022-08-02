import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { appointmantDataInterface } from "../interface/appointmantDataInterface";

const initialState = (): appointmantDataInterface => {
  return {
    patientId: "",
    siteLocation: "",
    serviceType: "",
    confirmationCode: "",
  };
};

export const AppointmentScheduleSlice = createSlice({
  name: "appointmentScheduleData",
  initialState: { appointmentData: initialState() },
  reducers: {
    setAppointmentData: (
      state,
      action: PayloadAction<appointmantDataInterface>
    ) => {
      state.appointmentData = action.payload;
    },
    resetAppointmentData: (state) => {
      state.appointmentData = initialState();
    },
  },
});

export const { setAppointmentData, resetAppointmentData } =
  AppointmentScheduleSlice.actions;

export default AppointmentScheduleSlice.reducer;
