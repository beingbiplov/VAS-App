import { patientDataInterface } from "../redux/interface/patientDataInterface";

// LS: Local Storage
export const getVasUsernameLS = (): any => {
  const username = localStorage.getItem("vasUsername");
  return username;
};

export const setVasUsernameLS = (username: string): boolean => {
  localStorage.setItem("vasUsername", username);
  return true;
};

export const removeVasUsernameLS = (): boolean => {
  localStorage.removeItem("vasUsername");
  return true;
};

export const storePatientDataLS = (
  patientData: patientDataInterface
): boolean => {
  let storedPatientData = localStorage.getItem("VasPatientData");
  if (!storedPatientData) {
    localStorage.setItem("VasPatientData", JSON.stringify([patientData]));
  } else {
    let newPatientData = JSON.parse(storedPatientData);
    newPatientData.push(patientData);
    localStorage.setItem("VasPatientData", JSON.stringify(newPatientData));
  }
  return true;
};

export const getPatientDataLS = (): patientDataInterface[] | undefined => {
  const patientData = localStorage.getItem("VasPatientData");
  if (patientData) {
    return JSON.parse(patientData);
  }
  return undefined;
};
