import { Modal, Button, Descriptions } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { patientListInterface } from "../../../redux/interface/patientDataInterface";

const PatientDetails: React.FC<{ patientData: patientListInterface }> = ({
  patientData,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOkBtn = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Link to="" className="textPrimary" onClick={() => setModalVisible(true)}>
        View
      </Link>
      <Modal
        title="Patient Details"
        centered
        width={1200}
        visible={modalVisible}
        onCancel={handleOkBtn}
        footer={[
          <Button
            className="secondaryOutlineBtn"
            href={`/patient-update/${patientData.id}`}
            key="update"
          >
            Update Patient
          </Button>,
          <Button
            key="ok"
            className="primaryBtn"
            type="primary"
            onClick={handleOkBtn}
          >
            Ok
          </Button>,
        ]}
      >
        <Descriptions bordered>
          <Descriptions.Item label="First Name">
            {patientData.first_name}
          </Descriptions.Item>
          <Descriptions.Item label="Last Name">
            {patientData.last_name}
          </Descriptions.Item>
          <Descriptions.Item label="Gender">
            {patientData.gender}
          </Descriptions.Item>
          <Descriptions.Item label="Ethnicity">
            {patientData.ethnicity}
          </Descriptions.Item>
          <Descriptions.Item label="DOB" span={2}>
            {patientData.date_of_birth}
          </Descriptions.Item>
          <Descriptions.Item label="Street">
            {patientData.address.street}
          </Descriptions.Item>
          <Descriptions.Item label="City">
            {patientData.address.city}
          </Descriptions.Item>
          <Descriptions.Item label="Provience">
            {patientData.address.provience}
          </Descriptions.Item>
          <Descriptions.Item label="Insurence ID">
            {patientData.payment.insurenceId}
          </Descriptions.Item>
          <Descriptions.Item label="Member ID">
            {patientData.payment.memberId}
          </Descriptions.Item>
          <Descriptions.Item label="Insurence Provider">
            {patientData.payment.insurenceProvider}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </div>
  );
};

export default PatientDetails;
