
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
            autocomplete="off"
            id="inputCreatePost"
            name="name"
            placeholder="(Ex. John)"
          />
          <label>Last name: </label>
          <ErrorMessage name="last_name" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="last_name"
            placeholder="(Ex. Smith...)"
          />
          <label>Email: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            type="email"
            name="username"
            placeholder="Enter your Email"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Your Password..."
          />
         <label>Confirm Password: </label>
          <ErrorMessage name="passwordConfirmation" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputCreatePost"
            name="passwordConfirmation"
            placeholder="Your Password..."
          />
          <ErrorMessage name="check" component="span" />
          <label> <p>I accept the <u>Terms and Conditions</u></p></label>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            input type="checkbox" required name="terms" 
            name="check"
          />
          
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;