import React, { useEffect, useState } from "react";
import { Form, Typography, Button, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";

import PatientForm from "../forms/PatientForm";
import { formItemLayout, tailFormItemLayout } from "../forms/formCommon";
import { getPatient, updatePatient } from "../../../services/patientService";
import { stringToDate } from "../../../utils/utils";
import { verifyToken } from "../../../services/userService";
import Loading from "../../preloader/Loading";

const { Title } = Typography;

const PatientUpdate: React.FC = () => {
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState<{}>();
  const navigate = useNavigate();

  let { id } = useParams();

  const getPatientData = async () => {
    if (id) {
      await getPatient(+id).then((data) => {
        const res = data.data.data;
        const initialValue = {
          firstName: res.first_name,
          lastname: res.last_name,
          date_of_birth: stringToDate(res.date_of_birth),
          ethnicity: res.ethnicity,
          email: res.email,
          gender: res.gender,
          address: res.address,
          payment: res.payment,
        };
        setInitialValues(initialValue);
      });
    }
  };
  useEffect(() => {
    getPatientData();
  }, []);

  const onFinish = async (values: any) => {
    const patientData = {
      firstName: values.firstName,
      lastname: values.lastname,
      email: values.email,
      date_of_birth: values.date_of_birth.format("YYYY-MM-DD").toString(),
      gender: values.gender,
      ethnicity: values.ethnicity,
      address: {
        street: values.address.street,
        city: values.address.city,
        provience: values.address.provience,
      },
      payment: {
        insurenceId: values.payment.insurenceId,
        memberId: values.payment.memberId,
        insurenceProvider: values.payment.insurenceProvider,
      },
      document: values.document,
    };

    await verifyToken().then(async () => {
      if (id) {
        await updatePatient(+id, patientData)
          .then((res) => {
            navigate("/patient-list");
            message.success("Contact successfully updated.", 5);
          })
          .catch((err) => {
            const errMsg = "unexpected error occurred. Please try agin later!";
            message.error({
              content: errMsg,
              duration: 5,
            });
          });
      }
    });
  };

  if (initialValues) {
    return (
      <div className="container formContainer userRegisterForm">
        <Title className="formContainerHeading" level={4}>
          Update Patient Information
        </Title>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={initialValues}
          scrollToFirstError
        >
          <PatientForm />
          <Form.Item {...tailFormItemLayout}>
            <Button className="primaryBtn" type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else {
    return (
      <div className="container formContainer userRegisterForm">
        <Loading />
      </div>
    );
  }
};

export default PatientUpdate;
