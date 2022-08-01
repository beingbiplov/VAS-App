import { Button, Result } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";

const AppointmentConfirmation: React.FC = () => {
  //static confirmation code as confirmation code functionality is not yet implemented
  const confirmationCode = 'S5DSAX';
  return(
    <div className='container formContainer userRegisterConfirmForm'>
      <Result
        status="success"
        title="Successfully Scheduled for Vaccination Appointment!"
        subTitle={`Confirmation Code: ${confirmationCode}`}
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
  )
};

export default AppointmentConfirmation;