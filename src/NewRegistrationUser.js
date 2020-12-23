import { Button, Form, Input, message } from "antd";
import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import './NewRegistrationUser.css';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class NewRegistrationUser extends Component {
  constructor(props) {
    super(props);
  }

  onFinish = async (values) => {
    await axios
      .post("/newuser", values)
      .then(function (response) {
        if (response.status == 200) {
          message.info(response.data);
          console.log(response.data);
        } else {
          message.error("Failed, please try again later.");
        }
      })
      .catch(function (error) {
        message.error("Failed, please try again later.");
      });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed validation", errorInfo);
  };

  render() {
    return (
      <div id = "formstyle">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your FirstName!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your LastName!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default NewRegistrationUser;
