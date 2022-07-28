import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import '../../styles/forms.css'
import { useNavigate } from 'react-router-dom'
import { userInfo } from '../../constants/UserInfo'
import { setVasUsernameLS } from '../../utils/LocalStorageData';
import { useDispatch, useSelector } from 'react-redux';
import { setVasUsername } from '../../redux/UserInfoSlice';
import { RootState } from '../../redux/store';

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const username = useSelector((state:RootState) => state.userInfo.username)
  
  const onFinish = (values: any) => {  
    if (userInfo.username === values.username && userInfo.Password === values.password){
      dispatch(setVasUsername(values.username))
      setVasUsernameLS(values.username)
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
    if (username){
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