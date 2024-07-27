"use client";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { GoMail } from "react-icons/go";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { send } from "./SendMail";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (values: {
    name: string;
    email: string;
    phone: string;
    requirement: string;
    message: string;
  }) => {
    try {
      setSubmitting(true);
      const emailSent = await send(values);
      if (emailSent.success) {
        setSubmitting(false);
        // Swal.fire({
        //   title: "Success!",
        //   text: "Form Submitted Successfully",
        //   icon: "success",
        // });
        window.location.href = "/thankyou";
        form.resetFields();
      } else {
        setSubmitting(false);
        Swal.fire({
          title: "Failed!",
          text: emailSent.error || "Form Submission Failed!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting the form",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div
        id="contact"
        className="lg:pt-40 pt-24"
        // style={{
        //   background: `url(${bgImages.src})`,
        // }}
      >
        <div className="block pb-2 lg:pb-7">
          <h2
            // style={{ textShadow: "0 0 3px #ed7936, 0 0 0px #ed7936" }}
            className="lg:text-5xl md:text-4xl text-3xl pb-4 text-center font-bold text-[#ed3c36]"
          >
            Contact Us
          </h2>
        </div>
        <div className="lg:flex px-4 md:px-8">
          <div className="lg:w-1/2 w-full lg:px-6 mb-10">
            <div className="md:w-full flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.793825987459!2d72.8440247!3d19.0219928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceda4872de3b%3A0x49ce1d870a45cf3f!2sVidyalankar%20Classes%20and%20Publications%20-%20Dadar(W)%20%7C%20IIT%20JEE%2C%20MHT-CET%2C%20NEET%2C%20Engineering%20Degree%2CB.Sc.(IT)%2C%20GATE%2C%20Study%20Abroad!5e0!3m2!1sen!2sin!4v1722022022268!5m2!1sen!2sin"
                width="600"
                height="450"
                className="rounded-lg border border-solid;"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:px-6 mb-10">
            <div className="lg:p-5">
              <Form
                form={form}
                name="normal_login"
                className="login-form bg-white"
                initialValues={{ remember: true }}
                onFinish={handleFormSubmit}
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your Name!" },
                  ]}
                >
                  <Input
                    type="text"
                    className=" border-2 py-3  rounded-2xl px-5 mb-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                    suffix={
                      <UserOutlined className="site-form-item-icon text-xl" />
                    }
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <Input
                    type="email"
                    className=" border-2 py-3  rounded-2xl px-5 mb-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                    suffix={<GoMail className="site-form-item-icon text-xl" />}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone!" },
                  ]}
                >
                  <Input
                    type="number"
                    className=" border-2 py-3  rounded-2xl px-5 mb-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                    suffix={
                      <BiSolidPhoneCall className="site-form-item-icon text-2xl" />
                    }
                    placeholder="Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="requirement"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Requirement!",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    className=" border-2 py-3  rounded-2xl px-5 mb-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                    suffix={
                      <MdOutlineEventNote className="site-form-item-icon text-xl" />
                    }
                    placeholder="Requirement"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please input your Message!" },
                  ]}
                >
                  <TextArea
                    className=" border-2 py-3  rounded-2xl px-5 mb-2"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      height: 100,
                      resize: "none",
                    }}
                    maxLength={500}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Item>
                <Form.Item className="text-center">
                  <Button
                    htmlType="submit"
                    className="bg-[#ed4236] h-auto px-10 py-2 text-lg text-white rounded-2xl font-medium hover:text-[#ed7936] hover:border-[#ed7936]"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="text-center px-3 py-5">
           <p className="font-bold">© 2024 All Rights Reserved Vidyalankar | Crafted by <a className="text-red-500 hover:text-red-700" href="https://shaikhdanish.vercel.app/">Danish Shaikh</a></p>
        </div>
      </div>
    </>
  );
};

export default Contact;
