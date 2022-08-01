import { Button, Result } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";

const AppointmentConfirmation: React.FC = () => (
  <div className='container formContainer userRegisterConfirmForm'>
    <Result
      status="success"
      title="Successfully Scheduled for Vaccination Appointment!"
      subTitle="Confirmation Code: S5DSAX "
      extra={[
        <Link key="home" to="/">
          <Button type="primary">
            Home
          </Button>
        </Link>,
        <Link key="schedule" to="/schedule-appointment">
          <Button>Schedule Again</Button>,
        </Link>
      ]}
    />
  </div>
);

export default AppointmentConfirmation;