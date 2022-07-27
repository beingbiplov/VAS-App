import { Button, Checkbox, Form, Input } from 'antd';
import React, { useContext, useEffect } from 'react';
import '../../styles/forms.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { userInfo } from '../../constants/UserInfo'

const LoginForm: React.FC = () => {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  
  const onFinish = (values: any) => {  
    if (userInfo.username === values.username && userInfo.Password === values.password){
      authContext?.setIsLoggedIn(true)
      authContext?.setUsername(values.username)
      navigate('/')
    }
    else{
      onFinishFailed('Username or password did not match.')
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() =>{
    if (authContext?.isLoggedIn){
      navigate('/')  
    }
  })

  return (
    <div className='formContainer'>
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
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className='primaryBtn' type="primary" htmlType="submit">
            Login
            </Button>
        </Form.Item>
        </Form>
    </div>
  );
};

export default LoginForm;