import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./pages/Logout";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

function IndexPage() {
  const username = useSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );
  if (username) {
    return (
      <div>
        <p>
          Welcome! <a>{username}</a>
        </p>
        <Logout />
        <p>
          <Link to="/patient-list">Patient List</Link>
        </p>
        <p>
          <Link to="/schedule-appointment">Schedule Appointment</Link>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/register"> Register</Link>
        </p>
      </div>
    );
  }
}

export default IndexPage;
