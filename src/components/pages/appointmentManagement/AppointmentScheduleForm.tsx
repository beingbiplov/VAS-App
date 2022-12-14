import { Button, Form, Input, Select, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAppointmentData } from '../../../redux/slice/AppointmentScheduleSlice';

const { Option } = Select;
const { Title } = Typography;

const AppointmentScheduleForm: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    const appointmentData = {
      patientId : values.patientId,
      siteLocation : values.siteLocation,
      serviceType : values.serviceType,
      confirmationCode : values.confirmationCode
    }
    dispatch(setAppointmentData(appointmentData))
    navigate('/appointment-confirmation')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container formContainer'>
      <Title className='formContainerHeading' level={4}>Schedule an appointment</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Patient Id"
          name="patientId"
          rules={[{ required: true, message: 'Please input your patient id!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Site Location"
          name="siteLocation"
          rules={[{ required: true, message: 'Please input your preferred location!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
        name="serviceType"
        label="Service Type"
        rules={[{ required: true, message: 'Please select a service type!' }]}
      >
        <Select placeholder="select a service type">
          <Option value="Verocel">Verocel</Option>
          <Option value="Pfizer">Pfizer</Option>
          <Option value="AstraZeneca">AstraZeneca</Option>
          <Option value="Johnson&Johnson">Johnson & Johnson</Option>
        </Select>
      </Form.Item>

        <Form.Item
          label="Confirmation Code"
          name="confirmationCode"
          rules={[{ required: true, message: 'Please input your confirmation code!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className='primaryBtn' type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppointmentScheduleForm;
