import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'
import { useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    last_name: "",
    username: "",
    password: "",
    passwordConfirmation:""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(15).required(),
    last_name: Yup.string().min(3).max(15).required(),
    username: Yup.string().min(3).max(30).required(),
    password: Yup.string().min(4).max(20).required(),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      navigate('/login');
    });
  };

  return (
    <div className = "Register-Background">
      <div className="text-column-container">
        <h4>JOIN THE PHO RU FAMILY!</h4>
        <h6>GET EXCLUSIVE DEALS AND COUPONS RIGHT TO YOUR INBOX</h6>
        <h1>*By providing your email, you are agreeing to be contacted through this email as part of the program.</h1>
      </div>
     
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        
        <Form className="formContainer">
          <ErrorMessage name="name" component="span" style={{ color: 'red'}}/>
          <Field
            autoComplete="off"
            id="input_sign_up"
            name="name"
            placeholder="First Name"
            className = "input-field"
          />
          <ErrorMessage name="last_name" component="span" style={{ color: 'red'}}/>
          <Field
            autoComplete="off"
            id="last_name_input"
            name="last_name"
            placeholder="Last Name"
            className = "input-field"
          />
          <ErrorMessage name="username" component="span" style={{ color: 'red'}}/>
          <Field
            autoComplete="off"
            id="input_email"
            type="email"
            name="username"
            placeholder="Email"
            className = "input-field"
          />
          <ErrorMessage name="password" component="span" style={{ color: 'red'}}/>
          <Field
            autoComplete="off"
            type="password"
            id="input_password"
            name="password"
            placeholder="Password"
            className = "input-field"
          />
          <ErrorMessage name="passwordConfirmation" component="span" style={{ color: 'red'}}/>
          <Field
            autoComplete="off"
            type="password"
            id="input_confirm"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            className = "input-field"
          />
          <button type="submit">SIGN UP</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;