import React from 'react';
import '../styles/style.css'
import { Link, Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
        <Link to="/">
          <h2 className='pageHeadingH2'>Vaccination Appointment Scheduling</h2>
        </Link>
        <Outlet />
    </div>

  );
}

export default BaseLayout;
