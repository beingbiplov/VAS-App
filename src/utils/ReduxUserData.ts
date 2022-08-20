import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { patientDataInterface } from "../redux/interface/patientDataInterface";

export const GetRegisteredPatientData = (): patientDataInterface => {
  const userData = useSelector(
    (state: RootState) => state.PatientRegistrationInfo.patientData
  );
  return userData;
};

export const UserIsAuthenticated = (): boolean | undefined => {
  return useSelector((state: RootState) => state.userInfo.isAuthenticated);
};
