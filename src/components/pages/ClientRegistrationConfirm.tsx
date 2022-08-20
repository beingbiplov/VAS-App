import React from "react";
import { Typography, Divider, Col, Row, Button, message } from "antd";
import { GetRegisteredPatientData } from "../../utils/ReduxUserData";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { resetVasUserData } from "../../redux/slice/PatientRegistrationSlice";
import { useDispatch } from "react-redux";
import { storePatientDataLS } from "../../utils/LocalStorageData";

const { Title, Text } = Typography;

const ClientRegistrationConfirm: React.FC = () => {
  const patientData = GetRegisteredPatientData();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleConfirmation = () => {
    storePatientDataLS(patientData);
    message.success(`Registration successful`);
    dispatch(resetVasUserData());
    navigate("/");
  };

  useEffect(() => {
    if (!patientData.email) {
      navigate("/");
    }
  });

  return (
    <section className="container formContainer userRegisterConfirmForm">
      <Title className="formContainerHeading" level={5}>
        Please Confirm the details below and confirm to register.{" "}
      </Title>
      <Divider />
      <Row>
        <Col className="userConfirmFormCol" span={24}>
          <Title level={5}>
            First name:{" "}
            <Text type="secondary" italic>
              {patientData.firstName}
            </Text>
          </Title>
          <Title level={5}>
            Last name:{" "}
            <Text type="secondary" italic>
              {patientData.lastname}
            </Text>
          </Title>
          <Title level={5}>
            Email:{" "}
            <Text type="secondary" italic>
              {patientData.email}
            </Text>
          </Title>
          <Title level={5}>
            DOB:{" "}
            <Text type="secondary" italic>
              {patientData.DOB}
            </Text>
          </Title>
          <Title level={5}>
            Ethnicity:{" "}
            <Text type="secondary" italic>
              {patientData.ethnicity}
            </Text>
          </Title>
          <Title level={5}>
            Gender:{" "}
            <Text type="secondary" italic>
              {patientData.gender}
            </Text>
          </Title>
          <Title level={5}>
            Address:{" "}
            <Text type="secondary" italic>
              {patientData.address.street}, {patientData.address.city},{" "}
              {patientData.address.provience}
            </Text>
          </Title>
          <Title level={5}>
            Payment:{" "}
            <Text type="secondary" italic>
              {patientData.payment.memberId}, {patientData.payment.insurenceId},{" "}
              {patientData.payment.insurenceProvider}
            </Text>
          </Title>
        </Col>
        <Col className="userConfirmFormCol" span={24}>
          <Button
            onClick={handleConfirmation}
            className="primaryBtn confirmBtn"
            type="primary"
            htmlType="submit"
          >
            Confirm and Submit
          </Button>
        </Col>
        <Col className="userConfirmFormCol" span={24}>
          <Link to="/register"> Edit</Link>
        </Col>
      </Row>
    </section>
  );
};

export default ClientRegistrationConfirm;
