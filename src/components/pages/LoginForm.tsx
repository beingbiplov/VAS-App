import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import { Link } from "react-router-dom";

import "../../styles/forms.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slice/UserInfoSlice";
import { UserIsAuthenticated } from "../../utils/ReduxUserData";
import { loginUser } from "../../services/userService";
import { setCookieOnLogin } from "../../cookie/authCookie";

const { Title } = Typography;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedIn = UserIsAuthenticated();

  const onFinish = async (values: any) => {
    await loginUser(values)
      .then((data) => {
        setCookieOnLogin(data.data);
        dispatch(
          setUserData({
            isAdmin: data.data.data.userData.is_admin,
            isAuthenticated: true,
            ...data.data.data.userData,
          })
        );

        message.success("User logged in successfully.", 5);
        navigate("/");
      })
      .catch((err) => {
        const errMsg =
          err.response.status === 401
            ? err.response.data.message
            : "unexpected error occurred. Please try agin later!";
        message.error({
          content: errMsg,
          style: {
            marginTop: "13%",
          },
          duration: 5,
        });
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/");
    }
  });

  return (
    <div className="container formContainer">
      <Title className="formContainerHeading" level={4}>
        Login
      </Title>
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
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="jondoe@email.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="*********" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="primaryBtn" type="primary" htmlType="submit">
            Login
          </Button>
          <Link to="/register"> Register</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
