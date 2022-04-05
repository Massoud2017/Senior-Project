import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'

function ResetPassword() {
    const initialValues = {
        password: "",
        passwordConfirmation: "",
    };

    const validationSchema = Yup.object().shape({
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
                    <h1>Password Reset</h1>

                    <label>New Password:</label>
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
                    <button type="submit">Reset Password</button>
                </Form>
            </Formik>
        </div>
    );
}

export default ResetPassword;