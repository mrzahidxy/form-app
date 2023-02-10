import { Input, Form, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (user) => {
    console.log("USER ::>>> ", user);

    const res = await axios.post(
      "https://user-sector-app.vercel.app/auth/signup",
      user
    );
    console.log("response :::>>>", res.data);
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-100">
      <div className="flex flex-row h-full w-full border shadow-lg">
        {/* BANNER */}
        <div
          className={`relative flex-1 bg-gradient-to-b from-blue-600 to-blue-400`}
        ></div>
        {/* Form */}
        <div className="w-full h-full flex-1 flex justify-center items-center bg-white">
          <div className="w-2/3">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button- w-full bg-blue-500"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
