import React from "react";
import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'
import { AuthContext } from "../helpers/AuthContext";

function ForgotPassword() {
    let navigate = useNavigate();

    const initialValues = {
        username: "",
        name: "",
        last_name: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(30).required(),
        name: Yup.string().min(3).max(15).required(),
        last_name: Yup.string().min(3).max(15).required(),
    });

    const handleSubmit = (data) => {
		axios.post("http://localhost:3001/resetpassword/verifyuser", data).then((response) => {
		if (response.data.error) {
			alert(response.data.error);
		} else {
			sessionStorage.setItem('resetToken', response.data);
            navigate('/resetpassword');
        }});
	};

    return (
        <div className="forgotPassword">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainerPassword">
                    <h2>Verify Your Account</h2>
                    <br />
                    <div className="formBody">
                        <p>Please enter your email and name to verify your account.</p>
                    
                        <ErrorMessage name="username" component="span" style={{ color: 'red'}} />
                        <Field
                            autoComplete="off"
                            id="input_email"
                            type="email"
                            name="username"
                            placeholder="Email (Ex. john_smith@gmail.com)"
                            className="input-field-pswd"
                        />
                        <ErrorMessage name="name" component="span" style={{ color: 'red'}} />
                        <Field
                            autoComplete="off"
                            id="input_sign_up"
                            name="name"
                            placeholder="First Name (Ex. John)"
                            required
                            className="input-field-pswd"
                        />
                        <ErrorMessage name="last_name" component="span" style={{ color: 'red'}} />
                        <Field
                            autoComplete="off"
                            id="last_name_input"
                            name="last_name"
                            placeholder="Last Name (Ex. Smith)"
                            required
                            className="input-field-pswd"
                        />
                    </div>
                    
                    <button type="submit" className="login-btn-password">Verify</button>   
                </Form>
            </Formik>
        </div>
    );
}
export default ForgotPassword;