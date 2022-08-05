import React from "react";
import { Form, Typography, Button } from "antd";

import VaccinationForm from "../forms/VaccinationForm";
import { formLayout, tailFormItemLayout } from "../forms/formCommon";

const { Title } = Typography;

const VaccinationCreate: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="container formContainer userRegisterForm">
      <Title className="formContainerHeading" level={4}>
        Add New Vaccination Service
      </Title>
      <Form {...formLayout} name="service-add" onFinish={onFinish}>
        <VaccinationForm />
        <Form.Item {...tailFormItemLayout}>
          <Button className="primaryBtn" type="primary" htmlType="submit">
            Add Service
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VaccinationCreate;
