import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  message,
  Typography
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { useDispatch } from 'react-redux';
import { GetRegisteredPatientData } from '../../utils/ReduxUserData';
import { setVasUserData } from '../../redux/PatientRegistrationSlice';
import { useNavigate } from 'react-router-dom'
import { stringToDate } from '../../utils/utils';
import { GetLoggedInUser } from '../../utils/ReduxUserData';
import { useEffect } from 'react';

const { Option } = Select;
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const props: UploadProps = {
  name: 'file',
  action: 'https://run.mocky.io/v3/41d85baa-499a-4766-9f25-d8b1721a75c2',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {   
    if (info.fileList.length > 0 && info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ClientRegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const patientData = GetRegisteredPatientData()
  const loggedInUser = GetLoggedInUser()

  const onFinish = (values: any) => {
    const patientData = {
      firstName: values.firstName,
      lastname: values.lastName,
      email: values.email,
      DOB: values.birthDate.format("YYYY-MM-DD").toString(),
      gender: values.gender,
      ethnicity: values.ethnicity,
      address:{
        street: values.address.street,
        city: values.address.city,
        provience: values.address.provience,
      },
      payment: {
        insurenceId: values.payment.insurenceId,
        memberId: values.payment.memberId,
        insurenceProvider: values.payment.InsurenceProvider

      },
      document: values.document
    }
    
    dispatch(setVasUserData(patientData))
    navigate('/confirm-registration')
  };

  useEffect(() =>{
    if (loggedInUser){
      navigate('/')  
    }
  })

  return (
    <div className='formContainer userRegisterForm'>
        <Title className='formContainerHeading' level={4}>User Registration</Title>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        firstName: patientData.firstName,
        lastName: patientData.lastname,
        email: patientData.email,
        birthDate: stringToDate(patientData.DOB),
        gender: patientData.gender,
        ethnicity: patientData.ethnicity,
        address:{
          provience:patientData.address.provience,
          city: patientData.address.city,
          street: patientData.address.street
        },
        payment:{
          insurenceId:patientData.payment.insurenceId,
          memberId: patientData.payment.memberId,
          InsurenceProvider: patientData.payment.insurenceProvider
        }, 
        document: patientData.document
      }}
      scrollToFirstError
    >

    <Form.Item
        name="firstName"
        label="First Name"
        tooltip="What is your first name?"
        rules={[{ required: true, message: 'Please input your firstName!', whitespace: true }]}
      >
        <Input placeholder='Jon' />
    </Form.Item>

    <Form.Item
        name="lastName"
        label="Last Name"
        tooltip="What is your last name?"
        rules={[{ required: true, message: 'Please input your lastname!', whitespace: true }]}
      >
        <Input placeholder='Doe' />
    </Form.Item>

    <Form.Item
        name="birthDate"
        label = "Date of birth"
        tooltip="What is your date of birth?"
        rules={[{ required: true, message: 'Please input your birth date!' }]}
    >
        <DatePicker />

    </Form.Item>

    <Form.Item
        name="ethnicity"
        label="Ethnicity"
        tooltip="What is your ethnicity?"
        rules={[{ required: true, message: 'Please input your ethnicity!', whitespace: true }]}
      >
        <Input placeholder='ethnicity' />
    </Form.Item>

    <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder='jondoe@email.com' />
      </Form.Item>

    <Form.Item 
      label="Address"
      >
        <Input.Group compact>
          <Form.Item
            name={['address', 'provience']}
            noStyle
            rules={[{ required: true, message: 'provience is required' }]}
          >
            <Select placeholder="Select provience">
              <Option value="Provience1">Provience 1</Option>
              <Option value="Provience2">Provience 2</Option>
              <Option value="Provience3">Provience 3</Option>
              <Option value="Provience4">Provience 4</Option>
              <Option value="Provience5">Provience 5</Option>
              <Option value="Provience6">Provience 6</Option>
              <Option value="Provience7">Provience 7</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'city']}
            noStyle
            rules={[{ required: true, message: 'City is required' }]}
          >
            <Input style={{ width: '25%' }} placeholder="Input City" />
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Street is required' }]}
          >
            <Input style={{ width: '25%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
    </Form.Item>

    <Form.Item 
      label="Payment Information"
      >
        <Input.Group compact>
          <Form.Item
            name={['payment', 'insurenceId']}
            noStyle
            rules={[{ required: true, message: 'Insurence id is required' }]}
          >
            <Input style={{ width: '33%' }} placeholder="Insurence ID" />
            
          </Form.Item>
          <Form.Item
            name={['payment', 'memberId']}
            noStyle
            rules={[{ required: true, message: 'Member ID is required' }]}
          >
            <Input style={{ width: '33%' }} placeholder="Member ID" />
          </Form.Item>
          <Form.Item
            name={['payment', 'InsurenceProvider']}
            noStyle
            rules={[{ required: true, message: 'Insurence provider is required' }]}
          >
            <Input style={{ width: '34%' }} placeholder="Insurence provider." />
          </Form.Item>
        </Input.Group>
    </Form.Item>

    <Form.Item
        name="document"
        label="Document"
        tooltip="Identification document"
        rules={[{ required: true, message: 'Please input your identification document!' }]}
      >
        <Upload {...props} listType='picture' maxCount={1} accept='.jpeg, .jpg, .png'>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button className='primaryBtn'  type="primary" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default ClientRegisterForm;