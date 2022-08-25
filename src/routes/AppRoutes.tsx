import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "../components/pages/LoginForm";
import IndexPage from "../components/IndexPage";
import BaseLayout from "../components/BaseLayout";
import ClientRegisterForm from "../components/pages/ClientRegisterForm";
import ClientRegistrationConfirm from "../components/pages/ClientRegistrationConfirm";
import PatientList from "../components/pages/patientManagement/PatientList";
import AppointmentScheduleForm from "../components/pages/appointmentManagement/AppointmentScheduleForm";
import AppointmentConfirmation from "../components/pages/appointmentManagement/AppointmentConfirmation";
import PatientUpdate from "../components/pages/patientManagement/PatientUpdate";
import VaccinationCreate from "../components/pages/vaccinationManagement/VaccinationCreate";
import PageNotFound from "../components/errorResponse/PageNotFound";
import AdminProtectedRoutes from "../components/protectedRoutes/adminProtectedRotes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<ClientRegisterForm />} />
          <Route
            path="confirm-registration"
            element={<ClientRegistrationConfirm />}
          />
          <Route
            path="appointment-confirmation"
            element={<AppointmentConfirmation />}
          />
          <Route
            path="schedule-appointment"
            element={<AppointmentScheduleForm />}
          />
          <Route element={<AdminProtectedRoutes />}>
            <Route path="patient-list" element={<PatientList />} />
            <Route path="patient-update/:id" element={<PatientUpdate />} />
            <Route path="vaccination/add" element={<VaccinationCreate />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
