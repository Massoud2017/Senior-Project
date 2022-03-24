import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'
function Register() {
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
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <h1>Sign Up</h1>
        <label>First name: </label>
          <ErrorMessage name="name" component="span" />
          <Field
            autoComplete="off"
            id="input_sign_up"
            name="name"
            placeholder="(Ex. John)"
          />
          <label>Last name:</label>
          <ErrorMessage name="last_name" component="span" />
          <Field
            autoComplete="off"
            id="last_name_input"
            name="last_name"
            placeholder="(Ex. Smith...)"
          />
          <label>Email:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="input_email"
            type="email"
            name="username"
            placeholder="Enter your Email"
          />

          <label>Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="input_password"
            name="password"
            placeholder="Your Password..."
          />
         <label>Confirm Password:</label>
          <ErrorMessage name="passwordConfirmation" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="input_confirm"
            name="passwordConfirmation"
            placeholder="Your Password..."
          />
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;