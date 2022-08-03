import React, { useEffect } from "react";
import { Form, Typography, Button, message } from "antd";
import { useNavigate, useParams} from "react-router-dom";

import PatientForm from "../forms/PatientForm";
import { patientMockData } from "../../../constants/UserInfo";
import { GetLoggedInUser } from '../../../utils/ReduxUserData';
import { formItemLayout, tailFormItemLayout  } from '../forms/formCommon';

const { Title } = Typography;

const PatientUpdate: React.FC = () =>{
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const loggedInUser = GetLoggedInUser()
   let { id } = useParams()

  const onFinish = (values: any) => {
    console.log(id, values)
    message.success(`Patient data updated successfully.`);
    navigate('/patient-list')
  };

  useEffect(() =>{
    if (!loggedInUser){
      navigate('/')  
    }
  })

  return(
    <div className='container formContainer userRegisterForm'>
        <Title className='formContainerHeading' level={4}>Update User</Title>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={patientMockData}
        scrollToFirstError
      >
        <PatientForm />
        <Form.Item {...tailFormItemLayout}>
          <Button className='primaryBtn'  type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PatientUpdate;