import { Button, Form, Typography, Checkbox } from "antd";
import { useDispatch } from "react-redux";

import PatientForm from "./forms/PatientForm";
import { GetRegisteredPatientData } from "../../utils/ReduxUserData";
import { setVasUserData } from "../../redux/slice/PatientRegistrationSlice";
import { useNavigate } from "react-router-dom";
import { stringToDate } from "../../utils/utils";
import { formItemLayout, tailFormItemLayout } from "./forms/formCommon";

const { Title } = Typography;

const ClientRegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patientData = GetRegisteredPatientData();

  const onFinish = (values: any) => {
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
    dispatch(setVasUserData(patientData));
    navigate("/confirm-registration");
  };

  return (
    <div className="container formContainer userRegisterForm">
      <Title className="formContainerHeading" level={4}>
        User Registration
      </Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          firstName: patientData.firstName,
          lastname: patientData.lastname,
          email: patientData.email,
          date_of_birth: stringToDate(patientData.date_of_birth),
          gender: patientData.gender,
          ethnicity: patientData.ethnicity,
          address: {
            provience: patientData.address.provience,
            city: patientData.address.city,
            street: patientData.address.street,
          },
          payment: {
            insurenceId: patientData.payment.insurenceId,
            memberId: patientData.payment.memberId,
            InsurenceProvider: patientData.payment.insurenceProvider,
          },
          document: patientData.document,
        }}
        scrollToFirstError
      >
        <PatientForm />
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button className="primaryBtn" type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ClientRegisterForm;
