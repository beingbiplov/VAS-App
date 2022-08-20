import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const AdminProtectedRoutes = () => {
  let isAuthenticated = useSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );
  let isAdmin = useSelector((state: RootState) => state.userInfo.isAdmin);

  return isAuthenticated && isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminProtectedRoutes;
