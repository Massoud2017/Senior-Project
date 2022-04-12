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
        axios.post("http://localhost:3001/verifyuser", data).then(() => {
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
                    <h1>Verify your account</h1>
                    <br />
                    <p>Please verify your personal information first...</p>

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
                        placeholder="(Ex. Smith)"
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

                    <Link to="/resetpassword">
                        <button className="login-btn">Verify</button>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
}

export default ForgotPassword;