import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { patientDataInterface } from "../interface/patientDataInterface";

const initialState = (): patientDataInterface => {
  return {
    firstName: "",
    lastname: "",
    email: "",
    DOB: "",
    gender: "",
    ethnicity: "",
    address: {
      street: "",
      city: "",
      provience: "",
    },
    payment: {
      insurenceId: "",
      memberId: "",
      insurenceProvider: "",
    },
    document: {} as File,
  };
};

export const PatientRegistrationInfoSlice = createSlice({
  name: "userRegistrationInfo",
  initialState: { patientData: initialState() },
  reducers: {
    setVasUserData: (state, action: PayloadAction<patientDataInterface>) => {
      state.patientData = action.payload;
    },
    resetVasUserData: (state) => {
      state.patientData = initialState();
    },
  },
});

export const { setVasUserData, resetVasUserData } =
  PatientRegistrationInfoSlice.actions;

export default PatientRegistrationInfoSlice.reducer;
