import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'

function ForgotPassword() {
    const initialValues = {
        name: "",
        last_name: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3).max(15).required(),
        last_name: Yup.string().min(3).max(15).required(),
        username: Yup.string().min(3).max(30).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
        });
    };

    return (
        <div className="forgotPassword">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
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
                        className="input-field-pswd"
                    />
                    <ErrorMessage name="last_name" component="span" style={{ color: 'red'}} />
                    <Field
                        autoComplete="off"
                        id="last_name_input"
                        name="last_name"
                        placeholder="Last Name (Ex. Smith)"
                        className="input-field-pswd"
                    />
                    </div>
                    
                    <Link to="/resetpassword">
                        <button className="login-btn-password">Verify</button>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
}

export default ForgotPassword;